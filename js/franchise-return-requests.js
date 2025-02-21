class FranchiseReturnRequestsManager {
    constructor() {
        this.returnRequestsTable = document.getElementById('franchiseReturnRequestsTable');
        this.mockReturnRequests = [
            {
                id: 'FR001',
                franchiseId: 'F123',
                franchiseName: 'Mumbai Central Franchise',
                productDetails: 'Laptop Model X1 (10 units)',
                returnReason: 'Defective Batch',
                description: 'Multiple units showing power issues',
                status: 'Pending',
                submittedDate: new Date().toISOString(),
                totalValue: 450000
            },
            {
                id: 'FR002',
                franchiseId: 'F124',
                franchiseName: 'Delhi North Franchise',
                productDetails: 'Printer Model P2 (5 units)',
                returnReason: 'Wrong Specifications',
                description: 'Received different voltage models',
                status: 'Approved',
                submittedDate: new Date().toISOString(),
                totalValue: 75000
            }
        ];
        this.initializeModal();
    }

    async loadReturnRequests() {
        try {
            await new Promise(resolve => setTimeout(resolve, 500));
            this.displayReturnRequests(this.mockReturnRequests);
        } catch (error) {
            console.error('Error loading franchise return requests:', error);
            alert('Failed to load return requests. Please try again.');
        }
    }

    displayReturnRequests(requests) {
        if (!this.returnRequestsTable) return;

        this.returnRequestsTable.innerHTML = '';

        requests.forEach(request => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${request.id}</td>
                <td>${request.franchiseId}</td>
                <td>${request.franchiseName}</td>
                <td>${request.productDetails}</td>
                <td>${request.returnReason}</td>
                <td>₹${request.totalValue.toLocaleString()}</td>
                <td><span class="badge ${this.getStatusBadgeClass(request.status)}">${request.status}</span></td>
                <td>${new Date(request.submittedDate).toLocaleDateString()}</td>
                <td>
                    <button class="btn btn-info btn-sm view-btn" data-id="${request.id}" title="View Details">
                        <i class="bi bi-eye"></i>
                    </button>
                    <button class="btn btn-success btn-sm approve-btn" data-id="${request.id}"
                            ${request.status !== 'Pending' ? 'disabled' : ''} title="Approve Return">
                        <i class="bi bi-check-circle"></i>
                    </button>
                    <button class="btn btn-danger btn-sm reject-btn" data-id="${request.id}"
                            ${request.status !== 'Pending' ? 'disabled' : ''} title="Reject Return">
                        <i class="bi bi-x-circle"></i>
                    </button>
                    ${request.status === 'Approved' ? `
                    <button class="btn btn-primary btn-sm download-certificate-btn" data-id="${request.id}" title="Download Certificate">
                        <i class="bi bi-download"></i>
                    </button>` : ''}
                </td>
            `;
            this.returnRequestsTable.appendChild(row);
        });
    }

    getStatusBadgeClass(status) {
        const statusClasses = {
            'Pending': 'bg-warning',
            'Approved': 'bg-success',
            'Rejected': 'bg-danger',
            'In Process': 'bg-primary'
        };
        return statusClasses[status] || 'bg-secondary';
    }

    initializeModal() {
        const modalHtml = `
            <div class="modal fade" id="franchiseReturnDetailsModal" tabindex="-1">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Franchise Return Request Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="fw-bold">Return ID:</label>
                                        <p id="returnId"></p>
                                    </div>
                                    <div class="mb-3">
                                        <label class="fw-bold">Franchise Name:</label>
                                        <p id="franchiseName"></p>
                                    </div>
                                    <div class="mb-3">
                                        <label class="fw-bold">Product Details:</label>
                                        <p id="productDetails"></p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="fw-bold">Return Reason:</label>
                                        <p id="returnReason"></p>
                                    </div>
                                    <div class="mb-3">
                                        <label class="fw-bold">Total Value:</label>
                                        <p id="totalValue"></p>
                                    </div>
                                    <div class="mb-3">
                                        <label class="fw-bold">Status:</label>
                                        <p id="status"></p>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="fw-bold">Description:</label>
                                <p id="description"></p>
                            </div>
                        </div>
                        <div class="modal-footer" id="franchiseModalActions">
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHtml);
        this.modal = new bootstrap.Modal(document.getElementById('franchiseReturnDetailsModal'));
    }

    show(reqId) {
        const request = this.mockReturnRequests.find(req => req.id === reqId);
        if (!request) return;

        document.getElementById('returnId').textContent = request.id;
        document.getElementById('franchiseName').textContent = request.franchiseName;
        document.getElementById('productDetails').textContent = request.productDetails;
        document.getElementById('returnReason').textContent = request.returnReason;
        document.getElementById('totalValue').textContent = `₹${request.totalValue.toLocaleString()}`;
        document.getElementById('status').textContent = request.status;
        document.getElementById('description').textContent = request.description;

        const actionsContainer = document.getElementById('franchiseModalActions');
        actionsContainer.innerHTML = this.getModalActions(request);

        this.modal.show();
    }

    getModalActions(request) {
        if (request.status === 'Pending') {
            return `
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger" onclick="franchiseReturnManager.rejectReturnRequest('${request.id}')">Reject</button>
                <button type="button" class="btn btn-success" onclick="franchiseReturnManager.approveReturnRequest('${request.id}')">Approve</button>
            `;
        } else if (request.status === 'Approved') {
            return `
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onclick="franchiseReturnManager.downloadReturnCertificate('${request.id}')">
                    <i class="bi bi-download"></i> Download Certificate
                </button>
            `;
        }
        return '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>';
    }

    async approveReturnRequest(returnId) {
        try {
            this.modal.hide();
            const approvalModal = new bootstrap.Modal(document.getElementById('approvalModal'));
            approvalModal.show();

            // Remove existing event listeners
            const confirmBtn = document.getElementById('confirmApproval');
            const newConfirmBtn = confirmBtn.cloneNode(true);
            confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);

            newConfirmBtn.addEventListener('click', async () => {
                const reasonCode = document.getElementById('reasonCode').value;
                const comments = document.getElementById('comments').value;

                if (!reasonCode) {
                    alert('Please select a reason code');
                    return;
                }

                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 500));

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

    async rejectReturnRequest(returnId) {
        try {
            this.modal.hide();
            const rejectionModal = new bootstrap.Modal(document.getElementById('rejectionModal'));
            rejectionModal.show();

            // Remove existing event listeners
            const confirmBtn = document.getElementById('confirmRejection');
            const newConfirmBtn = confirmBtn.cloneNode(true);
            confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);

            newConfirmBtn.addEventListener('click', async () => {
                const rejectionReason = document.getElementById('rejectionReason').value;

                if (!rejectionReason) {
                    alert('Please provide a rejection reason');
                    return;
                }

                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 500));

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

    async downloadReturnCertificate(returnId) {
        try {
            // Simulate API call to generate certificate
            await new Promise(resolve => setTimeout(resolve, 500));

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
}

// Initialize the franchise return requests manager
document.addEventListener('DOMContentLoaded', () => {
    window.franchiseReturnManager = new FranchiseReturnRequestsManager();
    franchiseReturnManager.loadReturnRequests();

    // Event delegation for table actions
    const table = document.getElementById('franchiseReturnRequestsTable');
    if (table) {
        table.addEventListener('click', (e) => {
            const target = e.target.closest('button');
            if (!target) return;

            const requestId = target.dataset.id;
            if (target.classList.contains('view-btn')) {
                franchiseReturnManager.show(requestId);
            } else if (target.classList.contains('approve-btn')) {
                franchiseReturnManager.approveReturnRequest(requestId);
            } else if (target.classList.contains('reject-btn')) {
                franchiseReturnManager.rejectReturnRequest(requestId);
            } else if (target.classList.contains('download-certificate-btn')) {
                franchiseReturnManager.downloadReturnCertificate(requestId);
            }
        });
    }
});