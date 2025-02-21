// Common utility functions
function showToast(message, type = 'success') {
    // Implement toast notification
}

// User Management Functions
function loadUsers() {
    // TODO: Fetch users from API
    const mockUsers = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Manager', status: 'Active' }
    ];
    displayUsers(mockUsers);
}

function displayUsers(users) {
    const tbody = document.getElementById('usersTableBody');
    if (!tbody) return;

    tbody.innerHTML = users.map(user => `
        <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>
                <span class="badge bg-${user.status === 'Active' ? 'success' : 'danger'}">
                    ${user.status}
                </span>
            </td>
            <td>
                <button class="btn btn-sm btn-outline-primary me-1" onclick="editUser(${user.id})">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-${user.status === 'Active' ? 'outline-danger' : 'outline-success'}" 
                        onclick="toggleUserStatus(${user.id})">
                    <i class="bi bi-${user.status === 'Active' ? 'lock' : 'unlock'}"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function saveNewUser() {
    const form = document.getElementById('addUserForm');
    const formData = new FormData(form);
    
    // TODO: API call to save user
    console.log('Saving new user:', Object.fromEntries(formData));
    
    $('#addUserModal').modal('hide');
    showToast('User added successfully');
    loadUsers();
}

function editUser(userId) {
    // TODO: Fetch user details from API
    const mockUser = {
        id: userId,
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Admin'
    };

    const form = document.getElementById('editUserForm');
    form.userId.value = mockUser.id;
    form.fullName.value = mockUser.name;
    form.email.value = mockUser.email;
    form.role.value = mockUser.role.toLowerCase();

    $('#editUserModal').modal('show');
}

function updateUser() {
    const form = document.getElementById('editUserForm');
    const formData = new FormData(form);
    
    // TODO: API call to update user
    console.log('Updating user:', Object.fromEntries(formData));
    
    $('#editUserModal').modal('hide');
    showToast('User updated successfully');
    loadUsers();
}

function toggleUserStatus(userId) {
    // TODO: API call to toggle user status
    console.log('Toggling status for user:', userId);
    showToast('User status updated successfully');
    loadUsers();
}

// Role Management Functions (Mother Company Admin Only)
function loadRoles() {
    if (!document.getElementById('rolesTableBody')) return;

    // TODO: Fetch roles from API
    const mockRoles = [
        {
            id: 1,
            name: 'Admin',
            description: 'Full system access',
            permissions: ['manage_users', 'manage_roles', 'view_reports']
        },
        {
            id: 2,
            name: 'Manager',
            description: 'Limited system access',
            permissions: ['view_reports']
        }
    ];
    displayRoles(mockRoles);
}

function displayRoles(roles) {
    const tbody = document.getElementById('rolesTableBody');
    if (!tbody) return;

    tbody.innerHTML = roles.map(role => `
        <tr>
            <td>${role.name}</td>
            <td>${role.description}</td>
            <td>
                <div class="d-flex flex-wrap gap-1">
                    ${role.permissions.map(perm => 
                        `<span class="badge bg-info">${perm}</span>`
                    ).join('')}
                </div>
            </td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="editRole(${role.id})">
                    <i class="bi bi-pencil"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function loadPermissions() {
    // TODO: Fetch available permissions from API
    const mockPermissions = [
        { id: 1, name: 'manage_users', label: 'Manage Users' },
        { id: 2, name: 'manage_roles', label: 'Manage Roles' },
        { id: 3, name: 'view_reports', label: 'View Reports' }
    ];

    const container = document.getElementById('permissionsCheckboxes');
    if (container) {
        container.innerHTML = mockPermissions.map(perm => `
            <div class="col-md-6 mb-2">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" 
                           name="permissions[]" value="${perm.name}" 
                           id="perm_${perm.id}">
                    <label class="form-check-label" for="perm_${perm.id}">
                        ${perm.label}
                    </label>
                </div>
            </div>
        `).join('');
    }
}

function saveNewRole() {
    const form = document.getElementById('addRoleForm');
    const formData = new FormData(form);
    
    // TODO: API call to save role
    console.log('Saving new role:', Object.fromEntries(formData));
    
    $('#addRoleModal').modal('hide');
    showToast('Role created successfully');
    loadRoles();
}

function editRole(roleId) {
    // Load permissions first
    loadPermissions();

    // TODO: Fetch role details from API
    const mockRole = {
        id: roleId,
        name: 'Admin',
        description: 'Full system access',
        permissions: ['manage_users', 'manage_roles']
    };

    const form = document.getElementById('editRoleForm');
    form.roleId.value = mockRole.id;
    form.roleName.value = mockRole.name;
    form.description.value = mockRole.description;

    // Set permissions checkboxes
    const checkboxes = form.querySelectorAll('input[name="permissions[]"]');
    checkboxes.forEach(cb => {
        cb.checked = mockRole.permissions.includes(cb.value);
    });

    $('#editRoleModal').modal('show');
}

function updateRole() {
    const form = document.getElementById('editRoleForm');
    const formData = new FormData(form);
    
    // TODO: API call to update role
    console.log('Updating role:', Object.fromEntries(formData));
    
    $('#editRoleModal').modal('hide');
    showToast('Role updated successfully');
    loadRoles();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadUsers();
    loadRoles();
    loadPermissions();
});