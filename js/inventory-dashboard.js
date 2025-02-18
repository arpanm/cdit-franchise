// Credit balance and history data
let creditBalance = 55000;
const creditHistory = [
    {
        date: "2024-01-28",
        description: "Commission for Service #SR2401-056",
        category: "commission",
        credit: 3500,
        debit: 0,
        balance: 53500,
        reference: "SR2401-056"
    },
    {
        date: "2024-01-25",
        description: "Early Bird Bonus Scheme Reward",
        category: "schemes",
        credit: 2500,
        debit: 0,
        balance: 56000,
        reference: "SCH-EB-24-01"
    },
    {
        date: "2024-01-20",
        description: "Parts Return - Invoice #INV2401-032",
        category: "returns",
        credit: 1200,
        debit: 0,
        balance: 57200,
        reference: "RET2401-032"
    },
    {
        date: "2024-01-15",
        description: "Monthly Service Fee Payment",
        category: "debit",
        credit: 0,
        debit: 1500,
        balance: 55700,
        reference: "PAY2401-015"
    },
    {
        date: "2024-01-10",
        description: "Commission for Service #SR2401-023",
        category: "commission",
        credit: 2800,
        debit: 0,
        balance: 58500,
        reference: "SR2401-023"
    },
    {
        date: "2024-01-05",
        description: "Spare Parts Purchase",
        category: "debit",
        credit: 0,
        debit: 3500,
        balance: 55000,
        reference: "PO2401-005"
    }
];

const masterSKUs = [
    {
        skuId: 'SP001',
        skuName: 'Samsung Washing Machine Motor',
        category: 'spare',
        brand: 'samsung',
        mrp: 2500,
        offerPrice: 2000,
        commission: 10,
        compatibleProducts: ['WM-SAM-001', 'WM-SAM-002']
    },
    {
        skuId: 'SP002',
        skuName: 'LG Refrigerator Compressor',
        category: 'spare',
        brand: 'lg',
        mrp: 3500,
        offerPrice: 3000,
        commission: 12,
        compatibleProducts: ['RF-LG-001', 'RF-LG-002']
    },
    {
        skuId: 'SP003',
        skuName: 'Whirlpool AC Fan Motor',
        category: 'spare',
        brand: 'whirlpool',
        mrp: 1800,
        offerPrice: 1500,
        commission: 8,
        compatibleProducts: ['AC-WP-001']
    },
    {
        skuId: 'SP004',
        skuName: 'Samsung TV Display Panel',
        category: 'spare',
        brand: 'samsung',
        mrp: 12000,
        offerPrice: 10000,
        commission: 15,
        compatibleProducts: ['TV-SAM-001', 'TV-SAM-002']
    },
    {
        skuId: 'SP005',
        skuName: 'LG Microwave Magnetron',
        category: 'spare',
        brand: 'lg',
        mrp: 2800,
        offerPrice: 2400,
        commission: 10,
        compatibleProducts: ['MW-LG-001']
    },
    {
        skuId: 'AC001',
        skuName: 'Universal Remote Control',
        category: 'accessory',
        brand: 'samsung',
        mrp: 500,
        offerPrice: 400,
        commission: 20,
        compatibleProducts: ['TV-SAM-001', 'AC-SAM-001']
    },
    {
        skuId: 'AC002',
        skuName: 'Water Filter',
        category: 'accessory',
        brand: 'lg',
        mrp: 1200,
        offerPrice: 1000,
        commission: 15,
        compatibleProducts: ['RF-LG-001', 'RF-LG-002']
    },
    {
        skuId: 'SP006',
        skuName: 'Whirlpool Dishwasher Pump',
        category: 'spare',
        brand: 'whirlpool',
        mrp: 2200,
        offerPrice: 1800,
        commission: 12,
        compatibleProducts: ['DW-WP-001']
    },
    {
        skuId: 'SP007',
        skuName: 'Samsung Dryer Belt',
        category: 'spare',
        brand: 'samsung',
        mrp: 800,
        offerPrice: 600,
        commission: 25,
        compatibleProducts: ['DR-SAM-001']
    },
    {
        skuId: 'AC003',
        skuName: 'Washing Machine Hose',
        category: 'accessory',
        brand: 'whirlpool',
        mrp: 400,
        offerPrice: 300,
        commission: 20,
        compatibleProducts: ['WM-WP-001', 'WM-WP-002']
    },
    {
        skuId: 'SP008',
        skuName: 'LG AC Compressor',
        category: 'spare',
        brand: 'lg',
        mrp: 4500,
        offerPrice: 4000,
        commission: 10,
        compatibleProducts: ['AC-LG-001', 'AC-LG-002']
    },
    {
        skuId: 'AC004',
        skuName: 'Microwave Glass Plate',
        category: 'accessory',
        brand: 'samsung',
        mrp: 600,
        offerPrice: 500,
        commission: 15,
        compatibleProducts: ['MW-SAM-001']
    },
    {
        skuId: 'SP009',
        skuName: 'Whirlpool Fridge Thermostat',
        category: 'spare',
        brand: 'whirlpool',
        mrp: 1500,
        offerPrice: 1200,
        commission: 18,
        compatibleProducts: ['RF-WP-001']
    },
    {
        skuId: 'AC005',
        skuName: 'AC Filter Set',
        category: 'accessory',
        brand: 'lg',
        mrp: 300,
        offerPrice: 250,
        commission: 15,
        compatibleProducts: ['AC-LG-001', 'AC-LG-002']
    },
    {
        skuId: 'SP010',
        skuName: 'Samsung Refrigerator Fan',
        category: 'spare',
        brand: 'samsung',
        mrp: 1200,
        offerPrice: 1000,
        commission: 12,
        compatibleProducts: ['RF-SAM-001']
    },
    {
        skuId: 'AC006',
        skuName: 'Dishwasher Detergent Box',
        category: 'accessory',
        brand: 'whirlpool',
        mrp: 200,
        offerPrice: 150,
        commission: 25,
        compatibleProducts: ['DW-WP-001']
    },
    {
        skuId: 'SP011',
        skuName: 'LG Washing Machine Timer',
        category: 'spare',
        brand: 'lg',
        mrp: 1600,
        offerPrice: 1400,
        commission: 12,
        compatibleProducts: ['WM-LG-001']
    },
    {
        skuId: 'AC007',
        skuName: 'TV Wall Mount Bracket',
        category: 'accessory',
        brand: 'samsung',
        mrp: 800,
        offerPrice: 700,
        commission: 15,
        compatibleProducts: ['TV-SAM-001', 'TV-SAM-002']
    },
    {
        skuId: 'SP012',
        skuName: 'Whirlpool Dryer Heating Element',
        category: 'spare',
        brand: 'whirlpool',
        mrp: 2000,
        offerPrice: 1800,
        commission: 10,
        compatibleProducts: ['DR-WP-001']
    },
    {
        skuId: 'AC008',
        skuName: 'Refrigerator Deodorizer',
        category: 'accessory',
        brand: 'lg',
        mrp: 400,
        offerPrice: 350,
        commission: 20,
        compatibleProducts: ['RF-LG-001', 'RF-LG-002']
    }
];

// Sample inventory data
const inventoryData = [
    {
        skuId: 'SP001',
        skuName: 'Samsung Washing Machine Motor',
        category: 'spare',
        brand: 'samsung',
        mrp: 3500,
        offerPrice: 2800,
        commission: 15,
        totalPurchased: 50,
        totalSold: 35,
        currentStock: 15,
        inventoryStatus: 'normal',
        demand: 'high',
        lastPurchase: '2024-01-15',
        openPOs: 1,
        returnStatus: 'Pending: 1'
    },
    {
        skuId: 'SP002',
        skuName: 'LG Refrigerator Compressor',
        category: 'spare',
        brand: 'lg',
        mrp: 4500,
        offerPrice: 3600,
        commission: 18,
        totalPurchased: 30,
        totalSold: 28,
        currentStock: 2,
        inventoryStatus: 'low',
        demand: 'high',
        lastPurchase: '2024-01-10',
        openPOs: 2,
        returnStatus: null
    },
    {
        skuId: 'SP003',
        skuName: 'Whirlpool AC Fan Motor',
        category: 'spare',
        brand: 'whirlpool',
        mrp: 2800,
        offerPrice: 2200,
        commission: 12,
        totalPurchased: 40,
        totalSold: 20,
        currentStock: 20,
        inventoryStatus: 'high',
        demand: 'normal',
        lastPurchase: '2024-01-20',
        openPOs: 0,
        returnStatus: 'completed: 2'
    },
    {
        skuId: 'AC001',
        skuName: 'Samsung AC Remote',
        category: 'accessory',
        brand: 'samsung',
        mrp: 800,
        offerPrice: 600,
        commission: 20,
        totalPurchased: 100,
        totalSold: 85,
        currentStock: 15,
        inventoryStatus: 'normal',
        demand: 'high',
        lastPurchase: '2024-01-18',
        openPOs: 1,
        returnStatus: null
    },
    {
        skuId: 'AC002',
        skuName: 'LG TV Remote',
        category: 'accessory',
        brand: 'lg',
        mrp: 600,
        offerPrice: 450,
        commission: 25,
        totalPurchased: 80,
        totalSold: 75,
        currentStock: 5,
        inventoryStatus: 'low',
        demand: 'high',
        lastPurchase: '2024-01-12',
        openPOs: 1,
        returnStatus: null
    },
    {
        skuId: 'SP004',
        skuName: 'Samsung Microwave Magnetron',
        category: 'spare',
        brand: 'samsung',
        mrp: 3200,
        offerPrice: 2500,
        commission: 15,
        totalPurchased: 25,
        totalSold: 10,
        currentStock: 15,
        inventoryStatus: 'high',
        demand: 'low',
        lastPurchase: '2024-01-05',
        openPOs: 0,
        returnStatus: null
    },
    {
        skuId: 'SP005',
        skuName: 'LG Dishwasher Pump',
        category: 'spare',
        brand: 'lg',
        mrp: 2900,
        offerPrice: 2300,
        commission: 14,
        totalPurchased: 35,
        totalSold: 30,
        currentStock: 5,
        inventoryStatus: 'low',
        demand: 'high',
        lastPurchase: '2024-01-08',
        openPOs: 1,
        returnStatus: null
    },
    {
        skuId: 'AC003',
        skuName: 'Whirlpool Water Filter',
        category: 'accessory',
        brand: 'whirlpool',
        mrp: 1200,
        offerPrice: 900,
        commission: 22,
        totalPurchased: 150,
        totalSold: 100,
        currentStock: 50,
        inventoryStatus: 'high',
        demand: 'normal',
        lastPurchase: '2024-01-15',
        openPOs: 0,
        returnStatus: null
    },
    {
        skuId: 'SP006',
        skuName: 'Samsung Dryer Belt',
        category: 'spare',
        brand: 'samsung',
        mrp: 800,
        offerPrice: 600,
        commission: 20,
        totalPurchased: 60,
        totalSold: 45,
        currentStock: 15,
        inventoryStatus: 'normal',
        demand: 'normal',
        lastPurchase: '2024-01-17',
        openPOs: 0,
        returnStatus: null
    },
    {
        skuId: 'AC004',
        skuName: 'LG Air Purifier Filter',
        category: 'accessory',
        brand: 'lg',
        mrp: 1500,
        offerPrice: 1200,
        commission: 18,
        totalPurchased: 70,
        totalSold: 60,
        currentStock: 10,
        inventoryStatus: 'normal',
        demand: 'high',
        lastPurchase: '2024-01-14',
        openPOs: 1,
        returnStatus: null
    },
    {
        skuId: 'SP007',
        skuName: 'Whirlpool Oven Thermostat',
        category: 'spare',
        brand: 'whirlpool',
        mrp: 1800,
        offerPrice: 1400,
        commission: 16,
        totalPurchased: 45,
        totalSold: 35,
        currentStock: 10,
        inventoryStatus: 'normal',
        demand: 'normal',
        lastPurchase: '2024-01-19',
        openPOs: 0,
        returnStatus: null
    },
    {
        skuId: 'AC005',
        skuName: 'Samsung Refrigerator Water Filter',
        category: 'accessory',
        brand: 'samsung',
        mrp: 2000,
        offerPrice: 1600,
        commission: 20,
        totalPurchased: 90,
        totalSold: 70,
        currentStock: 20,
        inventoryStatus: 'normal',
        demand: 'high',
        lastPurchase: '2024-01-16',
        openPOs: 1,
        returnStatus: null
    },
    {
        skuId: 'SP008',
        skuName: 'LG AC Capacitor',
        category: 'spare',
        brand: 'lg',
        mrp: 600,
        offerPrice: 450,
        commission: 25,
        totalPurchased: 120,
        totalSold: 100,
        currentStock: 20,
        inventoryStatus: 'normal',
        demand: 'high',
        lastPurchase: '2024-01-13',
        openPOs: 0,
        returnStatus: null
    },
    {
        skuId: 'AC006',
        skuName: 'Whirlpool Washing Machine Hose',
        category: 'accessory',
        brand: 'whirlpool',
        mrp: 500,
        offerPrice: 380,
        commission: 24,
        totalPurchased: 100,
        totalSold: 80,
        currentStock: 20,
        inventoryStatus: 'normal',
        demand: 'normal',
        lastPurchase: '2024-01-11',
        openPOs: 0,
        returnStatus: null
    },
    {
        skuId: 'SP009',
        skuName: 'Samsung TV Power Board',
        category: 'spare',
        brand: 'samsung',
        mrp: 2500,
        offerPrice: 2000,
        commission: 15,
        totalPurchased: 40,
        totalSold: 35,
        currentStock: 5,
        inventoryStatus: 'low',
        demand: 'high',
        lastPurchase: '2024-01-09',
        openPOs: 2,
        returnStatus: null
    }
];

// Inventory Manager Class
class InventoryManager {
    constructor(data) {
        this.inventoryData = data;
        this.creditBalance = creditBalance;
        this.creditHistory = creditHistory;
        this.masterSKUs = masterSKUs;
    }

    updateCreditBalance() {
        const creditBalanceElement = document.getElementById('creditBalance');
        if (creditBalanceElement) {
            creditBalanceElement.textContent = `₹${this.creditBalance.toLocaleString()}`;
        }
    }

    populateTable(filteredData = null) {
        const tbody = document.getElementById('inventoryTableBody');
        const data = filteredData || this.inventoryData;
        tbody.innerHTML = '';

        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.skuId}</td>
                <td>${item.skuName}</td>
                <td>${item.category}</td>
                <td>${item.brand}</td>
                <td>₹${item.mrp}</td>
                <td>₹${item.offerPrice}</td>
                <td>${item.commission}%</td>
                <td>${item.totalPurchased}</td>
                <td>${item.totalSold}</td>
                <td>${item.currentStock}</td>
                <td>
                    <span class="badge ${this.getInventoryStatusClass(item.inventoryStatus)}">
                        ${item.inventoryStatus}
                    </span>
                </td>
                <td>
                    <span class="badge ${this.getDemandStatusClass(item.demand)}">
                        ${item.demand}
                    </span>
                </td>
                <td>${item.openPOs}</td>
                <td>
                    <span class="badge ${this.getReturnStatusClass(item.returnStatus)}">
                        ${item.returnStatus || 'No Return'}
                    </span>
                </td>
                <td id="actionButtons-${item.skuId}">
                    <button class="btn btn-sm btn-primary me-1" onclick="inventoryManager.openOrderModal('${item.skuId}')">
                        <i class="bi bi-cart-plus"></i> Order
                    </button>
                    <button class="btn btn-sm btn-warning" onclick="inventoryManager.openReturnModal('${item.skuId}')"}>
                        <i class="bi bi-arrow-return-left"></i> Return
                    </button>
                </td>
            `;
            tbody.appendChild(row);
        });
        this.updateCreditBalance();
    }

    getReturnStatusClass(status) {
        return {
            'Pending': 'bg-warning',
            'Approved': 'bg-success',
            'Rejected': 'bg-danger'
        }[status] || 'bg-secondary';
    }

    getInventoryStatusClass(status) {
        return {
            'low': 'bg-danger',
            'normal': 'bg-success',
            'high': 'bg-primary'
        }[status] || 'bg-secondary';
    }

    getDemandStatusClass(status) {
        return {
            'low': 'bg-secondary',
            'normal': 'bg-info',
            'high': 'bg-warning'
        }[status] || 'bg-secondary';
    }

    openOrderModal(skuId) {
        const item = this.inventoryData.find(i => i.skuId === skuId);
        document.getElementById('orderSkuDetails').textContent = `${item.skuName} (${item.skuId}) - ₹${item.offerPrice}`;
        document.getElementById('orderQuantity').value = '';
        document.getElementById('orderTotalAmount').textContent = '₹0';
        document.getElementById('orderCreditWarning').style.display = 'none';
        
        const modal = new bootstrap.Modal(document.getElementById('orderModal'));
        modal.show();

        // Add event listener for quantity change
        document.getElementById('orderQuantity').addEventListener('input', (e) => {
            const quantity = parseInt(e.target.value) || 0;
            const totalAmount = quantity * item.offerPrice;
            document.getElementById('orderTotalAmount').textContent = `₹${totalAmount.toLocaleString()}`;
            document.getElementById('orderCreditWarning').style.display = 
                totalAmount > this.creditBalance ? 'block' : 'none';
        });
    }


    openReturnModal(skuId) {
        const item = this.inventoryData.find(i => i.skuId === skuId);
        document.getElementById('returnSkuDetails').textContent = `${item.skuName} (${item.skuId})`;
        document.getElementById('returnQuantity').value = '';
        document.getElementById('returnReason').value = '';
        
        const modal = new bootstrap.Modal(document.getElementById('returnModal'));
        modal.show();
    }

    openReturnModal(skuId) {
        const item = this.inventoryData.find(i => i.skuId === skuId);
        document.getElementById('returnSkuDetails').textContent = `${item.skuName} (${item.skuId})`;
        document.getElementById('returnQuantity').value = '';
        document.getElementById('returnReason').value = '';
        
        const modal = new bootstrap.Modal(document.getElementById('returnModal'));
        modal.show();
    }

    createPurchaseOrder() {
        const skuDetails = document.getElementById('orderSkuDetails').textContent;
        const skuId = skuDetails.split('(')[1]?.split(')')[0];
        const quantity = parseInt(document.getElementById('orderQuantity').value);

        if (!skuId || !quantity || isNaN(quantity) || quantity <= 0) {
            alert('Please enter a valid quantity');
            return;
        }

        const item = this.inventoryData.find(i => i.skuId === skuId);
        if (!item) {
            console.error('Item not found:', skuId);
            return;
        }

        const totalAmount = quantity * item.offerPrice;

        if (totalAmount > this.creditBalance) {
            document.getElementById('orderCreditWarning').style.display = 'block';
            return;
        }

        this.creditBalance -= totalAmount;
        this.creditHistory.push({
            date: new Date().toISOString().split('T')[0],
            description: `Purchase Order - ${skuId}`,
            category: 'debit',
            credit: 0,
            debit: totalAmount,
            balance: this.creditBalance,
            reference: `PO-${skuId}-${Date.now()}`
        });

        item.totalPurchased += quantity;
        item.currentStock += quantity;
        item.openPOs += 1;
        item.lastPurchase = new Date().toISOString().split('T')[0];

        this.updateCreditBalance();
        this.populateTable();
        this.populateCreditHistory();
        bootstrap.Modal.getInstance(document.getElementById('orderModal')).hide();
    }

    initiateReturn() {
        const skuDetails = document.getElementById('returnSkuDetails').textContent;
        const skuId = skuDetails.split('(')[1].split(')')[0];
        const quantity = parseInt(document.getElementById('returnQuantity').value);
        const reason = document.getElementById('returnReason').value;
        const item = this.inventoryData.find(i => i.skuId === skuId);
        const warningElement = document.getElementById('returnQuantityWarning');

        // Validate return quantity
        if (!quantity || quantity <= 0 || quantity > item.currentStock) {
            warningElement.textContent = `Return quantity must be between 1 and ${item.currentStock}`;
            warningElement.style.display = 'block';
            return;
        }
        warningElement.style.display = 'none';

        // Update item's return status
        item.returnStatus = 'pending: ' + quantity;

        const returnAmount = quantity * item.offerPrice;
        this.creditHistory.push({
            date: new Date().toISOString().split('T')[0],
            description: `Return Request - ${skuId}`,
            category: 'returns',
            credit: returnAmount,
            debit: 0,
            balance: this.creditBalance + returnAmount,
            reference: `RET-${skuId}-${Date.now()}`
        });

        this.populateTable();
        bootstrap.Modal.getInstance(document.getElementById('returnModal')).hide();
        alert('Return request has been submitted and is pending approval.');
    }

    populateCreditHistory() {
        const tbody = document.getElementById('creditHistoryTableBody');
        if (!tbody) {
            console.error('Credit history table body not found');
            return;
        }

        tbody.innerHTML = '';
        if (this.creditHistory.length === 0) {
            const emptyRow = document.createElement('tr');
            emptyRow.innerHTML = '<td colspan="8" class="text-center">No transaction history available</td>';
            tbody.appendChild(emptyRow);
            return;
        }

        // Sort transactions in reverse chronological order
        const sortedHistory = [...this.creditHistory].reverse();

        // Display transactions
        sortedHistory.forEach(transaction => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${transaction.date}</td>
                <td>${transaction.description}</td>
                <td>${transaction.category}</td>
                <td>₹${transaction.credit.toLocaleString()}</td>
                <td>₹${transaction.debit.toLocaleString()}</td>
                <td>₹${transaction.balance.toLocaleString()}</td>
                <td>${transaction.reference}</td>
                <td><span class="badge ${transaction.status === 'Completed' ? 'bg-success' : 'bg-warning'}">${transaction.status}</span></td>
            `;
            tbody.appendChild(row);
        });

        // Update summary totals
        const totalCredit = sortedHistory.reduce((sum, t) => sum + (t.amount > 0 ? t.amount : 0), 0);
        const totalDebit = sortedHistory.reduce((sum, t) => sum + (t.amount < 0 ? Math.abs(t.amount) : 0), 0);
        
        const totalCreditElement = document.getElementById('totalCredit');
        const totalDebitElement = document.getElementById('totalDebit');
        const netBalanceElement = document.getElementById('netBalance');

        if (totalCreditElement) totalCreditElement.textContent = ``;
        if (totalDebitElement) totalDebitElement.textContent = ``;
        if (netBalanceElement) netBalanceElement.textContent = `₹${this.creditBalance.toLocaleString()}`;
    }

    applyFilters() {
        const searchTerm = document.getElementById('searchSku').value.toLowerCase();
        const category = document.getElementById('filterCategory').value;
        const brand = document.getElementById('filterBrand').value;
        const inventoryStatus = document.getElementById('filterInventoryStatus').value;
        const demand = document.getElementById('filterDemand').value;
    
        const filteredData = this.inventoryData.filter(item => {
            const matchesSearch = item.skuId.toLowerCase().includes(searchTerm) ||
                                item.skuName.toLowerCase().includes(searchTerm);
            const matchesCategory = !category || item.category.toLowerCase() === category.toLowerCase();
            const matchesBrand = !brand || item.brand.toLowerCase() === brand.toLowerCase();
            const matchesInventoryStatus = !inventoryStatus || item.inventoryStatus.toLowerCase() === inventoryStatus.toLowerCase();
            const matchesDemand = !demand || item.demand.toLowerCase() === demand.toLowerCase();
    
            return matchesSearch && matchesCategory && matchesBrand && 
                   matchesInventoryStatus && matchesDemand;
        });
    
        this.populateTable(filteredData);
    }

    initialize() {
        this.populateTable();
        // Set up filter event listeners
        const searchSku = document.getElementById('searchSku');
        const filterCategory = document.getElementById('filterCategory');
        const filterBrand = document.getElementById('filterBrand');
        const filterInventoryStatus = document.getElementById('filterInventoryStatus');
        const filterDemand = document.getElementById('filterDemand');
        const creditHistoryModal = document.getElementById('creditHistoryModal');

        if (searchSku) {
            searchSku.addEventListener('input', () => this.applyFilters());
        }
        if (filterCategory) {
            filterCategory.addEventListener('change', () => this.applyFilters());
        }
        if (filterBrand) {
            filterBrand.addEventListener('change', () => this.applyFilters());
        }
        if (filterInventoryStatus) {
            filterInventoryStatus.addEventListener('change', () => this.applyFilters());
        }
        if (filterDemand) {
            filterDemand.addEventListener('change', () => this.applyFilters());
        }

        // Set up credit history modal event
        if (creditHistoryModal) {
            creditHistoryModal.addEventListener('show.bs.modal', () => {
                this.populateCreditHistory();
            });
        }
    }
}

// Initialize inventory manager
const inventoryManager = new InventoryManager(inventoryData);

// Make inventoryManager available globally
window.inventoryManager = inventoryManager;

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    inventoryManager.initialize();
});

// Global functions for modal actions
window.createPurchaseOrder = function() {
    inventoryManager.createPurchaseOrder();
}

window.initiateReturn = function() {
    inventoryManager.initiateReturn();
}

function filterAvailableSkus() {
    const searchTerm = document.getElementById('skuSearch').value.toLowerCase();
    const category = document.getElementById('skuFilterCategory').value;
    const brand = document.getElementById('skuFilterBrand').value;

    if (!masterSKUs || !Array.isArray(masterSKUs)) {
        console.error('Master SKUs not properly initialized');
        return;
    }

    const filteredSkus = masterSKUs.filter(sku => {
        const matchesSearch = !searchTerm || 
                             sku.skuName.toLowerCase().includes(searchTerm) ||
                             sku.skuId.toLowerCase().includes(searchTerm);
        const matchesCategory = !category || sku.category.toLowerCase() === category.toLowerCase();
        const matchesBrand = !brand || sku.brand.toLowerCase() === brand.toLowerCase();

        return matchesSearch && matchesCategory && matchesBrand;
    });

    const skuSelect = document.getElementById('availableSkus');
    if (!skuSelect) {
        console.error('SKU select element not found');
        return;
    }

    skuSelect.innerHTML = '<option value="">Select a SKU</option>';

    if (filteredSkus.length === 0) {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'No SKUs found';
        option.disabled = true;
        skuSelect.appendChild(option);
    } else {
        filteredSkus.forEach(sku => {
            const option = document.createElement('option');
            option.value = sku.skuId;
            option.textContent = `${sku.skuName} (${sku.skuId})`;
            skuSelect.appendChild(option);
        });
    }
}

function addSelectedSku() {
    const selectedSkuId = document.getElementById('availableSkus').value;
    if (!selectedSkuId) {
        alert('Please select a SKU to add');
        return;
    }

    const selectedSku = masterSKUs.find(sku => sku.skuId === selectedSkuId);
    if (!selectedSku) {
        alert('Selected SKU not found');
        return;
    }

    const existingItemIndex = inventoryData.findIndex(i => i.skuId === selectedSkuId);
    if (existingItemIndex !== -1) {
        alert('This SKU is already in your inventory');
        return;
    }

    inventoryData.push({
        ...selectedSku,
        totalPurchased: 0,
        totalSold: 0,
        currentStock: 0,
        inventoryStatus: 'normal',
        demand: 'normal',
        lastPurchase: '-',
        openPOs: 0
    });

    inventoryManager.populateTable();
    const modal = bootstrap.Modal.getInstance(document.getElementById('addInventoryModal'));
    modal.hide();
}

function filterAvailableSkus() {
    const searchTerm = document.getElementById('skuSearch').value.toLowerCase();
    const category = document.getElementById('skuFilterCategory').value;
    const brand = document.getElementById('skuFilterBrand').value;

    if (!masterSKUs || !Array.isArray(masterSKUs)) {
        console.error('Master SKUs not properly initialized');
        return;
    }

    const filteredSkus = masterSKUs.filter(sku => {
        const matchesSearch = !searchTerm || 
                             sku.skuName.toLowerCase().includes(searchTerm) ||
                             sku.skuId.toLowerCase().includes(searchTerm);
        const matchesCategory = !category || sku.category.toLowerCase() === category.toLowerCase();
        const matchesBrand = !brand || sku.brand.toLowerCase() === brand.toLowerCase();

        return matchesSearch && matchesCategory && matchesBrand;
    });

    const skuSelect = document.getElementById('availableSkus');
    if (!skuSelect) {
        console.error('SKU select element not found');
        return;
    }

    skuSelect.innerHTML = '<option value="">Select a SKU</option>';

    if (filteredSkus.length === 0) {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'No SKUs found';
        option.disabled = true;
        skuSelect.appendChild(option);
    } else {
        filteredSkus.forEach(sku => {
            const option = document.createElement('option');
            option.value = sku.skuId;
            option.textContent = `${sku.skuName} (${sku.skuId})`;
            skuSelect.appendChild(option);
        });
    }
}

function addSelectedSku() {
    const selectedSkuId = document.getElementById('availableSkus').value;
    if (!selectedSkuId) {
        alert('Please select a SKU to add');
        return;
    }

    const selectedSku = masterSKUs.find(sku => sku.skuId === selectedSkuId);
    if (!selectedSku) {
        alert('Selected SKU not found');
        return;
    }

    const existingItemIndex = inventoryData.findIndex(i => i.skuId === selectedSkuId);
    if (existingItemIndex !== -1) {
        alert('This SKU is already in your inventory');
        return;
    }

    inventoryData.push({
        ...selectedSku,
        totalPurchased: 0,
        totalSold: 0,
        currentStock: 0,
        inventoryStatus: 'normal',
        demand: 'normal',
        lastPurchase: '-',
        openPOs: 0
    });

    inventoryManager.populateTable();
    const modal = bootstrap.Modal.getInstance(document.getElementById('addInventoryModal'));
    modal.hide();
}
    