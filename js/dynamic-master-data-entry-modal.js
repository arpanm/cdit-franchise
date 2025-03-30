// Modal HTML for adding entries to dynamic master data types
const masterDataEntryModalHtml = `
    <div class="modal fade" id="masterDataEntryModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add New Entry</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form id="masterDataEntryForm">
                        <div id="dynamicFields"></div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="saveDataEntry()">Save</button>
                </div>
            </div>
        </div>
    </div>
`;

// Add modal to document when loaded
document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('beforeend', masterDataEntryModalHtml);
});

// Open modal for adding new data entry
function openAddDataModal(typeName) {
    const masterDataType = dynamicMasterDataTypes.find(type => type.name === typeName);
    if (!masterDataType) return;

    const fieldsContainer = document.getElementById('dynamicFields');
    fieldsContainer.innerHTML = '';

    // Create form fields based on master data type definition
    masterDataType.fields.forEach(field => {
        const fieldHtml = `
            <div class="mb-3">
                <label class="form-label">${field.name}</label>
                ${generateInputField(field)}
                <small class="text-muted">${field.description || ''}</small>
            </div>
        `;
        fieldsContainer.insertAdjacentHTML('beforeend', fieldHtml);
    });

    // Store current type name for save operation
    document.getElementById('masterDataEntryForm').dataset.typeName = typeName;

    const modal = new bootstrap.Modal(document.getElementById('masterDataEntryModal'));
    modal.show();
}

// Generate appropriate input field based on type
function generateInputField(field) {
    switch(field.type) {
        case 'boolean':
            return `
                <select class="form-select" name="${field.name}">
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            `;
        case 'number':
            return `<input type="number" class="form-control" name="${field.name}">`;
        case 'date':
            return `<input type="date" class="form-control" name="${field.name}">`;
        case 'object':
        case 'array':
            return `<textarea class="form-control" name="${field.name}" placeholder="Enter JSON data"></textarea>`;
        default: // string
            return `<input type="text" class="form-control" name="${field.name}">`;
    }
}

// Save new data entry
function saveDataEntry() {
    const form = document.getElementById('masterDataEntryForm');
    const typeName = form.dataset.typeName;
    const masterDataType = dynamicMasterDataTypes.find(type => type.name === typeName);
    if (!masterDataType) return;

    const formData = new FormData(form);
    const entry = {
        id: masterDataType.data.length + 1
    };

    // Convert form data to appropriate types
    masterDataType.fields.forEach(field => {
        const value = formData.get(field.name);
        switch(field.type) {
            case 'boolean':
                entry[field.name] = value === 'true';
                break;
            case 'number':
                entry[field.name] = parseFloat(value);
                break;
            case 'object':
            case 'array':
                try {
                    entry[field.name] = JSON.parse(value);
                } catch (e) {
                    entry[field.name] = value;
                }
                break;
            default:
                entry[field.name] = value;
        }
    });

    masterDataType.data.push(entry);
    updateTable(typeName);

    bootstrap.Modal.getInstance(document.getElementById('masterDataEntryModal')).hide();
    form.reset();
}

// Update table with new data
function updateTable(typeName) {
    const masterDataType = dynamicMasterDataTypes.find(type => type.name === typeName);
    if (!masterDataType) {
        // For existing tabs, update the table data directly
        const table = document.getElementById(`${typeName.toLowerCase()}Table`);
        if (table) {
            // Preserve existing data by keeping tbody content
            return;
        }
        return;
    }

    const tbody = document.querySelector(`#${typeName}Table tbody`);
    tbody.innerHTML = '';

    masterDataType.data.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.id}</td>
            ${masterDataType.fields.map(field => `<td>${formatValue(item[field.name], field.type)}</td>`).join('')}
            <td>
                <button class="btn btn-sm btn-primary" onclick="editDataEntry('${typeName}', ${item.id})"><i class="bi bi-pencil"></i></button>
                <button class="btn btn-sm btn-danger" onclick="deleteDataEntry('${typeName}', ${item.id})"><i class="bi bi-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Format value for display
function formatValue(value, type) {
    if (value === null || value === undefined) return '';
    switch(type) {
        case 'object':
        case 'array':
            return typeof value === 'string' ? value : JSON.stringify(value);
        case 'boolean':
            return value ? 'Yes' : 'No';
        default:
            return value;
    }
}

// Edit data entry
function editDataEntry(typeName, id) {
    const masterDataType = dynamicMasterDataTypes.find(type => type.name === typeName);
    if (!masterDataType) return;

    const entry = masterDataType.data.find(item => item.id === id);
    if (!entry) return;

    openAddDataModal(typeName);

    // Populate form with existing data
    masterDataType.fields.forEach(field => {
        const input = document.querySelector(`[name="${field.name}"]`);
        if (!input) return;

        if (field.type === 'object' || field.type === 'array') {
            input.value = typeof entry[field.name] === 'string' 
                ? entry[field.name] 
                : JSON.stringify(entry[field.name]);
        } else {
            input.value = entry[field.name];
        }
    });

    // Update form data for update operation
    const form = document.getElementById('masterDataEntryForm');
    form.dataset.editId = id;
}

// Delete data entry
function deleteDataEntry(typeName, id) {
    if (!confirm('Are you sure you want to delete this entry?')) return;

    const masterDataType = dynamicMasterDataTypes.find(type => type.name === typeName);
    if (!masterDataType) return;

    masterDataType.data = masterDataType.data.filter(item => item.id !== id);
    updateTable(typeName);
}