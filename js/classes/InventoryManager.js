export class InventoryManager {
    constructor(data) {
        this.inventoryData = data;
        this.masterSKUs = [
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
                <td>${item.lastPurchase}</td>
                <td>${item.openPOs}</td>
                <td>
                    <button class="btn btn-sm btn-primary me-1" onclick="inventoryManager.editItem('${item.skuId}')">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="inventoryManager.deleteItem('${item.skuId}')">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            `;
            tbody.appendChild(row);
        });
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

    getReturnStatusClass(status) {
        return {
            'Pending': 'bg-warning',
            'Approved': 'bg-success',
            'Rejected': 'bg-danger'
        }[status] || 'bg-secondary';
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

    editItem(skuId) {
        const item = this.inventoryData.find(i => i.skuId === skuId);
        if (item) {
            document.getElementById('skuId').value = item.skuId;
            document.getElementById('skuName').value = item.skuName;
            document.getElementById('category').value = item.category.toLowerCase();
            document.getElementById('brand').value = item.brand.toLowerCase();
            document.getElementById('mrp').value = item.mrp;
            document.getElementById('offerPrice').value = item.offerPrice;
            document.getElementById('commission').value = item.commission;

            const compatibleSelect = document.getElementById('compatibleProducts');
            Array.from(compatibleSelect.options).forEach(option => {
                option.selected = item.compatibleProducts.includes(option.value);
            });

            const modal = new bootstrap.Modal(document.getElementById('addInventoryModal'));
            modal.show();
        }
    }

    deleteItem(skuId) {
        if (confirm('Are you sure you want to delete this item?')) {
            const index = this.inventoryData.findIndex(i => i.skuId === skuId);
            if (index !== -1) {
                this.inventoryData.splice(index, 1);
                this.populateTable();
            }
        }
    }

    filterAvailableSkus() {
        const searchTerm = document.getElementById('skuSearch').value.toLowerCase();
        const category = document.getElementById('skuFilterCategory').value;
        const brand = document.getElementById('skuFilterBrand').value;

        if (!this.masterSKUs || !Array.isArray(this.masterSKUs)) {
            console.error('Master SKUs not properly initialized');
            return;
        }

        const filteredSkus = this.masterSKUs.filter(sku => {
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

    addSelectedSku() {
        const selectedSkuId = document.getElementById('availableSkus').value;
        if (!selectedSkuId) {
            alert('Please select a SKU to add');
            return;
        }

        const selectedSku = this.masterSKUs.find(sku => sku.skuId === selectedSkuId);
        if (!selectedSku) {
            alert('Selected SKU not found');
            return;
        }

        const existingItemIndex = this.inventoryData.findIndex(i => i.skuId === selectedSkuId);
        if (existingItemIndex !== -1) {
            alert('This SKU is already in your inventory');
            return;
        }

        this.inventoryData.push({
            ...selectedSku,
            totalPurchased: 0,
            totalSold: 0,
            currentStock: 0,
            inventoryStatus: 'normal',
            demand: 'normal',
            lastPurchase: '-',
            openPOs: 0
        });

        this.populateTable();
        const modal = bootstrap.Modal.getInstance(document.getElementById('addInventoryModal'));
        modal.hide();
    }

    saveItem() {
        const formData = {
            skuId: document.getElementById('skuId').value,
            skuName: document.getElementById('skuName').value,
            category: document.getElementById('category').value,
            brand: document.getElementById('brand').value,
            mrp: parseFloat(document.getElementById('mrp').value),
            offerPrice: parseFloat(document.getElementById('offerPrice').value),
            commission: parseFloat(document.getElementById('commission').value),
            compatibleProducts: Array.from(document.getElementById('compatibleProducts').selectedOptions)
                .map(option => option.value)
        };

        if (!this.validateFormData(formData)) {
            alert('Please fill in all required fields');
            return;
        }

        const existingItemIndex = this.inventoryData.findIndex(i => i.skuId === formData.skuId);
        if (existingItemIndex !== -1) {
            this.inventoryData[existingItemIndex] = {
                ...this.inventoryData[existingItemIndex],
                ...formData
            };
        } else {
            this.inventoryData.push({
                ...formData,
                totalPurchased: 0,
                totalSold: 0,
                currentStock: 0,
                inventoryStatus: 'normal',
                demand: 'normal',
                lastPurchase: '-',
                openPOs: 0
            });
        }

        this.populateTable();
        const modal = bootstrap.Modal.getInstance(document.getElementById('addInventoryModal'));
        modal.hide();

        document.getElementById('inventoryForm').reset();
    }

    validateFormData(formData) {
        return formData.skuId && formData.skuName && formData.category && formData.brand &&
               !isNaN(formData.mrp) && !isNaN(formData.offerPrice) && !isNaN(formData.commission);
    }

    async initialize() {
        this.populateTable();
        // Load master SKUs
        const masterSkusModule = await import('../data/master-skus.js');
        this.masterSKUs = masterSkusModule.masterSKUs;

        // Set up filter event listeners
        document.getElementById('searchSku').addEventListener('input', () => this.applyFilters());
        document.getElementById('filterCategory').addEventListener('change', () => this.applyFilters());
        document.getElementById('filterBrand').addEventListener('change', () => this.applyFilters());
        document.getElementById('filterInventoryStatus').addEventListener('change', () => this.applyFilters());
        document.getElementById('filterDemand').addEventListener('change', () => this.applyFilters());

        // Set up SKU search event listeners
        document.getElementById('skuSearch').addEventListener('input', () => this.filterAvailableSkus());
        document.getElementById('skuFilterCategory').addEventListener('change', () => this.filterAvailableSkus());
        document.getElementById('skuFilterBrand').addEventListener('change', () => this.filterAvailableSkus());

        // Initialize available SKUs list
        this.filterAvailableSkus();
    }
}