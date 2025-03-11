// API Middleware Configuration
const API_CONFIG = {
    baseURL: 'http://api.example.com', // Replace with your API base URL
    maxRetries: 3,
    retryDelay: 1000, // milliseconds
    timeout: 30000, // milliseconds
    defaultHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
};

class ApiMiddleware {
    constructor(config = {}) {
        this.config = { ...API_CONFIG, ...config };
    }

    /**
     * Main method to invoke API calls
     * @param {string} path - API endpoint path
     * @param {string} method - HTTP method (GET, POST, PUT, DELETE, etc.)
     * @param {Object} requestData - Request payload
     * @param {Object} headers - Custom headers
     * @param {Object} options - Additional options (timeout, retry, etc.)
     * @returns {Promise} - API response
     */
    async invokeApi(path, method = 'GET', requestData = null, headers = {}, options = {}) {
        const requestOptions = this._prepareRequestOptions(method, requestData, headers, options);
        const url = this._buildUrl(path);
        let retries = 0;
        
        while (true) {
            try {
                const response = await this._fetchWithTimeout(url, requestOptions);
                return await this._handleResponse(response);
            } catch (error) {
                if (!this._shouldRetry(error, retries, options.maxRetries)) {
                    throw this._formatError(error);
                }
                await this._wait(this._getRetryDelay(retries));
                retries++;
            }
        }
    }

    /**
     * Prepare fetch request options
     */
    _prepareRequestOptions(method, data, headers, options) {
        const requestOptions = {
            method: method.toUpperCase(),
            headers: {
                ...this.config.defaultHeaders,
                ...headers
            },
            ...options
        };

        if (data) {
            requestOptions.body = JSON.stringify(data);
        }

        return requestOptions;
    }

    /**
     * Build complete URL
     */
    _buildUrl(path) {
        return `${this.config.baseURL}${path}`;
    }

    /**
     * Fetch with timeout implementation
     */
    async _fetchWithTimeout(url, options) {
        const timeout = options.timeout || this.config.timeout;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        try {
            const response = await fetch(url, {
                ...options,
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            return response;
        } catch (error) {
            clearTimeout(timeoutId);
            throw error;
        }
    }

    /**
     * Handle API response
     */
    async _handleResponse(response) {
        const contentType = response.headers.get('content-type');
        const data = contentType && contentType.includes('application/json')
            ? await response.json()
            : await response.text();

        if (!response.ok) {
            throw {
                status: response.status,
                statusText: response.statusText,
                data
            };
        }

        return data;
    }

    /**
     * Determine if request should be retried
     */
    _shouldRetry(error, retries, maxRetries = this.config.maxRetries) {
        // Retry on network errors or 5xx server errors
        if (retries >= maxRetries) return false;

        return (
            !error.status || // Network error
            (error.status >= 500 && error.status <= 599) || // Server error
            error.name === 'AbortError' // Timeout
        );
    }

    /**
     * Format error for consistent error handling
     */
    _formatError(error) {
        return {
            status: error.status || 0,
            message: error.message || 'Network error',
            data: error.data || null,
            originalError: error
        };
    }

    /**
     * Calculate retry delay with exponential backoff
     */
    _getRetryDelay(retryCount) {
        return Math.min(
            this.config.retryDelay * Math.pow(2, retryCount),
            10000 // Max 10 seconds
        );
    }

    /**
     * Promise-based delay implementation
     */
    _wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Export the middleware
export default ApiMiddleware;

// Usage example:
/*
const api = new ApiMiddleware({
    baseURL: 'https://api.example.com',
    maxRetries: 3
});

// GET request
const getData = async () => {
    try {
        const response = await api.invokeApi('/users', 'GET');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};

// POST request
const createUser = async (userData) => {
    try {
        const response = await api.invokeApi('/users', 'POST', userData, {
            'Authorization': 'Bearer token'
        });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};
*/