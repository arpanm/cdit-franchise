// Sample customer products data (replace with actual API call)
const customerProducts = [
    { id: 1, name: 'Samsung Smart TV', category: 'electronics', brand: 'Samsung', model: 'QN55Q60B', serialNumber: 'STV123456' },
    { id: 2, name: 'LG Refrigerator', category: 'appliances', brand: 'LG', model: 'LFXS26973S', serialNumber: 'LRF789012' },
    { id: 3, name: 'MacBook Pro', category: 'computers', brand: 'Apple', model: 'A2338', serialNumber: 'MBP345678' }
];

// Populate product select dropdown
function populateProductSelect() {
    const productSelect = document.getElementById('productSelect');
    const defaultOption = productSelect.querySelector('option[value=""]');
    const newProductOption = productSelect.querySelector('option[value="new"]');
    
    // Clear existing options except default and new product
    productSelect.innerHTML = '';
    productSelect.appendChild(defaultOption);
    
    // Add customer products
    customerProducts.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = `${product.brand} ${product.model} (${product.serialNumber})`;
        productSelect.appendChild(option);
    });
    
    // Add new product option at the end
    productSelect.appendChild(newProductOption);
}

// Handle product selection change
function handleProductSelection() {
    const productSelect = document.getElementById('productSelect');
    const newProductForm = document.getElementById('newProductForm');
    
    productSelect.addEventListener('change', (e) => {
        if (e.target.value === 'new') {
            newProductForm.classList.remove('d-none');
            // Reset form fields
            document.getElementById('productCategory').value = '';
            document.getElementById('productBrand').value = '';
            document.getElementById('productModel').value = '';
            document.getElementById('serialNumber').value = '';
            document.getElementById('purchaseDate').value = '';
            document.getElementById('purchaseInvoice').value = '';
        } else {
            newProductForm.classList.add('d-none');
            if (e.target.value) {
                // Populate form with selected product data if needed
                const selectedProduct = customerProducts.find(p => p.id === parseInt(e.target.value));
                if (selectedProduct) {
                    // Handle selected product
                    console.log('Selected product:', selectedProduct);
                }
            }
        }
    });
}

// Initialize product management
document.addEventListener('DOMContentLoaded', () => {
    populateProductSelect();
    handleProductSelection();
});