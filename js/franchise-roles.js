// Function to add a new franchise role
function addFranchiseRole() {
    // Clear the form
    const form = document.getElementById('addRoleForm');
    if (form) {
        form.reset();
        populatePermissionsCheckboxes('permissionsCheckboxes');
    }

    // Show the modal
    $('#addRoleModal').modal('show');
}

// Function to populate permissions checkboxes
function populatePermissionsCheckboxes(name) {
    // TODO: Fetch permissions from API
    const mockPermissions = [
        { id: 1, name: 'view_reports', label: 'View All Tables' },
        { id: 2, name: 'manage_service', label: 'Manage Service' },
        { id: 3, name: 'manage-return', label: 'Manage Return' },
        { id: 4, name: 'manage_inventory', label: 'Manage Inventory' },
        { id: 5, name: 'manage_finance', label: 'Manage Disputes & Payouts' },
        { id: 6, name: 'manage_engineer', label: 'Manage Engineer' }
    ];
    const permissionsContainer = document.getElementById(name);
    if (permissionsContainer) {
        permissionsContainer.innerHTML = mockPermissions.map(permission => `
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="${permission.name}" id="${permission.name}">
                <label class="form-check-label" for="${permission.name}">
                    ${permission.name}
                </label>
            </div>
        `).join('');
    }
}

// Function to edit a franchise role
function editFranchiseRole(roleId) {
    // Load permissions first
    loadPermissions();

    // TODO: Fetch role details from API
    const mockRole = {
        id: roleId,
        name: roleId === 1 ? 'Admin' : roleId === 2 ? 'Manager' : 'Engineer',
        description: roleId === 1 ? 'Full access to franchise management' :
                     roleId === 2 ? 'Manage day-to-day franchise operations' :
                     'Handle service requests and repairs',
        permissions: roleId === 1 ? ['manage_users', 'manage_roles', 'manage_settings'] :
                     roleId === 2 ? ['service_management', 'inventory_management', 'staff_management'] :
                     ['service_requests', 'repairs']
    };

    const form = document.getElementById('editRoleForm');
    form.roleId.value = mockRole.id;
    form.roleName.value = mockRole.name;
    form.description.value = mockRole.description;

    populatePermissionsCheckboxes('editPermissionsCheckboxes');
    // Set permissions checkboxes
    const checkboxes = form.querySelectorAll('input[name="permissions[]"]');
    checkboxes.forEach(cb => {
        cb.checked = mockRole.permissions.includes(cb.value);
    });

    $('#editRoleModal').modal('show');
}

// Function to save a new franchise role
function saveNewFranchiseRole() {
    const form = document.getElementById('addRoleForm');
    const formData = new FormData(form);
    
    // TODO: API call to save role
    console.log('Saving new franchise role:', Object.fromEntries(formData));
    
    $('#addRoleModal').modal('hide');
    showToast('Franchise role created successfully');
    loadFranchiseRoles();
}

// Function to update a franchise role
function updateFranchiseRole() {
    const form = document.getElementById('editRoleForm');
    const formData = new FormData(form);
    
    // TODO: API call to update role
    console.log('Updating franchise role:', Object.fromEntries(formData));
    
    $('#editRoleModal').modal('hide');
    showToast('Franchise role updated successfully');
    loadFranchiseRoles();
}

// Function to load franchise roles
function loadFranchiseRoles() {
    if (!document.getElementById('franchiseRolesTableBody')) return;

    // TODO: Fetch roles from API
    const mockRoles = [
        { 
            id: 1, 
            name: 'Admin', 
            description: 'Full access to franchise management',
            permissions: ['view_reports', 'manage_service', 'manage-return', 'manage_inventory', 'manage_finance', 'manage_engineer']
        },
        { 
            id: 2, 
            name: 'Finance', 
            description: 'Manage day-to-day franchise operations',
            permissions: ['view_reports', 'manage_finance', 'manage_engineer']
        },
        { 
            id: 3, 
            name: 'HR', 
            description: 'Handle service requests and repairs',
            permissions: ['view_reports', 'manage_engineer']
        },
        { 
            id: 4, 
            name: 'Station Manager', 
            description: 'Handle service requests and repairs',
            permissions: ['view_reports', 'manage_service', 'manage-return', 'manage_inventory']
        }
    ];
    
    displayFranchiseRoles(mockRoles);
}

// Function to display franchise roles
function displayFranchiseRoles(roles) {
    const tbody = document.getElementById('franchiseRolesTableBody');
    if (!tbody) return;

    tbody.innerHTML = roles.map(role => `
        <tr>
            <td>${role.name}</td>
            <td>${role.description}</td>
            <td>
                <div class="permission-badges">
                    ${role.permissions.map(permission => 
                        `<span class="badge bg-primary">${permission.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>`
                    ).join('')}
                </div>
            </td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="editFranchiseRole(${role.id})" title="Edit Role">
                    <i class="bi bi-pencil"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadFranchiseRoles();
});