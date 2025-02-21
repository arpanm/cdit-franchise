class QuotationManager {
    constructor() {
        this.quotations = [];
        this.currentQuotation = null;
        this.lineItems = [];
        this.isFranchiseView = window.location.pathname.includes('franchise-quotation');
        this.init();
    }

    init() {
        // Initialize event listeners
        document.getElementById('additionalDiscount').addEventListener('change', () => this.updateTotals());
        if (!this.isFranchiseView) {
            this.loadFranchises();
        }
        this.loadQuotations();
    }

    loadFranchises() {
        // TODO: Load franchises from API
        const franchises = [
            { id: 1, name: 'Franchise 1' },
            { id: 2, name: 'Franchise 2' }
        ];
        const franchiseSelect = document.getElementById('franchiseSelect');
        const franchiseFilter = document.getElementById('franchiseFilter');
        
        franchises.forEach(franchise => {
            franchiseSelect.add(new Option(franchise.name, franchise.id));
            franchiseFilter.add(new Option(franchise.name, franchise.id));
        });

        franchiseFilter.addEventListener('change', () => this.filterQuotations());
    }

    loadQuotations() {
        // TODO: Load quotations from API
        this.quotations = [
            {
                id: 'Q001',
                franchiseId: 1,
                customerName: 'John Doe',
                totalItems: 3,
                totalValue: 15000,
                discount: 1500,
                finalValue: 13500,
                status: 'pending',
                createdDate: '2024-01-15',
                updatedDate: '2024-01-15',
                lineItems: [
                    { type: 'Product', name: 'Laptop Repair Kit', quantity: 1, unitPrice: 8000, discountPercent: 10, discountAmount: 800, finalPrice: 7200 },
                    { type: 'Service', name: 'Diagnostic Service', quantity: 1, unitPrice: 2000, discountPercent: 0, discountAmount: 0, finalPrice: 2000 },
                    { type: 'Product', name: 'Replacement Screen', quantity: 1, unitPrice: 5000, discountPercent: 10, discountAmount: 700, finalPrice: 4300 }
                ]
            },
            {
                id: 'Q002',
                franchiseId: 2,
                customerName: 'Jane Smith',
                totalItems: 2,
                totalValue: 25000,
                discount: 2500,
                finalValue: 22500,
                status: 'approved',
                createdDate: '2024-01-16',
                updatedDate: '2024-01-17',
                lineItems: [
                    { type: 'Product', name: 'Gaming PC Upgrade Kit', quantity: 1, unitPrice: 20000, discountPercent: 10, discountAmount: 2000, finalPrice: 18000 },
                    { type: 'Service', name: 'Installation Service', quantity: 1, unitPrice: 5000, discountPercent: 10, discountAmount: 500, finalPrice: 4500 }
                ]
            },
            {
                id: 'Q003',
                franchiseId: 1,
                customerName: 'Robert Johnson',
                totalItems: 4,
                totalValue: 35000,
                discount: 5250,
                finalValue: 29750,
                status: 'rejected',
                createdDate: '2024-01-14',
                updatedDate: '2024-01-16',
                lineItems: [
                    { type: 'Product', name: 'Server Components', quantity: 2, unitPrice: 12000, discountPercent: 15, discountAmount: 3600, finalPrice: 20400 },
                    { type: 'Service', name: 'Network Setup', quantity: 1, unitPrice: 8000, discountPercent: 15, discountAmount: 1200, finalPrice: 6800 },
                    { type: 'Service', name: 'System Configuration', quantity: 1, unitPrice: 3000, discountPercent: 15, discountAmount: 450, finalPrice: 2550 }
                ]
            },
            {
                id: 'Q004',
                franchiseId: 2,
                customerName: 'Sarah Williams',
                totalItems: 1,
                totalValue: 8000,
                discount: 0,
                finalValue: 8000,
                status: 'pending',
                createdDate: '2024-01-17',
                updatedDate: '2024-01-17',
                lineItems: [
                    { type: 'Service', name: 'Emergency IT Support', quantity: 1, unitPrice: 8000, discountPercent: 0, discountAmount: 0, finalPrice: 8000 }
                ]
            }
        ];
        this.renderQuotations();
    }

    renderQuotations() {
        const tbody = document.getElementById('quotationTableBody');
        tbody.innerHTML = '';

        this.quotations.forEach(quotation => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${quotation.id}</td>
                ${!this.isFranchiseView ? `<td>${this.getFranchiseName(quotation.franchiseId)}</td>` : ''}
                <td>${quotation.customerName}</td>
                <td>${quotation.totalItems}</td>
                <td>₹${quotation.totalValue.toFixed(2)}</td>
                <td>₹${quotation.discount.toFixed(2)}</td>
                <td>₹${quotation.finalValue.toFixed(2)}</td>
                <td><span class="badge bg-${this.getStatusBadgeClass(quotation.status)}">${quotation.status}</span></td>
                <td>${quotation.createdDate}</td>
                <td>${quotation.updatedDate}</td>
                <td>
                    <button class="btn btn-sm btn-primary me-1" onclick="quotationManager.editQuotation('${quotation.id}')"><i class="bi bi-pencil"></i></button>
                    <button class="btn btn-sm btn-danger" onclick="quotationManager.deleteQuotation('${quotation.id}')"><i class="bi bi-trash"></i></button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    getFranchiseName(franchiseId) {
        // TODO: Get franchise name from franchises list
        return `Franchise ${franchiseId}`;
    }

    getStatusBadgeClass(status) {
        switch (status) {
            case 'approved': return 'success';
            case 'rejected': return 'danger';
            case 'pending': return 'warning';
            default: return 'secondary';
        }
    }

    createQuotation() {
        this.currentQuotation = null;
        this.lineItems = [];
        this.resetForm();
        this.renderLineItems();
        new bootstrap.Modal(document.getElementById('quotationModal')).show();
    }

    editQuotation(id) {
        // TODO: Load quotation details from API
        this.currentQuotation = this.quotations.find(q => q.id === id);
        if (this.currentQuotation) {
            this.populateForm();
            new bootstrap.Modal(document.getElementById('quotationModal')).show();
        }
    }

    deleteQuotation(id) {
        if (confirm('Are you sure you want to delete this quotation?')) {
            // TODO: Delete quotation via API
            this.quotations = this.quotations.filter(q => q.id !== id);
            this.renderQuotations();
        }
    }

    addLineItem() {
        this.lineItems.push({
            id: Date.now(),
            type: '',
            name: '',
            quantity: 1,
            unitPrice: 0,
            discountPercent: 0,
            discountAmount: 0,
            finalPrice: 0
        });
        this.renderLineItems();
    }

    removeLineItem(id) {
        this.lineItems = this.lineItems.filter(item => item.id !== id);
        this.renderLineItems();
        this.updateTotals();
    }

    renderLineItems() {
        const tbody = document.getElementById('lineItemsBody');
        tbody.innerHTML = '';

        this.lineItems.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>
                    <select class="form-select form-select-sm" onchange="quotationManager.updateLineItem(${item.id}, 'type', this.value)">
                        <option value="">Select Type</option>
                        <option value="product" ${item.type === 'product' ? 'selected' : ''}>Product</option>
                        <option value="service" ${item.type === 'service' ? 'selected' : ''}>Service</option>
                    </select>
                </td>
                <td>
                    <input type="text" class="form-control form-control-sm" value="${item.name}" 
                           onchange="quotationManager.updateLineItem(${item.id}, 'name', this.value)">
                </td>
                <td>
                    <input type="number" class="form-control form-control-sm" value="${item.quantity}" min="1"
                           onchange="quotationManager.updateLineItem(${item.id}, 'quantity', this.value)">
                </td>
                <td>
                    <input type="number" class="form-control form-control-sm" value="${item.unitPrice}" min="0"
                           onchange="quotationManager.updateLineItem(${item.id}, 'unitPrice', this.value)">
                </td>
                <td>
                    <input type="number" class="form-control form-control-sm" value="${item.discountPercent}" min="0" max="100"
                           onchange="quotationManager.updateLineItem(${item.id}, 'discountPercent', this.value)">
                </td>
                <td>₹${item.discountAmount.toFixed(2)}</td>
                <td>₹${item.finalPrice.toFixed(2)}</td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="quotationManager.removeLineItem(${item.id})">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    updateLineItem(id, field, value) {
        const item = this.lineItems.find(item => item.id === id);
        if (item) {
            item[field] = field === 'type' || field === 'name' ? value : parseFloat(value);
            this.calculateLineItemTotals(item);
            this.renderLineItems();
            this.updateTotals();
        }
    }

    calculateLineItemTotals(item) {
        const subtotal = item.quantity * item.unitPrice;
        item.discountAmount = (subtotal * item.discountPercent) / 100;
        item.finalPrice = subtotal - item.discountAmount;
    }

    updateTotals() {
        const subtotal = this.lineItems.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
        const itemDiscounts = this.lineItems.reduce((sum, item) => sum + item.discountAmount, 0);
        const additionalDiscountPercent = parseFloat(document.getElementById('additionalDiscount').value) || 0;
        const additionalDiscountAmount = (subtotal - itemDiscounts) * (additionalDiscountPercent / 100);
        const finalTotal = subtotal - itemDiscounts - additionalDiscountAmount;

        document.getElementById('subtotal').textContent = `₹${subtotal.toFixed(2)}`;
        document.getElementById('totalDiscount').textContent = `₹${itemDiscounts.toFixed(2)}`;
        document.getElementById('additionalDiscountAmount').textContent = `₹${additionalDiscountAmount.toFixed(2)}`;
        document.getElementById('finalTotal').textContent = `₹${finalTotal.toFixed(2)}`;
    }

    resetForm() {
        document.getElementById('quotationForm').reset();
        if (!this.isFranchiseView) {
            document.getElementById('franchiseSelect').value = '';
        }
        document.getElementById('additionalDiscount').value = '0';
        this.updateTotals();
    }

    populateForm() {
        if (!this.currentQuotation) return;

        if (!this.isFranchiseView) {
            document.getElementById('franchiseSelect').value = this.currentQuotation.franchiseId;
        }
        document.getElementById('customerName').value = this.currentQuotation.customerName;
        // TODO: Populate other fields and line items
        this.updateTotals();
    }

    saveQuotation() {
        const formData = {
            customerName: document.getElementById('customerName').value,
            contactNumber: document.getElementById('contactNumber').value,
            email: document.getElementById('customerEmail').value,
            address: document.getElementById('customerAddress').value,
            notes: document.getElementById('quotationNotes').value,
            lineItems: this.lineItems,
            additionalDiscount: parseFloat(document.getElementById('additionalDiscount').value) || 0
        };

        if (!this.isFranchiseView) {
            formData.franchiseId = document.getElementById('franchiseSelect').value;
            formData.approvalStatus = document.getElementById('approvalStatus').value;
            formData.approvalComments = document.getElementById('approvalComments').value;
        }

        // TODO: Save quotation via API
        console.log('Saving quotation:', formData);

        // Close modal and refresh list
        bootstrap.Modal.getInstance(document.getElementById('quotationModal')).hide();
        this.loadQuotations();
    }

    approveQuotation() {
        if (this.currentQuotation) {
            // TODO: Approve quotation via API
            this.currentQuotation.status = 'approved';
            this.saveQuotation();
        }
    }

    rejectQuotation() {
        if (this.currentQuotation) {
            // TODO: Reject quotation via API
            this.currentQuotation.status = 'rejected';
            this.saveQuotation();
        }
    }

    filterQuotations() {
        const franchiseId = document.getElementById('franchiseFilter').value;
        // TODO: Filter quotations via API
        this.renderQuotations();
    }
}

// Initialize the quotation manager
const quotationManager = new QuotationManager();