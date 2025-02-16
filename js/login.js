function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginError = document.getElementById('loginError');
    const otp = document.getElementById('otp').value;

    if (otpSection.classList.contains('d-none')) {
        // Password login
        if (username === 'admin' && password === 'admin123') {
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('username', username);
            window.location.href = 'franchise-service.html';
        } else if (username === 'madmin' && password === 'madmin123') {
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('username', username);
            window.location.href = 'mother-company-dashboard.html';
        } else {
            loginError.classList.remove('d-none');
            setTimeout(() => {
                loginError.classList.add('d-none');
            }, 3000);
        }
    } else {
        // OTP login
        if (username === 'admin' && otp === '123456') {
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('username', username);
            window.location.href = 'franchise-service.html';
        } else if (username === 'madmin' && otp === '123456') {
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('username', username);
            window.location.href = 'mother-company-dashboard.html';
        } else {
            loginError.classList.remove('d-none');
            setTimeout(() => {
                loginError.classList.add('d-none');
            }, 3000);
        }
    }
}

function toggleOTPLogin(event) {
    event.preventDefault();
    const passwordDiv = document.getElementById('passwordDiv');
    const otpSection = document.getElementById('otpSection');
    const passwordSection = document.getElementById('passwordDiv');
    const loginBtn = document.getElementById('loginBtn');
    const otpInputSection = document.getElementById('otpInputSection');
    const username = document.getElementById('username').value;
    const passwordInput = document.getElementById('password');

    if (otpSection.classList.contains('d-none')) {
        if (!username) {
            alert('Please enter username first');
            return;
        }
        // Switch to OTP login
        otpSection.classList.remove('d-none');
        passwordSection.classList.add('d-none');
        passwordInput.removeAttribute('required');
        requestOTP();
    } else {
        // Switch back to password login
        otpSection.classList.add('d-none');
        passwordSection.classList.remove('d-none');
        passwordInput.setAttribute('required', '');
        // Reset OTP related elements
        otpInputSection.classList.add('d-none');
        document.getElementById('otp').value = '';
    }
}

function requestOTP() {
    const username = document.getElementById('username').value;
    const otpInputSection = document.getElementById('otpInputSection');
    const loginBtn = document.getElementById('loginBtn');

    if (username) {
        // Show OTP input field
        otpInputSection.classList.remove('d-none');
        loginBtn.classList.remove('d-none');

        // In production, this should make an API call to send OTP to registered email and mobile
        console.log('Sending OTP for username:', username);
    } else {
        alert('Please enter username');
    }
}

// Check login status when accessing any page
function checkLoginStatus() {
    const currentPage = window.location.pathname.split('/').pop();
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const username = sessionStorage.getItem('username');

    // If not logged in and trying to access protected pages, redirect to login
    if (!isLoggedIn && currentPage !== 'login.html') {
        window.location.href = 'franchise-service.html';
    }

    // If logged in and on login page, redirect to dashboard
    if (isLoggedIn && currentPage === 'login.html') {
        if (username === 'admin') {
            window.location.href = 'franchise-service.html';
        } else if (username ==='madmin') {
            window.location.href = 'mother-company-dashboard.html';
        }
    }
}

function logout () {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');
    window.location.href = 'login.html';
}

// Toggle sidebar
function toggleSidebar() {
    document.querySelector('.admin-sidebar').classList.toggle('collapsed');
    document.querySelector('main').parentElement.classList.toggle('sidebar-collapsed');
    const toggleBtn = document.querySelector('.toggle-btn i');
    toggleBtn.classList.toggle('bi-chevron-left');
    toggleBtn.classList.toggle('bi-chevron-right');
}

// Check login status when page loads
window.addEventListener('load', checkLoginStatus);