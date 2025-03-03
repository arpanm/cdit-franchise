// Return Requests Management Module

class ReturnRequestsManager {
    constructor() {
        this.returnRequestsTable = document.getElementById('returnRequestsTable');
        this.returnRequestForm = document.getElementById('returnRequestForm');
        this.returnReasons = [
            'Defective Product',
            'Wrong Item Received',
            'Size/Fit Issue',
            'Quality Not as Expected',
            'Damaged in Transit',
            'Other'
        ];
        // Mock data for return requests
        this.mockReturnRequests = [
            {
                id: 1,
                customerName: 'John Doe',
                productDetails: 'Laptop Model X1',
                returnReason: 'Defective Product',
                description: 'Device not powering on',
                status: 'Pending',
                submittedDate: new Date().toISOString()
            },
            {
                id: 2,
                customerName: 'Jane Smith',
                productDetails: 'Wireless Mouse M2',
                returnReason: 'Wrong Item Received',
                description: 'Received black color instead of white',
                status: 'Approved',
                submittedDate: new Date().toISOString()
            }
        ];
        this.modal = null;
        this.currentRequest = null;
        this.initializeModal();
    }

    loadReturnRequests() {
        try {
            // Simulate API delay
            this.displayReturnRequests(this.mockReturnRequests);
        } catch (error) {
            console.error('Error loading return requests:', error);
            alert('Failed to load return requests. Please try again.');
        }

    // Initialize Bootstrap tooltips
    const tooltipTriggerList = document.querySelectorAll('[title]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    }

    displayReturnRequests(requests) {
        if (!this.returnRequestsTable) return;

        // The table body is the returnRequestsTable element itself since it has the id
        const tbody = this.returnRequestsTable;
        if (!tbody) {
            console.error('Table body element not found in the return requests table');
            return;
        }

        tbody.innerHTML = '';

        requests.forEach(request => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${request.id}</td>
                <td>${request.customerName}</td>
                <td>${request.productDetails}</td>
                <td>${request.returnReason}</td>
                <td>${new Date(request.submittedDate).toLocaleDateString()}</td>
                <td>${request.status}</td>
                <td>
                    <button class="btn btn-info btn-sm view-btn" id="view-${request.id}" data-id="${request.id}" onclick="returnRequestsManager.show(${request.id})" title="View Details">
                        <i class="bi bi-eye"></i>
                    </button>
                    <button class="btn btn-success btn-sm approve-btn" data-id="${request.id}"
                            ${request.status !== 'Pending' ? 'disabled' : ''} onclick="returnRequestsManager.approveReturnRequest(${request.id})" title="Approve Return">
                        <i class="bi bi-check-circle"></i>
                    </button>
                    <button class="btn btn-danger btn-sm reject-btn" data-id="${request.id}"
                            ${request.status !== 'Pending' ? 'disabled' : ''} onclick="returnRequestsManager.rejectReturnRequest(${request.id})" title="Reject Return">
                        <i class="bi bi-x-circle"></i>
                    </button>
                    ${request.status === 'Approved' ? `
                    <button class="btn btn-primary btn-sm download-certificate-btn" data-id="${request.id}" onclick="returnRequestsManager.downloadReturnCertificate(${request.id})" title="Download Certificate">
                        <i class="bi bi-download"></i>
                    </button>` : ''}
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    approveReturnRequest(returnId) {
        try {
            const approvalModal = new bootstrap.Modal(document.getElementById('approvalModal'));
            approvalModal.show();

            // Remove existing event listeners
            const confirmBtn = document.getElementById('confirmApproval');
            const newConfirmBtn = confirmBtn.cloneNode(true);
            confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);

            newConfirmBtn.addEventListener('click', () => {
                const reasonCode = document.getElementById('reasonCode').value;
                const comments = document.getElementById('comments').value;

                if (!reasonCode) {
                    alert('Please select a reason code');
                    return;
                }

                // Update mock data
                const request = this.mockReturnRequests.find(r => r.id === parseInt(returnId));
                if (request) {
                    request.status = 'Approved';
                    request.reasonCode = reasonCode;
                    request.comments = comments;
                }

                approvalModal.hide();
                this.loadReturnRequests();
                alert('Return request approved successfully');
            });
        } catch (error) {
            console.error('Error approving return request:', error);
            alert('Failed to approve return request. Please try again.');
        }
    }

    rejectReturnRequest(returnId) {
        try {
            const rejectionModal = new bootstrap.Modal(document.getElementById('rejectionModal'));
            rejectionModal.show();

            // Remove existing event listeners
            const confirmBtn = document.getElementById('confirmRejection');
            const newConfirmBtn = confirmBtn.cloneNode(true);
            confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);

            newConfirmBtn.addEventListener('click', () => {
                const rejectionReason = document.getElementById('rejectionReason').value;

                if (!rejectionReason) {
                    alert('Please provide a rejection reason');
                    return;
                }

                // Update mock data
                const request = this.mockReturnRequests.find(r => r.id === parseInt(returnId));
                if (request) {
                    request.status = 'Rejected';
                    request.rejectionReason = rejectionReason;
                }

                rejectionModal.hide();
                this.loadReturnRequests();
                alert('Return request rejected successfully');
            });
        } catch (error) {
            console.error('Error rejecting return request:', error);
            alert('Failed to reject return request. Please try again.');
        }
    }

    downloadReturnCertificate(returnId) {
        try {
            const request = this.mockReturnRequests.find(r => r.id === parseInt(returnId));
            if (!request) {
                throw new Error('Return request not found');
            }

            // Generate a simple text certificate (in real implementation, this would be a PDF or other document)
            const certificateContent = `
                Return Certificate
                ------------------
                Return ID: ${request.id}
                Customer: ${request.customerName}
                Product: ${request.productDetails}
                Status: ${request.status}
                Date: ${new Date().toLocaleDateString()}
            `;

            // Create a blob and download it
            const blob = new Blob([certificateContent], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `return-certificate-${request.id}.txt`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error('Error downloading return certificate:', error);
            alert('Failed to download return certificate. Please try again.');
        }
    }

    initializeModal() {
        const modalHtml = `
            <div class="modal fade" id="returnRequestDetailsModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Return Request Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label class="fw-bold">Return ID:</label>
                                <p id="returnId"></p>
                            </div>
                            <div class="mb-3">
                                <label class="fw-bold">Customer Name:</label>
                                <p id="customerName"></p>
                            </div>
                            <div class="mb-3">
                                <label class="fw-bold">Product Details:</label>
                                <p id="productDetails"></p>
                            </div>
                            <div class="mb-3">
                                <label class="fw-bold">Return Reason:</label>
                                <p id="returnReason"></p>
                            </div>
                            <div class="mb-3">
                                <label class="fw-bold">Status:</label>
                                <p id="status"></p>
                            </div>
                        </div>
                        <div class="modal-footer" id="modalActions">
                            <!-- Buttons will be added dynamically based on status -->
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Add modal to document
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        this.modal = new bootstrap.Modal(document.getElementById('returnRequestDetailsModal'));

        // Initialize event listeners
        document.getElementById('modalActions').addEventListener('click', (e) => {
            if (e.target.id === 'viewBtn') {
                this.handleView();
            } else if (e.target.id === 'approveBtn') {
                this.handleApprove();
            } else if (e.target.id === 'rejectBtn') {
                this.handleReject();
            } else if (e.target.id === 'downloadCertificateBtn') {
                this.handleDownloadCertificate();
            }
        });
    }

    show(reqId) {
        var returnRequest = this.mockReturnRequests.find(req => req.id == reqId);
        this.currentRequest = returnRequest;
        // Update modal content
        document.getElementById('returnId').textContent = returnRequest.id;
        document.getElementById('customerName').textContent = returnRequest.customerName;
        document.getElementById('productDetails').textContent = returnRequest.productDetails;
        document.getElementById('returnReason').textContent = returnRequest.returnReason;
        document.getElementById('status').textContent = returnRequest.status;

        // Update action buttons based on status
        const actionsContainer = document.getElementById('modalActions');
        actionsContainer.innerHTML = '';

        if (returnRequest.status === 'Pending') {
            actionsContainer.innerHTML = `
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger" id="rejectBtn">Reject</button>
                <button type="button" class="btn btn-success" id="approveBtn">Approve</button>
            `;
        } else if (returnRequest.status === 'Approved') {
            actionsContainer.innerHTML = `
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" id="downloadCertificateBtn">
                    <i class="bi bi-download"></i> Download Certificate
                </button>
            `;
        } else {
            actionsContainer.innerHTML = `
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            `;
        }

        this.modal.show();
    }

    handleApprove() {
        const approvalModal = new bootstrap.Modal(document.getElementById('approvalModal'));
        this.modal.hide();
        // Call the approveReturnRequest with the current request's ID
        this.approveReturnRequest(this.currentRequest.id);
    }

    handleReject() {
        const rejectionModal = new bootstrap.Modal(document.getElementById('rejectionModal'));
        this.modal.hide();
        // Call the rejectReturnRequest with the current request's ID
        this.rejectReturnRequest(this.currentRequest.id);
    }

    handleDownloadCertificate() {
        // Generate and download return certificate
        const certificate = this.generateReturnCertificate();
        const blob = new Blob([certificate], { type: 'text/html' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `return-certificate-${this.currentRequest.id}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }

    generateReturnCertificate() {
        return `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Return Certificate #${this.currentRequest.id}</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 40px; }
                    .header { text-align: center; margin-bottom: 30px; }
                    .content { margin-bottom: 20px; }
                    .footer { margin-top: 50px; text-align: center; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>Return Certificate</h1>
                    <h2>Certificate #${this.currentRequest.id}</h2>
                </div>
                <div class="content">
                    <p><strong>Customer Name:</strong> ${this.currentRequest.customerName}</p>
                    <p><strong>Product Details:</strong> ${this.currentRequest.productDetails}</p>
                    <p><strong>Return Reason:</strong> ${this.currentRequest.returnReason}</p>
                    <p><strong>Return Date:</strong> ${new Date().toLocaleDateString()}</p>
                    <p><strong>Status:</strong> Approved</p>
                </div>
                <div class="footer">
                    <p>This certificate confirms that the return request has been approved.</p>
                    <p>Generated on ${new Date().toLocaleString()}</p>
                </div>
            </body>
            </html>
        `;
    }
}

// Initialize the return requests manager when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const returnRequestsManager = new ReturnRequestsManager();
    returnRequestsManager.loadReturnRequests();
    window.returnRequestsManager = returnRequestsManager;
});