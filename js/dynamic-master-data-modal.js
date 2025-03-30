// Modal HTML for new master data type creation
const newMasterDataModalHtml = `
    <div class="modal fade" id="newMasterDataModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Create New Master Data Type</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form id="newMasterDataForm">
                        <div class="mb-3">
                            <label class="form-label">Master Data Name</label>
                            <input type="text" class="form-control" id="masterDataName" required>
                            <small class="text-muted">Enter a unique name for the master data type</small>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Fields</label>
                            <div id="masterDataFields"></div>
                            <button type="button" class="btn btn-outline-primary btn-sm mt-2" onclick="addNewField()">
                                <i class="bi bi-plus-circle"></i> Add Field
                            </button>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="createMasterDataType()">Create</button>
                </div>
            </div>
        </div>
    </div>
`;

// Add modal to document when loaded
document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('beforeend', newMasterDataModalHtml);
});