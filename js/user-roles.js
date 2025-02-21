// Function to populate roles dropdown
function populateRolesDropdown() {
    const roleDropdowns = document.querySelectorAll('select[name="role"]');
    if (!roleDropdowns.length) return;

    // Mock roles data (replace with API call in production)
    const roles = [
        { id: 1, name: 'Admin', value: 'admin' },
        { id: 2, name: 'Manager', value: 'manager' },
        { id: 3, name: 'Engineer', value: 'engineer' }
    ];

    roleDropdowns.forEach(dropdown => {
        dropdown.innerHTML = `
            <option value="">Select Role</option>
            ${roles.map(role => `
                <option value="${role.value}">${role.name}</option>
            `).join('')}
        `;
    });
}

// Initialize roles dropdown when modals are shown
document.addEventListener('DOMContentLoaded', () => {
    const addUserModal = document.getElementById('addUserModal');
    const editUserModal = document.getElementById('editUserModal');

    if (addUserModal) {
        addUserModal.addEventListener('show.bs.modal', populateRolesDropdown);
    }

    if (editUserModal) {
        editUserModal.addEventListener('show.bs.modal', populateRolesDropdown);
    }
});