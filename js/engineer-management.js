// Engineer Management Class
class EngineerManager {
    constructor() {
        this.engineers = [
            {
                id: 'ENG001',
                name: 'Raj Kumar',
                location: 'Mumbai',
                skills: ['Samsung', 'LG', 'Whirlpool'],
                availability: true,
                currentWorkload: 3,
                avgResolutionTime: 2.5,
                npsScore: 8.9,
                proximity: '5km'
            },
            {
                id: 'ENG002',
                name: 'Amit Shah',
                location: 'Delhi',
                skills: ['LG', 'Whirlpool'],
                availability: true,
                currentWorkload: 2,
                avgResolutionTime: 3.0,
                npsScore: 8.5,
                proximity: '3km'
            },
            {
                id: 'ENG003',
                name: 'Priya Patel',
                location: 'Bangalore',
                skills: ['Samsung', 'Whirlpool'],
                availability: false,
                currentWorkload: 5,
                avgResolutionTime: 2.8,
                npsScore: 9.0,
                proximity: '4km'
            },
            {
                id: 'ENG004',
                name: 'Vikram Singh',
                location: 'Chennai',
                skills: ['Samsung', 'LG'],
                availability: true,
                currentWorkload: 1,
                avgResolutionTime: 2.2,
                npsScore: 8.7,
                proximity: '2km'
            }
        ];

        this.initializeAssignmentModal();
        this.setupDragAndDrop();
    }

    initializeAssignmentModal() {
        // Create and append modal HTML
        const modalHTML = `
            <div class="modal fade" id="engineerAssignmentModal" tabindex="-1">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Assign Engineer</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row mb-3">
                                <div class="col-md-4">
                                    <select class="form-select" id="locationFilter">
                                        <option value="">All Locations</option>
                                        <option>Mumbai</option>
                                        <option>Delhi</option>
                                        <option>Bangalore</option>
                                        <option>Chennai</option>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <select class="form-select" id="skillFilter">
                                        <option value="">All Skills</option>
                                        <option>Samsung</option>
                                        <option>LG</option>
                                        <option>Whirlpool</option>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <select class="form-select" id="availabilityFilter">
                                        <option value="">All Status</option>
                                        <option value="true">Available</option>
                                        <option value="false">Unavailable</option>
                                    </select>
                                </div>
                            </div>
                            <div class="engineer-list" id="engineerList">
                                <!-- Engineers will be populated here -->
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" id="assignButton">Assign Selected</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // Add event listeners for filters
        ['locationFilter', 'skillFilter', 'availabilityFilter'].forEach(filterId => {
            document.getElementById(filterId).addEventListener('change', () => this.filterEngineers());
        });

        // Add event listener for assign button
        document.getElementById('assignButton').addEventListener('click', () => {
            const selectedEngineerCard = document.querySelector('.engineer-card.selected');
            if (selectedEngineerCard) {
                const engineerId = selectedEngineerCard.dataset.engineerId;
                const engineer = this.engineers.find(eng => eng.id === engineerId);
                if (engineer && engineer.availability) {
                    const selectedRequests = document.querySelectorAll('#serviceRequestsTable tbody tr input[type="checkbox"]:checked');
                    selectedRequests.forEach(checkbox => {
                        const requestRow = checkbox.closest('tr');
                        const requestId = requestRow.querySelector('td:nth-child(2)').textContent;
                        this.assignEngineer(requestId, engineer);
                    });
                }
            }
        });

        // Initialize the engineer list
        this.updateEngineerList();
    }

    updateEngineerList() {
        const engineerList = document.getElementById('engineerList');
        engineerList.innerHTML = this.engineers.map(engineer => `
            <div class="card mb-2 engineer-card ${!engineer.availability ? 'unavailable' : ''}" 
                 data-engineer-id="${engineer.id}" draggable="true" onclick="(function(event) {
                    const cards = document.querySelectorAll('.engineer-card');
                    cards.forEach(card => card.classList.remove('selected'));
                    event.currentTarget.classList.add('selected');
                })(event)">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-md-3">
                            <h6 class="mb-0">${engineer.name}</h6>
                            <small class="text-muted">${engineer.location}</small>
                        </div>
                        <div class="col-md-3">
                            <small class="d-block">Skills: ${engineer.skills.join(', ')}</small>
                            <small class="d-block">Proximity: ${engineer.proximity}</small>
                        </div>
                        <div class="col-md-3">
                            <small class="d-block">Workload: ${engineer.currentWorkload} requests</small>
                            <small class="d-block">Avg. Resolution: ${engineer.avgResolutionTime}hrs</small>
                        </div>
                        <div class="col-md-3">
                            <div class="d-flex align-items-center">
                                <span class="badge ${engineer.availability ? 'bg-success' : 'bg-secondary'} me-2">
                                    ${engineer.availability ? 'Available' : 'Unavailable'}
                                </span>
                                <span class="badge bg-info">NPS: ${engineer.npsScore}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        this.setupDragAndDrop();
    }

    filterEngineers() {
        const location = document.getElementById('locationFilter').value;
        const skill = document.getElementById('skillFilter').value;
        const availability = document.getElementById('availabilityFilter').value;

        const filteredEngineers = this.engineers.filter(engineer => {
            const locationMatch = !location || engineer.location === location;
            const skillMatch = !skill || engineer.skills.includes(skill);
            const availabilityMatch = availability === '' || engineer.availability.toString() === availability;
            return locationMatch && skillMatch && availabilityMatch;
        });

        const engineerList = document.getElementById('engineerList');
        engineerList.innerHTML = filteredEngineers.map(engineer => `
            <div class="card mb-2 engineer-card ${!engineer.availability ? 'unavailable' : ''}" 
                 data-engineer-id="${engineer.id}" draggable="true" onclick="(function(event) {
                    const cards = document.querySelectorAll('.engineer-card');
                    cards.forEach(card => card.classList.remove('selected'));
                    event.currentTarget.classList.add('selected');
                })(event)">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-md-3">
                            <h6 class="mb-0">${engineer.name}</h6>
                            <small class="text-muted">${engineer.location}</small>
                        </div>
                        <div class="col-md-3">
                            <small class="d-block">Skills: ${engineer.skills.join(', ')}</small>
                            <small class="d-block">Proximity: ${engineer.proximity}</small>
                        </div>
                        <div class="col-md-3">
                            <small class="d-block">Workload: ${engineer.currentWorkload} requests</small>
                            <small class="d-block">Avg. Resolution: ${engineer.avgResolutionTime}hrs</small>
                        </div>
                        <div class="col-md-3">
                            <div class="d-flex align-items-center">
                                <span class="badge ${engineer.availability ? 'bg-success' : 'bg-secondary'} me-2">
                                    ${engineer.availability ? 'Available' : 'Unavailable'}
                                </span>
                                <span class="badge bg-info">NPS: ${engineer.npsScore}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        this.setupDragAndDrop();
    }

    setupDragAndDrop() {
        const engineerCards = document.querySelectorAll('.engineer-card');
        const serviceRequestRows = document.querySelectorAll('#serviceRequestsTable tbody tr');

        engineerCards.forEach(card => {
            card.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('engineerId', card.dataset.engineerId);
            });
        });

        serviceRequestRows.forEach(row => {
            row.addEventListener('dragover', (e) => {
                e.preventDefault();
                row.classList.add('drag-over');
            });

            row.addEventListener('dragleave', () => {
                row.classList.remove('drag-over');
            });

            row.addEventListener('drop', (e) => {
                e.preventDefault();
                row.classList.remove('drag-over');
                const engineerId = e.dataTransfer.getData('engineerId');
                const engineer = this.engineers.find(eng => eng.id === engineerId);
                if (engineer && engineer.availability) {
                    this.assignEngineer(row.dataset.requestId, engineer);
                }
            });
        });
    }

    assignEngineer(requestId, engineer) {
        // Update the service request with new engineer
        const requestRow = document.querySelector(`tr[data-request-id="${requestId}"]`);
        if (requestRow) {
            const engineerCell = requestRow.querySelector('td:nth-child(8)');
            engineerCell.textContent = engineer.name;
            this.notifyEngineer(engineer, requestId);
        }

        // Close the modal after assignment
        const modalElement = document.getElementById('engineerAssignmentModal');
        const modal = bootstrap.Modal.getInstance(modalElement);
        if (modal) {
            modal.hide();
        }
    }

    notifyEngineer(engineer, requestId) {
        // Simulate notification
        console.log(`Notification sent to ${engineer.name} for request ${requestId}`);
        // In real implementation, this would integrate with a notification service
    }

    bulkAssign(requestIds, engineerId) {
        const engineer = this.engineers.find(eng => eng.id === engineerId);
        if (engineer && engineer.availability) {
            requestIds.forEach(requestId => this.assignEngineer(requestId, engineer));
        }
    }

    showAssignmentModal() {
        const modal = new bootstrap.Modal(document.getElementById('engineerAssignmentModal'));
        modal.show();
    }
}

// Initialize engineer management
const engineerManager = new EngineerManager();

// Add event listener for the assign button in the service requests table
document.addEventListener('DOMContentLoaded', () => {
    const assignButton = document.querySelector('.btn-primary[data-action="assign"]');
    if (assignButton) {
        assignButton.addEventListener('click', () => {
            const modal = new bootstrap.Modal(document.getElementById('engineerAssignmentModal'));
            modal.show();
        });
    }
});