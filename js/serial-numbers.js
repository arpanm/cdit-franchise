// Function to open serial numbers modal
function openSerialNumbersModal(skuId, purchasedCount) {
    // Sample data structure for serial numbers (replace with actual API call)
    const serialNumbers = [
        { number: 'SN001', status: 'sold', purchaseDate: '2023-09-15', soldDate: '2023-10-01' },
        { number: 'SN002', status: 'returned', purchaseDate: '2023-09-20', returnDate: '2023-10-05' },
        { number: 'SN003', status: 'in_stock', purchaseDate: '2023-09-25' },
        { number: 'SN004', status: 'sold', purchaseDate: '2023-09-26', soldDate: '2023-10-10' },
        { number: 'SN005', status: 'in_stock', purchaseDate: '2023-09-27' },
        { number: 'SN006', status: 'returned', purchaseDate: '2023-09-28', returnDate: '2023-10-15' },
        { number: 'SN007', status: 'in_stock', purchaseDate: '2023-09-29' },
        { number: 'SN008', status: 'sold', purchaseDate: '2023-09-30', soldDate: '2023-10-20' },
        { number: 'SN009', status: 'in_stock', purchaseDate: '2023-10-01' },
        { number: 'SN010', status: 'returned', purchaseDate: '2023-10-02', returnDate: '2023-10-25' },
        { number: 'SN011', status: 'in_stock', purchaseDate: '2023-10-03' },
        { number: 'SN012', status: 'sold', purchaseDate: '2023-10-04', soldDate: '2023-10-30' },
        { number: 'SN013', status: 'in_stock', purchaseDate: '2023-10-05' }
    ];

    const modalBody = document.querySelector('#serialNumbersModal .modal-body');
    let content = '<div class="table-responsive"><table class="table"><thead><tr><th>Serial Number</th><th>Status</th><th>Purchase Date</th><th>Sell/Return Date</th><th>Actions</th></tr></thead><tbody>';

    serialNumbers.forEach(sn => {
        const actionDate = sn.status === 'sold' ? sn.soldDate : (sn.status === 'returned' ? sn.returnDate : '-');
        const actions = sn.status === 'in_stock' ? 
            `<button class="btn btn-sm btn-primary me-2" onclick="sellOut('${sn.number}')">Sell Out</button>
             <button class="btn btn-sm btn-warning" onclick="initiateReturnForSerial('${sn.number}')">Return</button>` : '-';

        content += `
            <tr>
                <td>${sn.number}</td>
                <td><span class="badge bg-${sn.status === 'sold' ? 'success' : (sn.status === 'returned' ? 'danger' : 'info')}">${sn.status.replace('_', ' ')}</span></td>
                <td>${sn.purchaseDate || '-'}</td>
                <td>${actionDate}</td>
                <td>${actions}</td>
            </tr>`;
    });

    content += '</tbody></table></div>';
    modalBody.innerHTML = content;

    // Add export button to modal footer
    const modalFooter = document.querySelector('#serialNumbersModal .modal-footer');
    if (!document.getElementById('exportExcelBtn')) {
        const exportBtn = document.createElement('button');
        exportBtn.id = 'exportExcelBtn';
        exportBtn.className = 'btn btn-success';
        exportBtn.innerHTML = '<i class="bi bi-file-earmark-excel me-1"></i>Export to Excel';
        exportBtn.onclick = () => exportToExcel(serialNumbers);
        modalFooter.insertBefore(exportBtn, modalFooter.firstChild);
    }

    new bootstrap.Modal(document.getElementById('serialNumbersModal')).show();
}

function exportToExcel(data) {
    const worksheet = XLSX.utils.json_to_sheet(data.map(item => ({
        'Serial Number': item.number,
        'Status': item.status,
        'Purchase Date': item.purchaseDate,
        'Action Date': item.status === 'sold' ? item.soldDate : (item.status === 'returned' ? item.returnDate : '-')
    })));
    
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Serial Numbers');
    XLSX.writeFile(workbook, 'serial_numbers.xlsx');
}

// Function to handle sell out action
function sellOut(serialNumber) {
    // Implement sell out logic
    console.log('Selling out serial number:', serialNumber);
}

// Function to initiate return for a specific serial number
function initiateReturnForSerial(serialNumber) {
    // Store the serial number in a data attribute
    document.getElementById('returnForm').dataset.serialNumber = serialNumber;
    // Close serial numbers modal
    bootstrap.Modal.getInstance(document.getElementById('serialNumbersModal')).hide();
    // Open return modal
    new bootstrap.Modal(document.getElementById('returnModal')).show();
}

// Modify the existing initiateReturn function to handle serial number
const originalInitiateReturn = window.initiateReturn;
window.initiateReturn = function() {
    const serialNumber = document.getElementById('returnForm').dataset.serialNumber;
    // Add serial number to the return logic
    console.log('Initiating return for serial number:', serialNumber);
    if (originalInitiateReturn) {
        originalInitiateReturn();
    }
};