// Mock Data
let brands = [
    { id: 1, name: 'Samsung', description: 'Leading electronics manufacturer', status: 'active' },
    { id: 2, name: 'LG', description: 'Global electronics and appliances brand', status: 'active' },
    { id: 3, name: 'Whirlpool', description: 'Home appliances specialist', status: 'active' },
    { id: 4, name: 'Sony', description: 'Premium electronics brand', status: 'active' },
    { id: 5, name: 'Panasonic', description: 'Innovative electronics solutions', status: 'active' },
    { id: 6, name: 'Haier', description: 'Smart home appliances manufacturer', status: 'active' },
    { id: 7, name: 'Bosch', description: 'German engineering excellence', status: 'active' },
    { id: 8, name: 'Philips', description: 'Consumer electronics and appliances', status: 'active' }
];

let categories = [
    { id: 1, name: 'Electronics', description: 'Electronic appliances and devices', status: 'active' },
    { id: 2, name: 'Home Appliances', master: 1, description: 'Household appliances', status: 'active' },
    { id: 3, name: 'Kitchen Appliances', master: 1, description: 'Kitchen specific appliances', status: 'active' },
    { id: 4, name: 'Spare Parts', master: 1, description: 'Replacement parts for appliances and devices', status: 'active' },
    { id: 5, name: 'Accessories', master: 1, description: 'Additional components and enhancements', status: 'active' },
    { id: 6, name: 'Power Components', master: 4, description: 'Power supply and electrical spare parts', status: 'active' },
    { id: 7, name: 'Display Components', master: 4, description: 'Screens and display-related spare parts', status: 'active' },
    { id: 8, name: 'Mechanical Parts', master: 4, description: 'Moving and mechanical replacement components', status: 'active' },
    { id: 9, name: 'Connectivity Accessories', master: 5, description: 'Cables, adapters, and connection components', status: 'active' },
    { id: 10, name: 'Maintenance Supplies', master: 4, description: 'Cleaning and maintenance accessories', status: 'active' }
];

let products = [
    { id: 1, name: 'Smart TV 55"', category: 'Electronics', brand: 'Samsung', price: 799.99, status: 'active' },
    { id: 2, name: 'French Door Refrigerator', category: 'Home Appliances', brand: 'LG', price: 1299.99, status: 'active' },
    { id: 3, name: 'Convection Microwave Oven', category: 'Kitchen Appliances', brand: 'Samsung', price: 249.99, status: 'active' },
    { id: 4, name: 'OLED TV 65"', category: 'Electronics', brand: 'LG', price: 1999.99, status: 'active' },
    { id: 5, name: 'Top Load Washing Machine', category: 'Home Appliances', brand: 'Whirlpool', price: 599.99, status: 'active' },
    { id: 6, name: 'Side by Side Refrigerator', category: 'Home Appliances', brand: 'Samsung', price: 1499.99, status: 'active' },
    { id: 7, name: 'Smart Dishwasher', category: 'Kitchen Appliances', brand: 'Bosch', price: 899.99, status: 'active' },
    { id: 8, name: 'LED TV 43"', category: 'Electronics', brand: 'Sony', price: 499.99, status: 'active' },
    { id: 9, name: 'Front Load Washer', category: 'Home Appliances', brand: 'LG', price: 799.99, status: 'active' },
    { id: 10, name: 'Electric Range', category: 'Kitchen Appliances', brand: 'Whirlpool', price: 699.99, status: 'active' },
    { id: 11, name: 'Smart Refrigerator', category: 'Home Appliances', brand: 'Samsung', price: 2499.99, status: 'active' },
    { id: 12, name: 'Countertop Microwave', category: 'Kitchen Appliances', brand: 'Panasonic', price: 149.99, status: 'active' },
    { id: 13, name: 'QLED TV 75"', category: 'Electronics', brand: 'Samsung', price: 2799.99, status: 'active' },
    { id: 14, name: 'Wine Cooler', category: 'Home Appliances', brand: 'Haier', price: 399.99, status: 'active' },
    { id: 15, name: 'Built-in Oven', category: 'Kitchen Appliances', brand: 'Bosch', price: 1099.99, status: 'active' },
    { id: 16, name: 'Sound Bar', category: 'Electronics', brand: 'Sony', price: 299.99, status: 'active' },
    { id: 17, name: 'Air Purifier', category: 'Home Appliances', brand: 'Philips', price: 249.99, status: 'active' },
    { id: 18, name: 'Induction Cooktop', category: 'Kitchen Appliances', brand: 'LG', price: 599.99, status: 'active' },
    { id: 19, name: 'Portable AC', category: 'Home Appliances', brand: 'Haier', price: 449.99, status: 'active' },
    { id: 20, name: 'Food Processor', category: 'Kitchen Appliances', brand: 'Philips', price: 179.99, status: 'active' }
];

const warranties = [
    { id: 1, type: 'Standard', duration: 12, category: 'Electronics', brand: 'Samsung', description: 'Basic warranty for Samsung electronics', price:200.00, status: 'active' },
    { id: 2, type: 'Extended', duration: 24, category: 'Home Appliances', brand: 'LG', description: 'Extended coverage for LG home appliances', price:150.00, status: 'active' },
    { id: 3, type: 'Premium', duration: 36, category: 'Kitchen Appliances', brand: 'Whirlpool', description: 'Premium warranty for Whirlpool kitchen appliances', price:210.00, status: 'active' },
    { id: 4, type: 'Basic', duration: 12, category: 'Electronics', brand: 'Sony', description: 'Basic warranty for Sony electronics', price:180.00, status: 'active' },
    { id: 5, type: 'Extended Plus', duration: 30, category: 'Home Appliances', brand: 'Bosch', description: 'Extended plus coverage for Bosch appliances', price:220.00, status: 'active' },
    { id: 6, type: 'Premium Plus', duration: 48, category: 'Kitchen Appliances', brand: 'Panasonic', description: 'Premium plus warranty for Panasonic kitchen appliances', price:400.00, status: 'active' },
    { id: 7, type: 'Standard', duration: 18, category: 'Electronics', brand: 'Philips', description: 'Standard warranty for Philips electronics', price:290.00, status: 'active' },
    { id: 8, type: 'Basic Plus', duration: 15, category: 'Home Appliances', brand: 'Haier', description: 'Basic plus coverage for Haier appliances', price:200.00, status: 'active' },
    { id: 9, type: 'Ultimate', duration: 60, category: 'Kitchen Appliances', brand: 'Samsung', description: 'Ultimate warranty for Samsung kitchen appliances', price:500.00, status: 'active' },
    { id: 10, type: 'Premium', duration: 36, category: 'Electronics', brand: 'LG', description: 'Premium warranty for LG electronics', price:300.00, status: 'active' }
];

// Initialize tables when document is ready
document.addEventListener('DOMContentLoaded', () => {
    loadTableData('brands', brands);
    loadTableData('categories', categories);
    loadTableData('products', products);
    loadTableData('warranty', warranties);
    populateCategoryDropdown('productCategory');
    populateCategoryDropdown('warrantyCategory');
    populateMasterCategoryDropdown();
    populateBrandDropdown('productBrand');
    populateBrandDropdown('warrantyBrand');

    // Add modal hidden event listeners
    ['brands', 'categories', 'products', 'warranty'].forEach(type => {
        const modalElement = document.getElementById(`${type}Modal`);
        if (modalElement) {
            modalElement.addEventListener('hidden.bs.modal', () => {
                formReset(`${type}Form`);
            });
        }
    });
});

// Load table data
function loadTableData(type, data) {
    const tbody = document.querySelector(`#${type}Table tbody`);
    tbody.innerHTML = '';

    data.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = generateTableRow(type, item);
        tbody.appendChild(tr);
    });
}

// Populate brand dropdown in product form
function populateBrandDropdown(name) {
    const select = document.getElementById(name);
    select.innerHTML = '<option value="">Select Brand</option>';
    brands.forEach(brand => {
        if (brand.status === 'active') {
            select.innerHTML += `<option value="${brand.id}">${brand.name}</option>`;
        }
    });
}

// Generate table row HTML
function generateTableRow(type, item) {
    switch(type) {
        case 'brands':
            return `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.description}</td>
                <td>${item.status}</td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="editItem('${type}', ${item.id})"><i class="bi bi-pencil"></i></button>
                    <button class="btn btn-sm btn-danger" onclick="deleteItem('${type}', ${item.id})"><i class="bi bi-trash"></i></button>
                </td>
            `;
        case 'categories':
            return `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.master || 'NA'}</td>
                <td>${item.description}</td>
                <td>${item.status}</td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="editItem('${type}', ${item.id})"><i class="bi bi-pencil"></i></button>
                    <button class="btn btn-sm btn-danger" onclick="deleteItem('${type}', ${item.id})"><i class="bi bi-trash"></i></button>
                </td>
            `;
        case 'products':
            return `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.category}</td>
                <td>${item.brand}</td>
                <td>INR ${item.price}</td>
                <td>${item.status}</td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="editItem('${type}', ${item.id})"><i class="bi bi-pencil"></i></button>
                    <button class="btn btn-sm btn-danger" onclick="deleteItem('${type}', ${item.id})"><i class="bi bi-trash"></i></button>
                </td>
            `;
        case 'warranty':
            return `
                <td>${item.id}</td>
                <td>${item.type}</td>
                <td>${item.duration}</td>
                <td>${item.category}</td>
                <td>${item.brand}</td>
                <td>${item.description}</td>
                <td>INR ${item.price}</td>
                <td>${item.status}</td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="editItem('${type}', ${item.id})"><i class="bi bi-pencil"></i></button>
                    <button class="btn btn-sm btn-danger" onclick="deleteItem('${type}', ${item.id})"><i class="bi bi-trash"></i></button>
                </td>
            `;
    }
}

// Edit item
function editItem(type, id) {
    formReset(`${type}Form`); // Reset form before populating with edit data
    let item;
    switch(type) {
        case 'brands':
            item = brands.find(b => b.id === id);
            document.getElementById('brandId').value = item.id;
            document.getElementById('brandName').value = item.name;
            document.getElementById('brandDescription').value = item.description;
            document.getElementById('brandStatus').value = item.status;
            break;
        case 'categories':
            item = categories.find(c => c.id === id);
            document.getElementById('categoryId').value = item.id;
            document.getElementById('categoryName').value = item.name;
            document.getElementById('categoryMaster').value = item.master || '';
            document.getElementById('categoryDescription').value = item.description;
            document.getElementById('categoryStatus').value = item.status;
            break;
        case 'products':
            item = products.find(p => p.id === id);
            document.getElementById('productId').value = item.id;
            document.getElementById('productName').value = item.name;
            document.getElementById('productCategory').value = item.category;
            document.getElementById('productBrand').value = item.brand;
            document.getElementById('productPrice').value = item.price;
            document.getElementById('productStatus').value = item.status;
            break;
        case 'warranty':
            item = warranties.find(w => w.id === id);
            document.getElementById('warrantyId').value = item.id;
            document.getElementById('warrantyType').value = item.type;
            document.getElementById('warrantyDuration').value = item.duration;
            document.getElementById('warrantyCategory').value = item.category;
            document.getElementById('warrantyBrand').value = item.brand;
            document.getElementById('warrantyDescription').value = item.description;
            document.getElementById('warrantyPrice').value = item.price;
            document.getElementById('warrantyStatus').value = item.status;
            break;
    }
    const modalName = `${type}Modal`;
    const modalElement = document.getElementById(modalName);
    if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    } else {
        console.error(`Modal element ${modalName} not found`);
    }
}

// Save brand
function saveBrand() {
    const id = document.getElementById('brandId').value;
    const brand = {
        id: id ? parseInt(id) : brands.length + 1,
        name: document.getElementById('brandName').value,
        description: document.getElementById('brandDescription').value,
        status: document.getElementById('brandStatus').value
    };

    if (id) {
        const index = brands.findIndex(b => b.id === parseInt(id));
        brands[index] = brand;
    } else {
        brands.push(brand);
    }

    loadTableData('brands', brands);
    populateBrandDropdown('productBrand');
    populateBrandDropdown('warrantyBrand');
    formReset('brandsForm');
    bootstrap.Modal.getInstance(document.getElementById('brandsModal')).hide();
}

// Delete item
function deleteItem(type, id) {
    if (!confirm('Are you sure you want to delete this item?')) return;

    switch(type) {
        case 'brands':
            brands = brands.filter(b => b.id !== id);
            loadTableData('brands', brands);
            populateBrandDropdown('productBrand');
            populateBrandDropdown('warrantyBrand');
            break;
        case 'categories':
            categories = categories.filter(c => c.id !== id);
            loadTableData('categories', categories);
            populateCategoryDropdown('productCategory');
            populateCategoryDropdown('warrantyCategory');
            break;
        case 'products':
            products = products.filter(p => p.id !== id);
            loadTableData('products', products);
            break;
        case 'warranty':
            warranties = warranties.filter(w => w.id !== id);
            loadTableData('warranty', warranties);
            break;
    }
}

// Populate category dropdown in product form
function populateCategoryDropdown(name) {
    const select = document.getElementById(name);
    select.innerHTML = '<option value="">Select Category</option>';
    categories.forEach(category => {
        if (category.status === 'active') {
            select.innerHTML += `<option value="${category.id}">${category.name}</option>`;
        }
    });
}

// Edit item
// Populate master category dropdown
function populateMasterCategoryDropdown() {
    const select = document.getElementById('categoryMaster');
    select.innerHTML = '<option value="">None (Top Level Category)</option>';
    categories.forEach(category => {
        if (category.status === 'active') {
            select.innerHTML += `<option value="${category.id}">${category.name}</option>`;
        }
    });
}

function editItem(type, id) {
    formReset(`${type}Form`); // Reset form before populating with edit data
    let item;
    switch(type) {
        case 'categories':
            item = categories.find(c => c.id === id);
            document.getElementById('categoryId').value = item.id;
            document.getElementById('categoryName').value = item.name;
            document.getElementById('categoryMaster').value = item.master || '';
            document.getElementById('categoryDescription').value = item.description;
            document.getElementById('categoryStatus').value = item.status;
            break;
        case 'brands':
            item = brands.find(b => b.id === id);
            document.getElementById('brandId').value = item.id;
            document.getElementById('brandName').value = item.name;
            document.getElementById('brandDescription').value = item.description;
            document.getElementById('brandStatus').value = item.status;
            break;
        case 'products':
            item = products.find(p => p.id === id);
            document.getElementById('productId').value = item.id;
            document.getElementById('productName').value = item.name;
            document.getElementById('productCategory').value = item.category;
            document.getElementById('productBrand').value = item.brand;
            document.getElementById('productPrice').value = item.price;
            document.getElementById('productStatus').value = item.status;
            break;
        case 'warranty':
            item = warranties.find(w => w.id === id);
            document.getElementById('warrantyId').value = item.id;
            document.getElementById('warrantyType').value = item.type;
            document.getElementById('warrantyDuration').value = item.duration;
            document.getElementById('warrantyCategory').value = item.category;
            document.getElementById('warrantyBrand').value = item.brand;
            document.getElementById('warrantyDescription').value = item.description;
            document.getElementById('warrantyPrice').value = item.price;
            document.getElementById('warrantyStatus').value = item.status;
            break;
    }
    const modalName = `${type}Modal`;
    const modalElement = document.getElementById(modalName);
    if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    } else {
        console.error(`Modal element ${modalName} not found`);
    }
}

// Save functions
function saveCategory() {
    const id = document.getElementById('categoryId').value;
    const category = {
        id: id ? parseInt(id) : categories.length + 1,
        name: document.getElementById('categoryName').value,
        master: document.getElementById('categoryMaster').value || null,
        description: document.getElementById('categoryDescription').value,
        status: document.getElementById('categoryStatus').value
    };

    if (id) {
        const index = categories.findIndex(c => c.id === parseInt(id));
        categories[index] = category;
    } else {
        categories.push(category);
    }

    loadTableData('categories', categories);
    populateCategoryDropdown('productCategory');
    populateCategoryDropdown('warrantyCategory');
    formReset('categoriesForm');
    bootstrap.Modal.getInstance(document.getElementById('categoriesModal')).hide();
}

function saveProduct() {
    const id = document.getElementById('productId').value;
    const product = {
        id: id ? parseInt(id) : products.length + 1,
        name: document.getElementById('productName').value,
        category: document.getElementById('productCategory').value,
        price: parseFloat(document.getElementById('productPrice').value),
        status: document.getElementById('productStatus').value
    };

    if (id) {
        const index = products.findIndex(p => p.id === parseInt(id));
        products[index] = product;
    } else {
        products.push(product);
    }

    loadTableData('products', products);
    formReset('productsForm');
    bootstrap.Modal.getInstance(document.getElementById('productsModal')).hide();
}

function saveWarranty() {
    const id = document.getElementById('warrantyId').value;
    const warranty = {
        id: id ? parseInt(id) : warranties.length + 1,
        type: document.getElementById('warrantyType').value,
        duration: parseInt(document.getElementById('warrantyDuration').value),
        category: parseInt(document.getElementById('warrantyCategory').value),
        brand: parseInt(document.getElementById('warrantyBrand').value),
        description: document.getElementById('warrantyDescription').value,
        price: parseFloat(document.getElementById('warrantyPrice').value),
        status: document.getElementById('warrantyStatus').value
    };

    if (id) {
        const index = warranties.findIndex(w => w.id === parseInt(id));
        warranties[index] = warranty;
    } else {
        warranties.push(warranty);
    }

    loadTableData('warranty', warranties);
    formReset('warrantyForm');
    bootstrap.Modal.getInstance(document.getElementById('warrantyModal')).hide();
}

// Reset form
function formReset(formId) {
    document.getElementById(formId).reset();
}

// Add new functions to handle opening add modals
function openAddModal(type) {
    formReset(`${type}Form`);
    document.getElementById(`${type}Id`).value = '';
    const modalElement = document.getElementById(`${type}Modal`);
    if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    }
}

// Add event listeners for modal hidden events
document.addEventListener('DOMContentLoaded', () => {
    loadTableData('categories', categories);
    loadTableData('products', products);
    loadTableData('warranty', warranties);
    populateCategoryDropdown('productCategory');
    populateCategoryDropdown('warrantyCategory');
    populateMasterCategoryDropdown();

    // Add modal hidden event listeners
    ['categories', 'products', 'warranty'].forEach(type => {
        const modalElement = document.getElementById(`${type}Modal`);
        if (modalElement) {
            modalElement.addEventListener('hidden.bs.modal', () => {
                formReset(`${type}Form`);
            });
        }
    });
});

// Delete item
function deleteItem(type, id) {
    if (!confirm('Are you sure you want to delete this item?')) return;

    switch(type) {
        case 'categories':
            categories = categories.filter(c => c.id !== id);
            loadTableData('categories', categories);
            populateCategoryDropdown('productCategory');
            populateCategoryDropdown('warrantyCategory');
            break;
        case 'products':
            products = products.filter(p => p.id !== id);
            loadTableData('products', products);
            break;
        case 'warranty':
            warranties = warranties.filter(w => w.id !== id);
            loadTableData('warranty', warranties);
            break;
    }
}

// Excel Export
function exportToExcel(type) {
    let data;
    switch(type) {
        case 'categories':
            data = categories;
            break;
        case 'products':
            data = products;
            break;
        case 'warranty':
            data = warranties;
            break;
    }

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, type);
    XLSX.writeFile(workbook, `${type}.xlsx`);
}

// Excel Import
function importFromExcel(type, input) {
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        switch(type) {
            case 'categories':
                categories = jsonData;
                loadTableData('categories', categories);
                populateCategoryDropdown('productCategory');
                populateCategoryDropdown('warrantyCategory');
                break;
            case 'products':
                products = jsonData;
                loadTableData('products', products);
                break;
            case 'warranty':
                warranties = jsonData;
                loadTableData('warranty', warranties);
                break;
        }
    };

    reader.readAsArrayBuffer(file);
    input.value = '';
}