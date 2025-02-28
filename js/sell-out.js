// Global variables to store current sell-out data
let currentSerialNumber = '';
let basePrice = 1000; // This should be fetched from your backend

// Function to handle sell out action and open sell-out modal
function sellOut(serialNumber) {
    currentSerialNumber = serialNumber;
    // Reset form
    document.getElementById('retailerSearch').value = '';
    document.getElementById('priceAdjustmentType').value = 'markup';
    document.getElementById('priceAdjustmentValue').value = '0';
    updateSellOutTotal();
    
    // Close serial numbers modal
    bootstrap.Modal.getInstance(document.getElementById('serialNumbersModal')).hide();
    // Open sell-out modal
    new bootstrap.Modal(document.getElementById('sellOutModal')).show();
}

// Function to handle retailer search
function searchRetailers(query) {
    // This should be replaced with actual API call
    const retailers = [
        { id: 1, name: 'Retailer 1', address: 'Address 1' },
        { id: 2, name: 'Retailer 2', address: 'Address 2' },
        { id: 3, name: 'Retailer 3', address: 'Address 3' }
    ];
    
    const results = retailers.filter(r => 
        r.name.toLowerCase().includes(query.toLowerCase()) ||
        r.address.toLowerCase().includes(query.toLowerCase())
    );
    
    const dropdown = document.getElementById('retailerSearchResults');
    dropdown.innerHTML = '';
    
    results.forEach(retailer => {
        const div = document.createElement('div');
        div.className = 'dropdown-item';
        div.innerHTML = `<strong>${retailer.name}</strong><br><small>${retailer.address}</small>`;
        div.onclick = () => selectRetailer(retailer);
        dropdown.appendChild(div);
    });
    
    if (results.length > 0) {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}

// Function to select a retailer
function selectRetailer(retailer) {
    document.getElementById('retailerSearch').value = retailer.name;
    document.getElementById('retailerSearchResults').style.display = 'none';
}

// Function to update total amount
function updateSellOutTotal() {
    const adjustmentType = document.getElementById('priceAdjustmentType').value;
    const adjustmentValue = parseFloat(document.getElementById('priceAdjustmentValue').value) || 0;
    
    let total = basePrice;
    
    if (adjustmentType === 'markup') {
        total *= (1 + adjustmentValue / 100);
    } else {
        total *= (1 - adjustmentValue / 100);
    }
    
    document.getElementById('sellOutTotalAmount').textContent = `₹${total.toFixed(2)}`;
}

// Function to submit sell-out
function submitSellOut() {
    const retailer = document.getElementById('retailerSearch').value;
    const adjustmentType = document.getElementById('priceAdjustmentType').value;
    const adjustmentValue = document.getElementById('priceAdjustmentValue').value;
    const total = document.getElementById('sellOutTotalAmount').textContent;
    
    if (!retailer) {
        alert('Please select a retailer');
        return;
    }
    
    // Here you would typically make an API call to process the sell-out
    console.log('Processing sell-out:', {
        serialNumber: currentSerialNumber,
        retailer,
        adjustmentType,
        adjustmentValue,
        total
    });
    
    // Close the modal
    bootstrap.Modal.getInstance(document.getElementById('sellOutModal')).hide();
    // Refresh the serial numbers modal
    openSerialNumbersModal();
}

// Add event listeners when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for retailer search input
    const retailerSearch = document.getElementById('retailerSearch');
    retailerSearch.addEventListener('input', (e) => {
        if (e.target.value.length >= 2) {
            searchRetailers(e.target.value);
        } else {
            document.getElementById('retailerSearchResults').style.display = 'none';
        }
    });
    
    // Add event listeners for price calculation
    document.getElementById('priceAdjustmentType').addEventListener('change', updateSellOutTotal);
    document.getElementById('priceAdjustmentValue').addEventListener('input', updateSellOutTotal);
});