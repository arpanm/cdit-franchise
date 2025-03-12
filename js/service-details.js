// Sample data structure for service request details
// Mock catalog data for spares and accessories
const itemCatalog = {
    spares: [
        { id: 'SP001', name: 'Compressor', price: 12000, category: 'Spare', source: 'Franchise', inventory: 10 },
        { id: 'SP002', name: 'Condenser Coil', price: 8000, category: 'Spare', source: 'Mother Company', inventory: 5 },
        { id: 'SP003', name: 'PCB Board', price: 5000, category: 'Spare', source: 'Franchise', inventory: 12 },
    ],
    accessories: [
        { id: 'AC001', name: 'Remote Control', price: 800, category: 'Accessory', source: 'Mother Company', inventory: 8},
        { id: 'AC002', name: 'Air Filter', price: 500, category: 'Accessory', source: 'Franchise', inventory: 15 },
        { id: 'AC003', name: 'Copper Pipe', price: 1200, category: 'Accessory', source: 'Mother Company', inventory: 10 }
    ],
    services: [
        { id: 'SV001', name: 'Deep Cleaning', price: 1500, category: 'Service' },
        { id: 'SV002', name: 'Gas Refill', price: 2500, category: 'Service' },
        { id: 'SV003', name: 'Preventive Maintenance', price: 3000, category: 'Service' }
    ]
};

const serviceRequestDetails = {
    requestInfo: {
        id: 'SR001',
        customer: 'John Doe',
        phone: '9876543210',
        location: 'Mumbai',
        paymentStatus: 'Free',
        serviceType: 'Repair',
        status: 'Pending',
        createdDate: '2025-01-15',
        slaDeadline: '2025-03-17',
        engineer: 'Mike Tech',
        scheduledDate: '2025-02-01',
        timeSlot: 'Morning (9 AM - 12 PM)',
        issueDescription: 'AC not cooling properly, making unusual noise during operation.',
        documents: [
            { type: 'Invoice', date: '2025-01-15', fileNo: 'INV001' },
            { type: 'Service Report', date: '2025-01-16', fileNo: 'SRPT001' }
        ]
    },
    productInfo: {
        brand: 'Samsung',
        model: 'AR12TY',
        purchaseDate: '2024-01-01',
        price: '₹45,000',
        retailStore: 'Samsung Digital Plaza - Mumbai',
        invoiceUrl: '#',
        warranty: {
            brandStatus: 'Expired',
            brandValidTill: '2024-12-31',
            extendedStatus: 'Not Available',
            extendedValidTill: null,
            lastPayment: 'N/A'
        }
    },
    assignmentHistory: [
        {
            date: '2025-01-15 10:00 AM',
            engineer: 'Mike Tech',
            status: 'Assigned',
            notes: 'Initial assignment'
        },
        {
            date: '2025-01-16 11:11 AM',
            engineer: 'Mike Tech',
            status: 'Assigned',
            notes: 'Call not answered'
        }
    ],
    comments: [
        {
            date: '2025-01-15 10:00 AM',
            user: 'Rahul A',
            text: 'Priority Service'
        },
        {
            date: '2025-01-17 10:00 AM',
            user: 'Aniket B',
            text: 'Customer need callback'
        }
    ]
};


// Initialize engineer management
const engineerManager = new EngineerManager();


// Function to populate service request details
function populateServiceRequestDetails() {
    const request = serviceRequestDetails.requestInfo;
    
    // Basic information
    document.getElementById('requestId').textContent = request.id;
    document.getElementById('customerName').textContent = request.customer;
    document.getElementById('customerPhone').textContent = request.phone;
    document.getElementById('location').textContent = request.location;

    // Payment Status with appropriate badge class
    const paymentStatusBadge = document.getElementById('paymentStatus');
    paymentStatusBadge.textContent = request.paymentStatus;
    paymentStatusBadge.className = `badge ${request.paymentStatus === 'Payment Pending' ? 'bg-warning' : 'bg-success'}`;

    document.getElementById('serviceType').textContent = request.serviceType || 'N/A';
    
    // Status with appropriate badge class
    const statusBadge = document.getElementById('status');
    statusBadge.textContent = request.status;
    statusBadge.className = `badge ${getStatusBadgeClass(request.status)}`;
    
    document.getElementById('createdDate').textContent = request.createdDate;
    document.getElementById('slaDeadline').textContent = request.slaDeadline;
    document.getElementById('currentEngineer').textContent = request.engineer || '-';
    document.getElementById('issueDescription').textContent = request.issueDescription;

    const documentsContainer = document.getElementById('serviceAttachments');
    if (documentsContainer && request.documents) {
        documentsContainer.innerHTML = request.documents.map(doc => `
            <div class="document-item d-flex justify-content-between align-items-center mb-2">
                <div>
                    <h6 class="mb-0">${doc.type}</h6>
                    <small class="text-muted">Date: ${doc.date}</small>
                </div>
                <button class="btn btn-sm btn-outline-primary" onclick="downloadDocument('${doc.fileNo}')">Download</button>
            </div>
        `).join('');
    }
}

// Function to populate product information
function populateProductInfo() {
    const product = serviceRequestDetails.productInfo;
    
    document.getElementById('productBrand').textContent = product.brand;
    document.getElementById('productModel').textContent = product.model;
    document.getElementById('purchaseDate').textContent = product.purchaseDate;
    document.getElementById('productPrice').textContent = product.price;
    document.getElementById('retailStore').textContent = product.retailStore;
    document.getElementById('invoiceLink').href = product.invoiceUrl;
    
    // Warranty information
    document.getElementById('brandWarrantyStatus').textContent = product.warranty.brandStatus;
    document.getElementById('brandWarrantyDate').textContent = product.warranty.brandValidTill;
    document.getElementById('extendedWarrantyStatus').textContent = product.warranty.extendedStatus;
    document.getElementById('extendedWarrantyDate').textContent = product.warranty.extendedValidTill || 'N/A';
    document.getElementById('lastPaymentDetails').textContent = product.warranty.lastPayment;

    // Check warranty validity and update button state
    const buyExtendedWarrantyBtn = document.getElementById('buyExtendedWarrantyBtn');
    const currentDate = new Date();
    const brandWarrantyDate = new Date(product.warranty.brandValidTill);
    const extendedWarrantyDate = product.warranty.extendedValidTill ? new Date(product.warranty.extendedValidTill) : null;

    // Disable button if either warranty is still valid
    const isBrandWarrantyValid = brandWarrantyDate > currentDate;
    const isExtendedWarrantyValid = extendedWarrantyDate && extendedWarrantyDate > currentDate;

    buyExtendedWarrantyBtn.disabled = isBrandWarrantyValid || isExtendedWarrantyValid;
    buyExtendedWarrantyBtn.title = isBrandWarrantyValid ? 'Brand warranty is still active' : 
                                   isExtendedWarrantyValid ? 'Extended warranty is still active' : 
                                   'Buy extended warranty for your product';
}

// Function to populate assignment history
function populateAssignmentHistory() {
    const historyContainer = document.getElementById('assignmentHistory');
    historyContainer.innerHTML = '';
    
    serviceRequestDetails.assignmentHistory.forEach(assignment => {
        const historyItem = document.createElement('div');
        historyItem.className = 'timeline-item';
        historyItem.innerHTML = `
            <div class="timeline-header">
                <strong>${assignment.date}</strong>
                <span class="text-muted ms-2">Engineer: ${assignment.engineer}</span>
            </div>
            <div class="timeline-content">
                <h6>${assignment.status}</h6>
                <p>Notes: ${assignment.notes}</p>
            </div>
        `;
        historyContainer.appendChild(historyItem);
    });
}

// Function to populate comments
function populateComments() {
    const commentsContainer = document.getElementById('commentsSection');
    commentsContainer.innerHTML = '';
    
    serviceRequestDetails.comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment-item mb-3';
        commentElement.innerHTML = `
            <div class="comment-header">
                <strong>${comment.user}</strong>
                <span class="text-muted ms-2">${comment.date}</span>
            </div>
            <div class="comment-body mt-1">
                ${comment.text}
            </div>
        `;
        commentsContainer.appendChild(commentElement);
    });
}

// Function to get status badge class
function getStatusBadgeClass(status) {
    return {
        'Pending': 'bg-warning',
        'In Progress': 'bg-primary',
        'Completed': 'bg-success',
        'Cancelled': 'bg-danger'
    }[status] || 'bg-secondary';
}

// Override the assignEngineer method for service details page
function handleEngineerAssignment(engineerId) {
    const engineer = engineerManager.engineers.find(e => e.id === engineerId);
    if (engineer && engineer.availability) {
        // Update service request with new engineer
        serviceRequestDetails.requestInfo.engineer = engineer.name;
        
        // Add to assignment history
        serviceRequestDetails.assignmentHistory.unshift({
            date: new Date().toLocaleString(),
            engineer: engineer.name,
            status: 'Assigned',
            notes: 'Assigned through service details page'
        });

        // Add system comment
        serviceRequestDetails.comments.unshift({
            date: new Date().toLocaleString(),
            user: 'System',
            text: `Service request assigned to ${engineer.name}`
        });

        // Refresh the display
        populateServiceRequestDetails();
        populateAssignmentHistory();
        populateComments();
        updateUpcomingService();
        
        // Close the modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('engineerAssignmentModal'));
        if (modal) {
            modal.hide();
        }
    }
}

function updateUpcomingService() {
    const engineerName = document.getElementById('upcomingEngineerName');
    const engineerContact = document.getElementById('upcomingEngineerContact');
    const serviceDate = document.getElementById('upcomingServiceDate');
    const serviceTime = document.getElementById('upcomingServiceTime');

    if (serviceRequestDetails.requestInfo.engineer) {
        engineerName.textContent = serviceRequestDetails.requestInfo.engineer;
        engineerContact.textContent = 'Contact information will be available 24 hours before service';
    }

    if (serviceRequestDetails.requestInfo.scheduledDate) {
        serviceDate.textContent = new Date(serviceRequestDetails.requestInfo.scheduledDate).toLocaleDateString();
        serviceTime.textContent = serviceRequestDetails.requestInfo.timeSlot || 'Not specified';
    }
}

function handleReschedule() {
    const newDate = document.getElementById('newServiceDate').value;
    const newTime = document.getElementById('newServiceTime').value;
    const reason = document.getElementById('rescheduleReason').value;

    if (!newDate || !newTime || !reason) {
        alert('Please fill in all fields');
        return;
    }

    // Update service request details
    serviceRequestDetails.requestInfo.scheduledDate = newDate;
    serviceRequestDetails.requestInfo.timeSlot = newTime;

    // Add to assignment history
    serviceRequestDetails.assignmentHistory.unshift({
        date: new Date().toLocaleString(),
        engineer: serviceRequestDetails.requestInfo.engineer,
        status: 'Rescheduled',
        notes: `Service rescheduled to ${newDate} (${newTime}). Reason: ${reason}`
    });

    // Add system comment
    serviceRequestDetails.comments.unshift({
        date: new Date().toLocaleString(),
        user: 'System',
        text: `Service appointment rescheduled to ${newDate} (${newTime})`
    });

    // Refresh the display
    updateUpcomingService();
    populateAssignmentHistory();
    populateComments();

    // Close the modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('rescheduleModal'));
    if (modal) {
        modal.hide();
    }

    // Reset form
    document.getElementById('rescheduleForm').reset();
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    populateServiceRequestDetails();
    populateProductInfo();
    populateAssignmentHistory();
    populateComments();
    
    // Add click handler for assign engineer button after initialization
    const assignEngineerBtn = document.getElementById('assignEngineerBtn');
    if (assignEngineerBtn) {
        assignEngineerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (engineerManager && typeof engineerManager.showAssignmentModal === 'function') {
                engineerManager.showAssignmentModal();
            } else {
                console.error('Engineer manager or showAssignmentModal method not properly initialized');
            }
        });
    }
    updateTrackingFlow(serviceRequestDetails.requestInfo.status);
});

// Function to cancel request
function cancelRequest() {
    const reason = document.getElementById('cancellationReason').value;
    
    // Update status
    serviceRequestDetails.requestInfo.status = 'Cancelled';
    
    // Add to history
    serviceRequestDetails.assignmentHistory.push({
        date: new Date().toLocaleString(),
        engineer: null,
        status: 'Cancelled',
        notes: reason
    });
    
    // Add comment
    serviceRequestDetails.comments.push({
        date: new Date().toLocaleString(),
        user: 'System',
        text: `Request cancelled. Reason: ${reason}`
    });
    
    // Refresh UI
    populateServiceRequestDetails();
    populateAssignmentHistory();
    populateComments();
    
    // Close modal
    bootstrap.Modal.getInstance(document.getElementById('cancelRequestModal')).hide();
}

// Function to add comment
function addComment() {
    const commentText = document.getElementById('commentText').value;
    
    // Add comment
    serviceRequestDetails.comments.push({
        date: new Date().toLocaleString(),
        user: 'Franchise User', // This should be replaced with actual logged-in user
        text: commentText
    });
    
    // Refresh comments section
    populateComments();
    
    // Clear form and close modal
    document.getElementById('commentText').value = '';
    bootstrap.Modal.getInstance(document.getElementById('addCommentModal')).hide();
}

// Function to change service request status
function changeStatus() {
    const newStatus = document.getElementById('newStatus').value;
    const statusComment = document.getElementById('statusComment').value;
    
    if (!newStatus || !statusComment) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Update status
    serviceRequestDetails.requestInfo.status = newStatus;
    
    // Add to history
    serviceRequestDetails.assignmentHistory.push({
        date: new Date().toLocaleString(),
        engineer: serviceRequestDetails.requestInfo.engineer,
        status: newStatus,
        notes: statusComment
    });
    
    // Add comment
    serviceRequestDetails.comments.push({
        date: new Date().toLocaleString(),
        user: 'System',
        text: `Status changed to ${newStatus}. ${statusComment}`
    });
    
    // Refresh UI
    populateServiceRequestDetails();
    populateAssignmentHistory();
    populateComments();
    
    // Close modal
    bootstrap.Modal.getInstance(document.getElementById('changeStatusModal')).hide();
}

// Function to handle item search
function handleItemSearch() {
    const searchTerm = document.getElementById('itemSearch').value.toLowerCase();
    const showSpares = document.getElementById('filterSpares').checked;
    const showAccessories = document.getElementById('filterAccessories').checked;
    const showServices = document.getElementById('filterServices').checked;

    const searchResults = [];
    if (showSpares) searchResults.push(...itemCatalog.spares);
    if (showAccessories) searchResults.push(...itemCatalog.accessories);
    if (showServices) searchResults.push(...itemCatalog.services);

    const filteredResults = searchResults.filter(item =>
        item.name.toLowerCase().startsWith(searchTerm) ||
        item.id.toLowerCase().startsWith(searchTerm)
    );

    displaySearchResults(filteredResults);
}

// Function to display search results
function displaySearchResults(results) {
    const tbody = document.getElementById('searchResults');
    tbody.innerHTML = '';

    results.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><input type="checkbox" class="form-check-input" value="${item.id}"></td>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>₹${item.price}</td>
            <td>${item.source ? item.source + " : " + item.inventory : ""}</td>
        `;
        tbody.appendChild(row);
    });
}

// Function to add selected items
function addSelectedItems() {
    const selectedCheckboxes = document.querySelectorAll('#searchResults input[type="checkbox"]:checked');
    const selectedIds = Array.from(selectedCheckboxes).map(cb => cb.value);

    const allItems = [...itemCatalog.spares, ...itemCatalog.accessories, ...itemCatalog.services];
    const selectedItems = selectedIds.map(id => {
        const item = allItems.find(item => item.id === id);
        return {
            ...item,
            paymentStatus: 'Pending',
            paymentLink: generatePaymentLink(item)
        };
    });

    // Add items to the service request
    if (!serviceRequestDetails.items) serviceRequestDetails.items = [];
    serviceRequestDetails.items.push(...selectedItems);

    // Update the display
    displayAddedItems();

    // Close the modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('addItemModal'));
    modal.hide();
}

// Function to display added items
function displayAddedItems() {
    const tbody = document.getElementById('addedItemsTable');
    tbody.innerHTML = ''; // Clear existing content

    // Always add the service request row first
    const serviceRow = document.createElement('tr');
    serviceRow.innerHTML = `
        <td>I001</td>
        <td>Repair Request</td>
        <td>Service</td>
        <td>Free Service</td>
        <td>NA</td>
        <td><span class="text-success">Free</span></td>
        <td></td>
    `;
    tbody.appendChild(serviceRow);

    // Then add other items if they exist
    if (!serviceRequestDetails.items) return;

    serviceRequestDetails.items.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>₹${item.price}</td>
            <td><span class="badge ${item.paymentStatus === 'Paid' ? 'bg-success' : 'bg-warning'}">${item.paymentStatus}</span></td>
            <td>
                ${item.paymentStatus === 'Pending' ? 
                    `<button class="btn btn-sm btn-danger" onclick="removeItem('${item.id}')">Remove</button>
                    <button class="btn btn-sm btn-primary ms-2" onclick="markPaid('${item.id}')">Mark Paid by Cash</button>` :
                    '<span class="text-success">Paid</span>'}
            </td>
            <td>
                ${item.markDelivered ? 
                    `<span class='text-success'>Delivered</span>` :
                        item.paymentStatus === 'Paid' ?
                            item.source === 'Franchise' ? 
                                `<span>${item.source ? item.source + " : " + item.inventory : ""}</span> <button class="btn btn-sm btn-primary ms-2" onclick="markDelivered('${item.id}')">Mark Delivered</button>` :
                                `<span>${item.source ? item.source + " : " + item.inventory + " : <a href='#'>Status: Pending</a>" : ""}</span>` : 
                                `<span>${item.source? item.source + " : " + item.inventory : ""}</span>`}
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Function to generate payment link
function generatePaymentLink(item) {
    // This would be replaced with actual payment gateway integration
    return `https://payment.example.com/${serviceRequestDetails.requestInfo.id}/${item.id}`;
}

// Function to send payment link
function sendPaymentLink(itemId) {
    const item = serviceRequestDetails.items.find(i => i.id === itemId);
    if (item) {
        // Update payment status to Paid
        item.paymentStatus = 'Paid';
        
        // Add a comment about the cash payment
        serviceRequestDetails.comments.push({
            date: new Date().toLocaleString(),
            user: 'System',
            text: `Payment received by cash for item: ${item.name} (${item.id})`
        });
        
        // Refresh the display
        displayAddedItems();
        populateComments();
        
        // Show confirmation message
        alert('Payment marked as received by cash');
    }
}

// Function to mark item as paid by cash
function markPaid(itemId) {
    const item = serviceRequestDetails.items.find(i => i.id === itemId);
    if (item) {
        // Update payment status to Paid
        item.paymentStatus = 'Paid';
        
        // Add a comment about the cash payment
        serviceRequestDetails.comments.push({
            date: new Date().toLocaleString(),
            user: 'Malik Raja',
            text: `Payment received by cash for item: ${item.name} (${item.id})`
        });
        
        // Refresh the display
        displayAddedItems();
        populateComments();
        
        // Show confirmation message
        alert('Payment marked as received by cash');
    }
}

// Function to mark item as paid by cash
function markDelivered(itemId) {
    const item = serviceRequestDetails.items.find(i => i.id === itemId);
    if (item) {
        // Update payment status to Paid
        item.markDelivered = true;
        
        // Add a comment about the cash payment
        serviceRequestDetails.comments.push({
            date: new Date().toLocaleString(),
            user: 'Malik Raja',
            text: `item delivered: ${item.name} (${item.id})`
        });
        
        // Refresh the display
        displayAddedItems();
        populateComments();
        
        // Show confirmation message
        alert('Item marked as delivered');
    }
}

// Function to remove item
function removeItem(itemId) {
    if (confirm('Are you sure you want to remove this item?')) {
        const itemIndex = serviceRequestDetails.items.findIndex(i => i.id === itemId);
        if (itemIndex !== -1) {
            serviceRequestDetails.items.splice(itemIndex, 1);
            displayAddedItems();
        }
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    populateServiceRequestDetails();
    populateProductInfo();
    populateAssignmentHistory();
    populateComments();
    displayAddedItems();
    updateUpcomingService();

    // Add event listeners for item search
    document.getElementById('itemSearch').addEventListener('input', handleItemSearch);
    document.querySelectorAll('#filterSpares, #filterAccessories, #filterServices')
        .forEach(checkbox => checkbox.addEventListener('change', handleItemSearch));
});

// Function to send payment links for pending items
function sendPaymentLinkForPendingItems() {
    if (!serviceRequestDetails.items) return;

    const pendingItems = serviceRequestDetails.items.filter(item => item.paymentStatus === 'Pending');
    
    if (pendingItems.length === 0) {
        alert('No pending items found');
        return;
    }

    // In a real implementation, this would integrate with a payment gateway
    // and send actual payment links to the customer
    pendingItems.forEach(item => {
        // Add a comment about the payment link being sent
        serviceRequestDetails.comments.push({
            date: new Date().toLocaleString(),
            user: 'System',
            text: `Payment link sent for item: ${item.name} (${item.id})`
        });
    });

    // Refresh comments section
    populateComments();

    // Show confirmation message
    alert(`Payment links sent for ${pendingItems.length} item(s)`);
}

// Function to print and send invoice
function printAndSendInvoice() {
    if (!serviceRequestDetails.items || serviceRequestDetails.items.length === 0) {
        alert('No items found to generate invoice');
        return;
    }

    const paidItems = serviceRequestDetails.items.filter(item => item.paymentStatus === 'Paid');
    
    if (paidItems.length === 0) {
        alert('No paid items found to generate invoice');
        return;
    }

    // Calculate total amount
    const totalAmount = paidItems.reduce((sum, item) => sum + item.price, 0);

    // In a real implementation, this would:
    // 1. Generate a PDF invoice
    // 2. Send it to the customer's email
    // 3. Store it in the system
    
    // Add a comment about the invoice
    serviceRequestDetails.comments.push({
        date: new Date().toLocaleString(),
        user: 'System',
        text: `Invoice generated and sent for ${paidItems.length} paid items. Total amount: ₹${totalAmount}`
    });

    // Refresh comments section
    populateComments();

    // Show confirmation message
    alert(`Invoice generated and sent for ${paidItems.length} items`);
}

function uploadServiceDocuments() {
    const fileInput = document.getElementById('serviceDocuments');
    const files = fileInput.files;

    if (files.length === 0) {
        alert('Please select files to upload');
        return;
    }

    // In a real implementation, you would upload these files to a server
    // For now, we'll just display them in the attachments section
    const attachmentsContainer = document.getElementById('serviceAttachments');
    
    for (const file of files) {
        const currentDate = new Date().toLocaleDateString();
        const fileType = file.type.split('/')[1].toUpperCase();
        
        const documentItem = `
            <div class="document-item d-flex justify-content-between align-items-center mb-2">
                <div>
                    <h6 class="mb-0">${file.name}</h6>
                    <small class="text-muted">Type: ${fileType} | Date: ${currentDate}</small>
                </div>
                <button class="btn btn-sm btn-outline-primary" onclick="downloadDocument('${file.name}')">Download</button>
            </div>
        `;
        
        attachmentsContainer.insertAdjacentHTML('beforeend', documentItem);
    }

    // Clear the file input
    fileInput.value = '';
    alert('Documents uploaded successfully!');
}

function updateTrackingFlow(currentStatus) {

    // Get all tracking steps and progress bar
    const steps = document.querySelectorAll('.timeline-step');
    const progressBar = document.querySelector('#serviceProgressBar');
    const trackingSection = document.querySelector('#serviceTrackingSection');
    
    // Show tracking section
    if (trackingSection) {
        trackingSection.style.display = 'block';
    }

    // Reset all steps to inactive state
    steps.forEach(step => {
        step.classList.remove('active', 'completed');
        const icon = step.querySelector('.step-icon');
        if (icon) icon.classList.remove('active', 'completed');
    });

    // Define the order of tracking steps and their corresponding progress percentages
    const stepOrder = ['Received', 'Assigned', 'In Progress', 'Completed'];
    const stepProgress = {
        'Received': 25,
        'Assigned': 50,
        'Pending': 50,
        'In Progress': 75,
        'Completed': 100
    };
    
    // Find the current status from history
    const currentStepIndex = stepOrder.indexOf(currentStatus);

    // Calculate progress percentage based on current status
    const progressPercentage = stepProgress[currentStatus] || 0;

    // Update progress bar
    if (progressBar) {
        progressBar.style.width = `${progressPercentage}%`;
        progressBar.setAttribute('aria-valuenow', progressPercentage);
        progressBar.textContent = `${progressPercentage}%`;

        // Update progress bar color based on status
        progressBar.className = 'progress-bar progress-bar-striped progress-bar-animated';
        if (currentStatus === 'Completed') {
            progressBar.classList.add('bg-success');
        } else if (currentStatus === 'In Progress') {
            progressBar.classList.add('bg-info');
        } else {
            progressBar.classList.add('bg-primary');
        }
    }

    // Update steps based on current status
    steps.forEach((step, index) => {
        if (index < currentStepIndex) {
            // Previous steps are completed
            step.classList.add('completed');
            const icon = step.querySelector('.step-icon');
            if (icon) icon.classList.add('completed');
        } else if (index === currentStepIndex) {
            // Current step is active
            step.classList.add('active');
            const icon = step.querySelector('.step-icon');
            if (icon) icon.classList.add('active');
        }
    });
}