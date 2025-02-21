const mockUsers = [
    { id: 1, name: 'John Smith', email: 'js@mail.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Alen Ravi', email: 'alen@fran.com', role: 'Manager', status: 'Active' },
    { id: 3, name: 'Smith H', email: 'sm@fran.com', role: 'Manager', status: 'Active' },
    { id: 4, name: 'Jane Doe', email: 'jd@abc.com', role: 'Admin', status: 'Active' },
    { id: 5, name: 'Mike Johnson', email: 'mike@fran.com', role: 'Support', status: 'Inactive' }
];

const mockPermissions = [
    { id: 1, name: 'manage_users', label: 'Manage Users' },
    { id: 2, name: 'manage_roles', label: 'Manage Roles' },
    { id: 3, name: 'view_reports', label: 'View All Tables' },
    { id: 4, name: 'manage_finance', label: 'Manage Finance Actions' },
    { id: 5, name: 'manage_dispute', label: 'Manage Dispute' },
    { id: 6, name: 'manage_service', label: 'Manage Service' },
    { id: 7, name: 'manage-price', label: 'Manage Selling Price' },
    { id: 8, name: 'manage-return', label: 'Manage Return' },
    { id: 9, name: 'manage_inventory', label: 'Manage Inventory' },
    { id: 10, name: 'manage_po', label: 'Manage Vendor & Purchase' },
    { id: 11, name: 'manage_credit', label: 'Manage Credit' },
    { id: 12, name: 'manage_integration', label: 'Manage API Integration' },
    { id: 13, name:'manage_commission', label: 'Manage Commission & Scheme' }
];

const mockRoles = [
    {
        id: 1,
        name: 'Admin',
        description: 'Full system access',
        permissions: ['manage_users', 'manage_roles', 'view_reports', 'manage_finance', 'manage_dispute', 'manage_service', 'manage-price', 'manage-return', 'manage_inventory', 'manage_po', 'manage_credit', 'manage_integration', 'manage_commission']
    },
    {
        id: 2,
        name: 'Manager',
        description: 'Limited system access',
        permissions: ['view_reports', 'manage_service','manage_inventory']
    },
    {
        id: 3,
        name: 'Buyer',
        description: 'Limited system access',
        permissions: ['view_reports', 'manage_inventory', 'manage_po']
    },
    {
        id: 4,
        name: 'Seller',
        description: 'Limited system access',
        permissions: ['view_reports', 'manage_inventory', 'manage_price', 'manage_commission']
    },
    {
        id: 5,
        name: 'Support',
        description: 'Limited system access',
        permissions: ['view_reports', 'manage_return', 'manage_dispute']
    },
    {
        id: 6,
        name: 'Finance',
        description: 'Limited system access',
        permissions: ['view_reports', 'manage_finance', 'manage_credit']
    },
    {
        id: 7,
        name: 'IT',
        description: 'Limited system access',
        permissions: ['view_reports', 'manage_integration', 'manage_commission']
    }
];

const mockFranchises = [
    { id: 1, name: 'Franchise 1' },
    { id: 2, name: 'Franchise 2' },
    { id: 3, name: 'Franchise 3' }
];

const mockFranchiseUsers = [
    { id: 1, name: 'John Smith', email: 'js@mail.com', franchise: 'Franchise 3', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Alen Ravi', email: 'alen@fran.com', franchise: 'Franchise 1', role: 'Manager', status: 'Active' },
    { id: 3, name: 'Smith H', email: 'sm@fran.com', franchise: 'Franchise 1', role: 'Manager', status: 'Active' },
    { id: 4, name: 'Jane Doe', email: 'jd@abc.com', franchise: 'Franchise 2', role: 'Admin', status: 'Active' },
    { id: 5, name: 'Mike Johnson', email: 'mike@fran.com', franchise: 'Franchise 1', role: 'Support', status: 'Inactive' }
];

const mockFranchisePermissions = [
    { id: 1, name: 'view_reports', label: 'View All Tables' },
    { id: 2, name: 'manage_service', label: 'Manage Service' },
    { id: 3, name: 'manage-return', label: 'Manage Return' },
    { id: 4, name: 'manage_inventory', label: 'Manage Inventory' },
    { id: 5, name: 'manage_finance', label: 'Manage Disputes & Payouts' },
    { id: 6, name: 'manage_engineer', label: 'Manage Engineer' }
];

const mockFranchiseRoles = [
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

class Users {
    constructor() {
        this.users = mockUsers;
        this.roles = mockRoles;
    }
    showTable() {
        const tbody = document.getElementById('usersTableBody');
        displayUsers(this.users, tbody);
    }
    addUser() {
        displayAddUser(this.roles, 'addUserRoles', null, '', 'addUsersModal');
    }
    editUser(userid) {
        var editUser = null;
        this.users.forEach(user => {
            if (user.id === userid) {
                editUser = user;
            }
        });
        if (!editUser) return;
        displayEditUser(editUser, 'editUsersForm', this.roles, 'editUserRoles', null, '', 'editUsersModal');
    }
    saveUser(formId, modalId) {
        const form = document.getElementById(formId);
        if (!form) return;
        const formData = new FormData(form);
        if (!formData) return;
        if (!formData.get('id')) {
            saveAddEditUser(null, formId, modalId);
        } else {
            var userid = formData.get('id');
            var editUser = null;
            this.users.forEach(user => {
                if (user.id === userid) {
                    editUser = user;
                }
            });
            saveAddEditUser(editUser, formId, modalId);
        }
    }
}

class Roles {
    constructor() {
        this.roles = mockRoles;
        this.permissions = mockPermissions;
    }
    showTable() {
        const tbody = document.getElementById('rolesTableBody');
        displayRoles(this.roles, tbody);
    }
    addRole() {
        displayAddRole(this.permissions, 'addPermissions', 'addRoleModal');
    }
    editRole(roleid) {
        var editRole = null;
        this.roles.forEach(role => {
            if (role.id === roleid) {
                editRole = role;
            }
        });
        if (!editRole) return;
        displayEditRole(editRole, 'editRoleForm', this.permissions, 'editPermissions', 'editRoleModal');
    }
    saveRole(formId, modalId) {
        const form = document.getElementById(formId);
        if (!form) return;
        const formData = new FormData(form);
        if (!formData) return;
        if (!formData.get('id')) {
            saveAddEditRole(null, formId, modalId);
        } else {
            var editRole = null;
            this.roles.forEach(role => {
                if (role.id === roleid) {
                    editRole = role;
                }
            });
            saveAddEditRole(editRole, formId, modalId);
        }
    }
}
class FranchiseUsers {
    constructor() {
        this.users = mockFranchiseUsers;
        this.roles = mockFranchiseRoles;
        this.franchiseList = mockFranchises;
    }
    showTable() {
        const tbody = document.getElementById('franchiseUsersTableBody');
        displayUsers(this.users, tbody, true);
    }
    addUser() {
        displayAddUser(this.roles, 'addFranchiseUserRoles', this.franchiseList, 'addFranchiseUserFranchises', 'addFranchiseUsersModal');
    }
    editUser(userid) {
        var editUser = null;
        this.users.forEach(user => {
            if (user.id === userid) {
                editUser = user;
            }
        });
        if (!editUser) return;

        displayEditUser(editUser, 'editFranchiseUsersForm', this.roles, 'editFranchiseUserRoles', this.franchiseList, 'editFranchiseUserFranchises', 'editFranchiseUsersModal');
    }
    saveUser(formId, modalId) {
        const form = document.getElementById(formId);
        if (!form) return;
        const formData = new FormData(form);
        if (!formData) return;
        if (!formData.get('id')) {
            saveAddEditUser(null, formId, modalId);
        } else {
            var userid = formData.get('id');
            var editUser = null;
            this.users.forEach(user => {
                if (user.id === userid) {
                    editUser = user;
                }
            });
            saveAddEditUser(editUser, formId, modalId);
        }
    }
}

class FranchiseRoles {
    constructor() {
        this.roles = mockFranchiseRoles;
        this.permissions = mockFranchisePermissions;
    }
    showTable() {
        const tbody = document.getElementById('franchiseRolesTableBody');
        displayRoles(this.roles, tbody);
    }
    addRole() {
        displayAddRole(this.permissions, 'addFranchisePermissions', 'addFranchiseRoleModal');
    }
    editRole(roleid) {
        var editRole = null;
        this.roles.forEach(role => {
            if (role.id === roleid) {
                editRole = role;
            }
        });
        if (!editRole) return;
        displayEditRole(editRole, 'editFranchiseRoleForm', this.permissions, 'editFranchisePermissions', 'editFranchiseRoleModal');
    }
    saveRole(formId, modalId) {
        const form = document.getElementById(formId);
        if (!form) return;
        const formData = new FormData(form);
        if (!formData) return;
        if (!formData.get('id')) {
            saveAddEditRole(null, formId, modalId);
        } else {
            var editRole = null;
            this.roles.forEach(role => {
                if (role.id === roleid) {
                    editRole = role;
                }
            });
            saveAddEditRole(editRole, formId, modalId);
        }
    }
}

function displayUsers(users, tbody, isFranchiseUsers = false) {
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
                <button class="btn btn-sm btn-outline-primary me-1" onclick="${isFranchiseUsers ? `franchiseUsers.editUser(${user.id})` : `users.editUser(${user.id})`}">
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

function displayAddUser(roles, rolesDropDownId, franchiseList, franchiseDropDownId, modalId) {
    if (franchiseList) setFranchiseDropdown(franchiseList, null, franchiseDropDownId);

    setRolesDropdown(roles, null, rolesDropDownId);

    $('#'+modalId).modal('show');
}

function saveAddEditUser(editUser, formId, modalId) {
    const form = document.getElementById(formId);
    const formData = new FormData(form);

    // TODO: API call to save user
    console.log('Saving new user:', Object.fromEntries(formData));

    $('#'+modalId).modal('hide');
}

function displayEditUser(user, formId, roles, rolesDropDownId, franchiseList, franchiseDropDownId, modalId) {
    const form = document.getElementById(formId);
    if (!form) return;
    if (franchiseList) setFranchiseDropdown(franchiseList, user.franchise, franchiseDropDownId);
    form.userId.value = user.id;
    form.fullName.value = user.name;
    form.email.value = user.email;

    setRolesDropdown(roles, user.role, rolesDropDownId);

    $('#'+modalId).modal('show');
}

function setRolesDropdown(roles, selectedRole, dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    if (!dropdown) return;
    dropdown.innerHTML =  `
        <option value="">Select Role</option>
        ${roles.map(role => `
            <option value="${role.value}" ${role.value === selectedRole ? 'selected' : ''}>
                ${role.name}
            </option>
        `).join('')}
    `;
}

function setFranchiseDropdown(franchiseList, selectedFranchise, franchiseDropDownId) {
    const dropDown = document.getElementById(franchiseDropDownId);
    if (!dropDown) return;
    dropDown.innerHTML = `
        <option value="">All Franchises</option>
        ${franchiseList.map(franchise => `
            <option value="${franchise.name}" ${franchise.name === selectedFranchise ? 'selected' : ''}>
                ${franchise.name}
            </option>
        `).join('')}
    `;
}

function toggleUserStatus(userId) {
    // TODO: API call to toggle user status
    console.log('Toggling status for user:', userId);
    showToast('User status updated successfully');
    loadUsers();
}



function displayRoles(roles, tbody) {
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
                <button class="btn btn-sm btn-outline-primary" onclick="roles.editRole(${role.id})">
                    <i class="bi bi-pencil"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function displayAddRole(permissions, permissionsId, modalId) {
    loadPermissions(permissions, permissionsId, null);

    // Show the modal
    $('#'+modalId).modal('show');
}

function displayEditRole(editRole, formId, permissions, permissionsId, modalId) {
    const form = document.getElementById(formId);
    form.roleId.value = editRole.id;
    form.roleName.value = editRole.name;
    form.description.value = editRole.description;
    loadPermissions(permissions, permissionsId, editRole.permissions);

    $('#'+modalId).modal('show');
}

function loadPermissions(permissions, permissionsId, selectedPermissions) {
    const container = document.getElementById(permissionsId);
    if (container) {
        container.innerHTML = permissions.map(perm => `
            <div class="col-md-6 mb-2">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" 
                           name="permissions[]" value="${perm.name}" 
                           id="perm_${perm.id}" checkcked="${selectedPermissions != null ? selectedPermissions.includes(perm.name) : false}">
                    <label class="form-check-label" for="perm_${perm.id}">
                        ${perm.label}
                    </label>
                </div>
            </div>
        `).join('');
    }
}


function saveAddEditRole(editRole, formId, modalId) {
    const form = document.getElementById(formId);
    const formData = new FormData(form);
    
    // TODO: API call to save role
    console.log('Saving new role:', Object.fromEntries(formData));
    
    $('#'+modalId).modal('hide');
}

function showRoles() {
    roles.showTable();
    franchiseRoles.showTable();
}

// Initialize
const users = new Users();
const franchiseUsers = new FranchiseUsers();
const roles = new Roles();
const franchiseRoles = new FranchiseRoles();

// Make available globally
window.users = users;
window.franchiseUsers = franchiseUsers;

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    users.showTable();
    franchiseUsers.showTable();
});