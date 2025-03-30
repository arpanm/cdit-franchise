// Dynamic Master Data Type Management

let dynamicMasterDataTypes = [];

// Initialize dynamic master data management
document.addEventListener('DOMContentLoaded', () => {
    // Initialize predefined master data types
    for (const [typeName, fields] of Object.entries(MASTER_DATA_ATTRIBUTES)) {
        // Skip if tab already exists
        if (document.getElementById(`${typeName}-tab`)) continue;
        
        const masterDataType = {
            name: typeName,
            fields: fields,
            data: []
        };
        dynamicMasterDataTypes.push(masterDataType);
        addMasterDataTab(masterDataType);
    }

    // Add the "Add+" button to master data tabs
    const masterDataTabs = document.getElementById('masterDataTabs');
    if (masterDataTabs) {
        const addButton = document.createElement('li');
        addButton.className = 'nav-item';
        addButton.innerHTML = `
            <button class="nav-link" onclick="openNewMasterDataModal()">
                <i class="bi bi-plus-circle"></i> Add+
            </button>
        `;
        masterDataTabs.appendChild(addButton);
    }
});

// Open modal for new master data type creation
function openNewMasterDataModal() {
    const modal = new bootstrap.Modal(document.getElementById('newMasterDataModal'));
    modal.show();
}

// Add new field to the form
function addNewField() {
    const fieldsContainer = document.getElementById('masterDataFields');
    const fieldId = Date.now();
    const fieldHtml = `
        <div class="field-row mb-3" id="field-${fieldId}">
            <div class="row">
                <div class="col-md-3">
                    <input type="text" class="form-control" placeholder="Field Name" name="fieldName[]" required>
                </div>
                <div class="col-md-3">
                    <select class="form-select" name="fieldType[]" required>
                        <option value="string">Text</option>
                        <option value="number">Number</option>
                        <option value="date">Date</option>
                        <option value="boolean">Boolean</option>
                        <option value="object">Object</option>
                        <option value="array">Array</option>
                    </select>
                </div>
                <div class="col-md-5">
                    <input type="text" class="form-control" placeholder="Description" name="fieldDescription[]">
                </div>
                <div class="col-md-1">
                    <button type="button" class="btn btn-danger btn-sm" onclick="removeField('field-${fieldId}')">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    fieldsContainer.insertAdjacentHTML('beforeend', fieldHtml);
}

// Remove field from the form
function removeField(fieldId) {
    document.getElementById(fieldId).remove();
}

// Create new master data type
function createMasterDataType() {
    const name = document.getElementById('masterDataName').value;
    const fields = [];
    
    // Collect field definitions
    const fieldNames = document.getElementsByName('fieldName[]');
    const fieldTypes = document.getElementsByName('fieldType[]');
    const fieldDescriptions = document.getElementsByName('fieldDescription[]');
    
    for (let i = 0; i < fieldNames.length; i++) {
        fields.push({
            name: fieldNames[i].value,
            type: fieldTypes[i].value,
            description: fieldDescriptions[i].value
        });
    }
    
    // Create new master data type
    const masterDataType = {
        name: name,
        fields: fields,
        data: []
    };
    
    dynamicMasterDataTypes.push(masterDataType);
    
    // Add new tab
    addMasterDataTab(masterDataType);
    
    // Close modal
    bootstrap.Modal.getInstance(document.getElementById('newMasterDataModal')).hide();
    
    // Reset form
    document.getElementById('newMasterDataForm').reset();
    document.getElementById('masterDataFields').innerHTML = '';
}

// Add new master data tab
function addMasterDataTab(masterDataType) {
    // Add tab button
    const tabButton = document.createElement('li');
    tabButton.className = 'nav-item';
    tabButton.setAttribute('role', 'presentation');
    tabButton.innerHTML = `
        <button class="nav-link" id="${masterDataType.name}-tab" data-bs-toggle="tab" 
                data-bs-target="#${masterDataType.name}" type="button" role="tab">
            ${masterDataType.name}
        </button>
    `;
    
    // Insert before the Add+ button
    const addButton = document.querySelector('#masterDataTabs li:last-child');
    document.getElementById('masterDataTabs').insertBefore(tabButton, addButton);
    
    // Add tab content
    const tabContent = document.createElement('div');
    tabContent.className = 'tab-pane fade';
    tabContent.id = masterDataType.name;
    tabContent.setAttribute('role', 'tabpanel');
    
    // Add content with buttons and table
    tabContent.innerHTML = `
        <div class="d-flex justify-content-between mb-3">
            <div>
                <button class="btn btn-primary me-2" onclick="openAddDataModal('${masterDataType.name}')">
                    <i class="bi bi-plus-circle"></i> Add ${masterDataType.name}
                </button>
                <button class="btn btn-success me-2" onclick="exportToExcel('${masterDataType.name}')">
                    <i class="bi bi-download"></i> Export
                </button>
                <button class="btn btn-info me-2" onclick="document.getElementById('${masterDataType.name}Import').click()">
                    <i class="bi bi-upload"></i> Import
                </button>
                <button class="btn btn-outline-info btn-sm" onclick="generateSampleExcel('${masterDataType.name}')">
                    <i class="bi bi-file-earmark-excel"></i> Sample Format
                </button>
                <input type="file" id="${masterDataType.name}Import" hidden accept=".xlsx,.xls" 
                       onchange="importFromExcel('${masterDataType.name}', this)">
                <button class="btn btn-outline-primary me-2" onclick="openConfigModal('${masterDataType.name}')">
                    <i class="bi bi-broadcast"></i> Real-time Feed
                </button>
                <button class="btn btn-outline-primary me-2" onclick="openColumnManagementModal('${masterDataType.name}')">
                    <i class="bi bi-columns"></i> Manage Columns
                </button>
            </div>
        </div>
        <div class="table-responsive">
            <table class="table table-striped table-hover" id="${masterDataType.name}Table">
                <thead>
                    <tr>
                        <th>ID</th>
                        ${masterDataType.fields.map(field => `<th>${field.name}</th>`).join('')}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    `;
    
    document.getElementById('masterDataContent').appendChild(tabContent);
}

// Handle data operations
function openAddDataModal(typeName) {
    // Implementation for adding data
}

function exportToExcel(typeName) {
    // Implementation for exporting data
}

function importFromExcel(typeName, input) {
    // Implementation for importing data
}

function generateSampleExcel(typeName) {
    // Implementation for generating sample Excel
}

function openConfigModal(typeName) {
    // Implementation for Kafka configuration
}