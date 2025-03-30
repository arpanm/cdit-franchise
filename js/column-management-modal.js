// Modal HTML for column management
const columnManagementModalHtml = `
    <div class="modal fade" id="columnManagementModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Manage Columns</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form id="columnManagementForm">
                        <div id="columnFields"></div>
                        <button type="button" class="btn btn-outline-primary btn-sm mt-2" onclick="addNewColumn()">
                            <i class="bi bi-plus-circle"></i> Add Column
                        </button>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="saveColumns()">Save Changes</button>
                </div>
            </div>
        </div>
    </div>
`;

// Add modal to document when loaded
document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('beforeend', columnManagementModalHtml);
    // Initialize the Bootstrap modal
    const columnManagementModal = document.getElementById('columnManagementModal');
    if (columnManagementModal) {
        new bootstrap.Modal(columnManagementModal);
    }
});

// Add new column field to the form
function addNewColumn() {
    const columnFields = document.getElementById('columnFields');
    const fieldId = Date.now();
    const fieldHtml = `
        <div class="field-row mb-3" id="column-${fieldId}">
            <div class="row">
                <div class="col-md-3">
                    <input type="text" class="form-control" placeholder="Column Name" name="columnName[]" required>
                </div>
                <div class="col-md-3">
                    <select class="form-select" name="columnType[]" required>
                        <option value="string">Text</option>
                        <option value="number">Number</option>
                        <option value="date">Date</option>
                        <option value="boolean">Boolean</option>
                        <option value="object">Object</option>
                        <option value="array">Array</option>
                    </select>
                </div>
                <div class="col-md-5">
                    <input type="text" class="form-control" placeholder="Description" name="columnDescription[]">
                </div>
                <div class="col-md-1">
                    <button type="button" class="btn btn-danger btn-sm" onclick="removeColumn('column-${fieldId}')">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    columnFields.insertAdjacentHTML('beforeend', fieldHtml);
}

// Remove column field from the form
function removeColumn(columnId) {
    document.getElementById(columnId).remove();
}

// Open column management modal
function openColumnManagementModal(typeName) {
    // Get the master data type from dynamic types or create one from existing table
    let masterDataType = dynamicMasterDataTypes.find(type => type.name === typeName);
    
    if (!masterDataType) {
        // For existing tabs, create a masterDataType object from table structure
        const table = document.getElementById(`${typeName.toLowerCase()}Table`);
        if (table) {
            const fields = [];
            const headers = table.querySelectorAll('thead th');
            headers.forEach((header, index) => {
                // Skip ID and Actions columns
                if (index > 0 && index < headers.length - 1) {
                    fields.push({
                        name: header.textContent,
                        type: 'string', // Default type
                        description: ''
                    });
                }
            });
            masterDataType = {
                name: typeName,
                fields: fields,
                data: []
            };
        }
    }
    
    if (!masterDataType) return;

    // Clear existing fields
    const columnFields = document.getElementById('columnFields');
    columnFields.innerHTML = '';

    // Populate existing columns
    masterDataType.fields.forEach(field => {
        const fieldId = Date.now() + Math.random();
        const fieldHtml = `
            <div class="field-row mb-3" id="column-${fieldId}">
                <div class="row">
                    <div class="col-md-3">
                        <input type="text" class="form-control" placeholder="Column Name" name="columnName[]" value="${field.name}" required>
                    </div>
                    <div class="col-md-3">
                        <select class="form-select" name="columnType[]" required>
                            <option value="string" ${field.type === 'string' ? 'selected' : ''}>Text</option>
                            <option value="number" ${field.type === 'number' ? 'selected' : ''}>Number</option>
                            <option value="date" ${field.type === 'date' ? 'selected' : ''}>Date</option>
                            <option value="boolean" ${field.type === 'boolean' ? 'selected' : ''}>Boolean</option>
                            <option value="object" ${field.type === 'object' ? 'selected' : ''}>Object</option>
                            <option value="array" ${field.type === 'array' ? 'selected' : ''}>Array</option>
                        </select>
                    </div>
                    <div class="col-md-5">
                        <input type="text" class="form-control" placeholder="Description" name="columnDescription[]" value="${field.description || ''}">
                    </div>
                    <div class="col-md-1">
                        <button type="button" class="btn btn-danger btn-sm" onclick="removeColumn('column-${fieldId}')">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        columnFields.insertAdjacentHTML('beforeend', fieldHtml);
    });

    // Store current type name for save operation
    document.getElementById('columnManagementForm').dataset.typeName = typeName;

    // Get the modal element
    const modalElement = document.getElementById('columnManagementModal');
    if (!modalElement) {
        console.error('Column management modal element not found');
        return;
    }

    // Get existing modal instance or create new one
    let modal = bootstrap.Modal.getInstance(modalElement);
    if (!modal) {
        modal = new bootstrap.Modal(modalElement);
    }

    // Show the modal
    modal.show();
}

// Save columns configuration
function saveColumns() {
    const form = document.getElementById('columnManagementForm');
    const typeName = form.dataset.typeName;
    let masterDataType = dynamicMasterDataTypes.find(type => type.name === typeName);
    
    // Handle existing tabs that aren't in dynamicMasterDataTypes
    if (!masterDataType) {
        const table = document.getElementById(`${typeName.toLowerCase()}Table`);
        if (table) {
            masterDataType = {
                name: typeName,
                fields: [],
                data: []
            };
            dynamicMasterDataTypes.push(masterDataType);
        } else {
            return;
        }
    }

    const columnNames = document.getElementsByName('columnName[]');
    const columnTypes = document.getElementsByName('columnType[]');
    const columnDescriptions = document.getElementsByName('columnDescription[]');

    // Create a map of existing fields for quick lookup
    const existingFields = {};
    masterDataType.fields.forEach(field => {
        existingFields[field.name] = field;
    });

    // Update fields configuration while preserving existing data
    const newFields = [];
    for (let i = 0; i < columnNames.length; i++) {
        const fieldName = columnNames[i].value;
        newFields.push({
            name: fieldName,
            type: columnTypes[i].value,
            description: columnDescriptions[i].value
        });

        // If this is a new field, initialize it with empty values in existing data
        if (!existingFields[fieldName]) {
            masterDataType.data.forEach(item => {
                item[fieldName] = '';
            });
        }
    }

    // Update the fields array with new configuration
    masterDataType.fields = newFields;

    // Update table structure
    updateTableStructure(typeName);

    // Close modal
    bootstrap.Modal.getInstance(document.getElementById('columnManagementModal')).hide();
}

// Update table structure after column changes
function updateTableStructure(typeName) {
    const masterDataType = dynamicMasterDataTypes.find(type => type.name === typeName);
    if (!masterDataType) {
        // For existing tabs, update the table structure directly
        const table = document.getElementById(`${typeName.toLowerCase()}Table`);
        if (table) {
            const thead = table.querySelector('thead tr');
            const columnNames = document.getElementsByName('columnName[]');
            thead.innerHTML = `
                <th>ID</th>
                ${Array.from(columnNames).map(input => `<th>${input.value}</th>`).join('')}
                <th>Actions</th>
            `;
            return;
        }
        return;
    }

    // Update table header
    const thead = document.querySelector(`#${typeName}Table thead tr`);
    thead.innerHTML = `
        <th>ID</th>
        ${masterDataType.fields.map(field => `<th>${field.name}</th>`).join('')}
        <th>Actions</th>
    `;

    // Update existing data rows
    updateTable(typeName);
}