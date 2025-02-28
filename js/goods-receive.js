// Goods Receive Management

function openGoodsReceiveModal(skuId, type) {
    // Reset form
    document.getElementById('goodsReceiveForm').reset();
    
    // Set SKU ID and type (PO/Return)
    document.getElementById('receiveSkuId').value = skuId;
    document.getElementById('receiveType').value = type;
    
    // Show/hide relevant fields based on type
    const poFields = document.getElementById('poFields');
    const returnFields = document.getElementById('returnFields');
    
    if (type === 'PO') {
        poFields.style.display = 'block';
        returnFields.style.display = 'none';
        // Load PO numbers for this SKU
        loadPendingPOs(skuId);
    } else {
        poFields.style.display = 'none';
        returnFields.style.display = 'block';
        // Load return requests for this SKU
        loadPendingReturns(skuId);
    }
    
    // Show modal with proper focus management
    const modalElement = document.getElementById('goodsReceiveModal');
    const modal = new bootstrap.Modal(modalElement, {
        backdrop: true,
        keyboard: true,
        focus: true
    });
    modal.show();
    
    // Focus management
    const firstFocusableElement = modalElement.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (firstFocusableElement) {
        firstFocusableElement.focus();
    }
    
    // Clean up when modal is hidden
    modalElement.addEventListener('hidden.bs.modal', () => {
        document.querySelectorAll('[inert]').forEach(element => {
            element.inert = false;
        });
    });
}

function loadPendingPOs(skuId) {
    // TODO: Replace with actual API call
    const dummyPOs = [
        { id: 'PO001', date: '2023-10-01' },
        { id: 'PO002', date: '2023-10-05' }
    ];
    
    const poSelect = document.getElementById('poNumber');
    poSelect.innerHTML = '<option value="">Select PO</option>';
    
    dummyPOs.forEach(po => {
        poSelect.innerHTML += `<option value="${po.id}">${po.id} (${po.date})</option>`;
    });
}

function loadPendingReturns(skuId) {
    // TODO: Replace with actual API call
    const dummyReturns = [
        { id: 'RET001', date: '2023-10-02', franchise: 'Franchise A' },
        { id: 'RET002', date: '2023-10-06', franchise: 'Franchise B' }
    ];
    
    const returnSelect = document.getElementById('returnNumber');
    returnSelect.innerHTML = '<option value="">Select Return Request</option>';
    
    dummyReturns.forEach(ret => {
        returnSelect.innerHTML += `<option value="${ret.id}">${ret.id} - ${ret.franchise} (${ret.date})</option>`;
    });
}

function submitGoodsReceive() {
    const formData = {
        skuId: document.getElementById('receiveSkuId').value,
        type: document.getElementById('receiveType').value,
        quantity: document.getElementById('receiveQuantity').value,
        qualityStatus: document.getElementById('qualityStatus').value,
        remarks: document.getElementById('receiveRemarks').value,
        referenceNumber: document.getElementById(document.getElementById('receiveType').value === 'PO' ? 'poNumber' : 'returnNumber').value
    };
    
    // TODO: Replace with actual API call
    console.log('Submitting goods receive:', formData);
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('goodsReceiveModal'));
    modal.hide();
    
    // Show success message
    alert('Goods received successfully!');
    
    // Refresh inventory table
    // inventoryManager.populateTable();
}


function openAdjustModal(skuId) {
    const item = inventoryData.find(i => i.skuId === skuId);
    document.getElementById('adjustItemSelect').textContent = `${item.skuName} (${item.skuId}) - ₹${item.offerPrice}`;
    document.getElementById('adjustQuantity').value = '';
    document.getElementById('adjustReason').value = '';
    document.getElementById('otherReason').value = '';
    document.getElementById('otherReasonContainer').style.display = 'none';
    
    const modal = new bootstrap.Modal(document.getElementById('adjustInventoryModal'));
    modal.show();

    // Add event listener for reason change
    document.getElementById('adjustReason').addEventListener('change', (e) => {
        const otherReasonContainer = document.getElementById('otherReasonContainer');
        otherReasonContainer.style.display = e.target.value === 'other' ? 'block' : 'none';
    });
}

// Submit inventory adjustment
function submitInventoryAdjustment() {
    const quantity = parseInt(document.getElementById('adjustQuantity').value);
    const reason = document.getElementById('adjustReason').value;
    const otherReason = document.getElementById('otherReason').value;
    
    if (!quantity || !reason) {
        alert('Please fill in all required fields');
        return;
    }

    if (reason === 'other' && !otherReason) {
        alert('Please specify the other reason');
        return;
    }

    const finalReason = reason === 'other' ? otherReason : reason;
    // Add your inventory adjustment logic here
    
    alert('Inventory adjustment submitted successfully!');
    bootstrap.Modal.getInstance(document.getElementById('adjustInventoryModal')).hide();
}


function showButtons() {
    const data = inventoryData;
    data.forEach(item => {
        const actionButtonSection = document.getElementById(`actionButtons-${item.skuId}`);
        if (!actionButtonSection) return;
        if (item.openPOs > 0) {
            const receiveButton = document.createElement('span');
            receiveButton.innerHTML = `
                <button class="btn btn-sm btn-success me-1" onclick="openGoodsReceiveModal('${item.skuId}', 'PO')" title="Receive Inventory">
                    <i class="bi bi-plus"></i>
                </button>
                <button class="btn btn-sm btn-danger me-1" onclick="openAdjustModal('${item.skuId}')" title="Adjust Inventory">
                    <i class="bi bi-wrench-adjustable-circle"></i>
                </button>
            `;
            actionButtonSection.appendChild(receiveButton);
        } else {
            const receiveButton = document.createElement('span');
            receiveButton.innerHTML = `
                <button class="btn btn-sm btn-danger me-1" onclick="openAdjustModal('${item.skuId}')" title="Adjust Inventory">
                    <i class="bi bi-wrench-adjustable-circle"></i>
                </button>
            `;
            actionButtonSection.appendChild(receiveButton);
        }
        const mobActionButtonSection = document.getElementById(`mobActionButtons-${item.skuId}`);
        if (!mobActionButtonSection) return;
        if (item.openPOs > 0) {
            const receiveButton = document.createElement('span');
            receiveButton.innerHTML = `
                <button class="btn btn-sm btn-success me-1" onclick="openGoodsReceiveModal('${item.skuId}', 'PO')" title="Receive Inventory">
                    <i class="bi bi-plus">Receive Inventory</i>
                </button>
                <button class="btn btn-sm btn-danger me-1" onclick="openAdjustModal('${item.skuId}')" title="Adjust Inventory">
                    <i class="bi bi-wrench-adjustable-circle">Adjust Inventory</i>
                </button>
            `;
            mobActionButtonSection.appendChild(receiveButton);
        } else {
            const receiveButton = document.createElement('span');
            receiveButton.innerHTML = `
                <button class="btn btn-sm btn-danger me-1" onclick="openAdjustModal('${item.skuId}')" title="Adjust Inventory">
                    <i class="bi bi-wrench-adjustable-circle">Adjust Inventory</i>
                </button>
            `;
            mobActionButtonSection.appendChild(receiveButton);
        }
    });
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = document.querySelectorAll('[title]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}