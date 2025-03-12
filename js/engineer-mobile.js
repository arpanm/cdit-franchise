// Mock service requests data - Replace with actual API call
let serviceRequests = [
    // Today's requests
    {
        id: 'SR001',
        type: 'Repair',
        status: 'In Progress',
        date: '2023-12-01',
        customer: {
            name: 'John Doe',
            contact: '+91 9876543210',
            address: '123 Park Street, Bangalore 560001'
        },
        product: 'Samsung 55" Smart TV',
        modelNo: 'UA55TU8000',
        serialNo: 'SN2023TV8875',
        description: 'TV display showing vertical lines and color distortion',
        location: {
            latitude: 12.9716,
            longitude: 77.5946
        },
        serviceHistory: [
            {
                date: '2023-12-01 09:30 AM',
                status: 'Created',
                remarks: 'Service request registered'
            },
            {
                date: '2023-12-01 10:15 AM',
                status: 'Assigned',
                remarks: 'Assigned to engineer'
            }
        ],
        documents: [
            {
                type: 'Purchase Invoice',
                date: '2022-08-15',
                fileNo: 'INV2022081534'
            }
        ]
    },
    {
        id: 'SR002',
        type: 'Installation',
        status: 'Pending',
        date: '2023-12-01',
        customer: {
            name: 'Sarah Wilson',
            contact: '+91 9876543211',
            address: '456 MG Road, Bangalore 560002'
        },
        product: 'LG Split AC',
        modelNo: 'LS-Q18YNZA',
        serialNo: 'AC2023LS445',
        description: 'New AC installation with copper piping work',
        location: {
            latitude: 12.9698,
            longitude: 77.5946
        },
        serviceHistory: [
            {
                date: '2023-12-01 10:00 AM',
                status: 'Created',
                remarks: 'Installation request received'
            }
        ],
        documents: [
            {
                type: 'Purchase Invoice',
                date: '2023-11-30',
                fileNo: 'INV2023113056'
            }
        ]
    },
    {
        id: 'SR003',
        type: 'Maintenance',
        status: 'Pending',
        date: '2023-12-01',
        customer: {
            name: 'Michael Brown',
            contact: '+91 9876543212',
            address: '789 Residency Road, Bangalore 560025'
        },
        product: 'Whirlpool Refrigerator',
        modelNo: 'WRF535SMHZ',
        serialNo: 'RF2023WP789',
        description: 'Annual maintenance service due',
        location: {
            latitude: 12.9723,
            longitude: 77.6108
        },
        serviceHistory: [
            {
                date: '2023-12-01 11:30 AM',
                status: 'Created',
                remarks: 'Scheduled maintenance request'
            }
        ],
        documents: [
            {
                type: 'Warranty Card',
                date: '2023-01-15',
                fileNo: 'WAR2023011534'
            }
        ]
    },
    {
        id: 'SR004',
        type: 'Repair',
        status: 'In Progress',
        date: '2023-12-01',
        customer: {
            name: 'Emily Davis',
            contact: '+91 9876543213',
            address: '321 Infantry Road, Bangalore 560001'
        },
        product: 'Sony LED TV',
        modelNo: 'KD-55X80J',
        serialNo: 'TV2023SN556',
        description: 'No sound output from speakers',
        location: {
            latitude: 12.9757,
            longitude: 77.6074
        },
        serviceHistory: [
            {
                date: '2023-12-01 09:00 AM',
                status: 'Created',
                remarks: 'Service request registered'
            },
            {
                date: '2023-12-01 09:45 AM',
                status: 'Assigned',
                remarks: 'Assigned to senior technician'
            }
        ],
        documents: [
            {
                type: 'Service History',
                date: '2023-11-15',
                fileNo: 'SH2023111578'
            }
        ]
    },
    {
        id: 'SR005',
        type: 'Installation',
        status: 'Pending',
        date: '2023-12-01',
        customer: {
            name: 'Robert Taylor',
            contact: '+91 9876543214',
            address: '567 Church Street, Bangalore 560001'
        },
        product: 'Samsung Washing Machine',
        modelNo: 'WA65A4002VS',
        serialNo: 'WM2023SM445',
        description: 'New washing machine installation and demo',
        location: {
            latitude: 12.9697,
            longitude: 77.6076
        },
        serviceHistory: [
            {
                date: '2023-12-01 10:30 AM',
                status: 'Created',
                remarks: 'Installation request received'
            }
        ],
        documents: [
            {
                type: 'Purchase Invoice',
                date: '2023-11-30',
                fileNo: 'INV2023113078'
            }
        ]
    },
    // Tomorrow's requests
    {
        id: 'SR006',
        type: 'Repair',
        status: 'Scheduled',
        date: '2023-12-02',
        customer: {
            name: 'David Wilson',
            contact: '+91 9876543215',
            address: '789 Brigade Road, Bangalore 560001'
        },
        product: 'LG Microwave Oven',
        modelNo: 'MS2043DB',
        serialNo: 'MW2023LG334',
        description: 'Turntable not rotating',
        location: {
            latitude: 12.9697,
            longitude: 77.6076
        },
        serviceHistory: [
            {
                date: '2023-12-01 14:00 PM',
                status: 'Scheduled',
                remarks: 'Scheduled for tomorrow'
            }
        ],
        documents: [
            {
                type: 'Warranty Card',
                date: '2023-06-15',
                fileNo: 'WAR2023061545'
            }
        ]
    },
    {
        id: 'SR007',
        type: 'Installation',
        status: 'Scheduled',
        date: '2023-12-02',
        customer: {
            name: 'Jennifer Lee',
            contact: '+91 9876543216',
            address: '234 Richmond Road, Bangalore 560025'
        },
        product: 'Panasonic AC',
        modelNo: 'CS/CU-RU12XKYT',
        serialNo: 'AC2023PN778',
        description: 'New AC installation',
        location: {
            latitude: 12.9667,
            longitude: 77.6176
        },
        serviceHistory: [
            {
                date: '2023-12-01 15:30 PM',
                status: 'Scheduled',
                remarks: 'Installation scheduled for tomorrow'
            }
        ],
        documents: [
            {
                type: 'Purchase Invoice',
                date: '2023-12-01',
                fileNo: 'INV2023120145'
            }
        ]
    },
    {
        id: 'SR008',
        type: 'Repair',
        status: 'Scheduled',
        date: '2023-12-02',
        customer: {
            name: 'Thomas Anderson',
            contact: '+91 9876543217',
            address: '890 Commercial Street, Bangalore 560001'
        },
        product: 'Whirlpool Dishwasher',
        modelNo: 'WDF520PADM',
        serialNo: 'DW2023WP445',
        description: 'Water not draining properly',
        location: {
            latitude: 12.9784,
            longitude: 77.6088
        },
        serviceHistory: [
            {
                date: '2023-12-01 16:00 PM',
                status: 'Scheduled',
                remarks: 'Repair scheduled for tomorrow'
            }
        ],
        documents: [
            {
                type: 'Service History',
                date: '2023-11-15',
                fileNo: 'SH2023111589'
            }
        ]
    },
    {
        id: 'SR009',
        type: 'Maintenance',
        status: 'Scheduled',
        date: '2023-12-02',
        customer: {
            name: 'Lisa Martinez',
            contact: '+91 9876543218',
            address: '456 Cunningham Road, Bangalore 560052'
        },
        product: 'Samsung Refrigerator',
        modelNo: 'RF28T5021SR',
        serialNo: 'RF2023SM667',
        description: 'Regular maintenance check',
        location: {
            latitude: 12.9866,
            longitude: 77.5993
        },
        serviceHistory: [
            {
                date: '2023-12-01 14:30 PM',
                status: 'Scheduled',
                remarks: 'Maintenance scheduled for tomorrow'
            }
        ],
        documents: [
            {
                type: 'AMC Contract',
                date: '2023-01-01',
                fileNo: 'AMC2023010123'
            }
        ]
    },
    // Day after tomorrow's requests
    {
        id: 'SR010',
        type: 'Installation',
        status: 'Scheduled',
        date: '2023-12-03',
        customer: {
            name: 'William Turner',
            contact: '+91 9876543219',
            address: '123 Whitefield Main Road, Bangalore 560066'
        },
        product: 'LG Smart TV',
        modelNo: 'OLED65C1PUB',
        serialNo: 'TV2023LG889',
        description: 'New TV installation with wall mount',
        location: {
            latitude: 12.9698,
            longitude: 77.7499
        },
        serviceHistory: [
            {
                date: '2023-12-01 11:00 AM',
                status: 'Scheduled',
                remarks: 'Installation scheduled'
            }
        ],
        documents: [
            {
                type: 'Purchase Invoice',
                date: '2023-12-01',
                fileNo: 'INV2023120178'
            }
        ]
    },
    {
        id: 'SR011',
        type: 'Repair',
        status: 'Scheduled',
        date: '2023-12-03',
        customer: {
            name: 'Emma Thompson',
            contact: '+91 9876543220',
            address: '567 Airport Road, Bangalore 560017'
        },
        product: 'Bosch Washing Machine',
        modelNo: 'WAT28371GB',
        serialNo: 'WM2023BS445',
        description: 'Machine making loud noise during spin cycle',
        location: {
            latitude: 12.9499,
            longitude: 77.6809
        },
        serviceHistory: [
            {
                date: '2023-12-01 13:30 PM',
                status: 'Scheduled',
                remarks: 'Repair scheduled'
            }
        ],
        documents: [
            {
                type: 'Warranty Card',
                date: '2023-03-15',
                fileNo: 'WAR2023031567'
            }
        ]
    },
    {
        id: 'SR012',
        type: 'Maintenance',
        status: 'Scheduled',
        date: '2023-12-03',
        customer: {
            name: 'Daniel Clark',
            contact: '+91 9876543221',
            address: '890 Sarjapur Road, Bangalore 560035'
        },
        product: 'Hitachi AC',
        modelNo: 'RSOG518HDEA',
        serialNo: 'AC2023BS445',
        description: 'AC not working properly',
        location: {
            latitude: 12.9499,
            longitude: 77.6809
        },
        serviceHistory: [
            {
                date: '2023-12-01 14:30 PM',
                status: 'Scheduled',
                remarks: 'Repair scheduled'
            }
        ],
        documents: [
            {
                type: 'Warranty Card',
                date: '2023-03-15',
                fileNo: 'WAC2023031567'
            }
        ]
    }
];
let engineerLocation = [12.9716, 77.5946]; // Example location


// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Set today's date as default
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('serviceDate').value = today;
    loadServiceRequests(today);
});

// Load service requests for the selected date
function loadServiceRequests(date) {
    displayServiceRequests();
}

// Display service requests in the list
function displayServiceRequests() {
    // Use engineer's stored location instead of geolocation
    displayRequestsWithDistance(engineerLocation);
}

function displayRequestsWithDistance(engineerLocation) {
    const container = document.getElementById('serviceRequestsList');
    container.innerHTML = serviceRequests.map(request => {
        const customerLocation = getCustomerLocation(request);
        const distance = calculateDistance(
            engineerLocation[0], engineerLocation[1],
            customerLocation[0], customerLocation[1]
        );
        const isNearby = distance < 1;

        return `
        <div class="card mb-3">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <h6 class="card-subtitle text-muted">${request.id}</h6>
                    <span class="badge ${request.status === 'Completed' ? 'bg-success' : 'bg-warning'}">
                        ${request.status}
                    </span>
                </div>
                <h5 class="card-title">${request.type}</h5>
                <p class="card-text">
                    <small class="text-muted">Customer: ${request.customer.name}</small><br>
                    <small class="text-muted">Product: ${request.product}</small><br>
                    <small class="text-muted">Distance: ${distance.toFixed(2)} km</small>
                </p>
                <div class="btn-group w-100" role="group">
                    <button class="btn btn-outline-primary" onclick="callCustomer('${request.customer.contact}')">
                        <i class="bi bi-telephone"></i> Call
                    </button>
                    <button class="btn btn-outline-primary" onclick="window.open('https://maps.google.com/maps?q=${customerLocation[0]},${customerLocation[1]}','popUpWindow','height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no'); return false;">
                        <i class="bi bi-geo-alt"></i> Directions
                    </button>
                    <button class="btn btn-primary" onclick="window.location.href='engineer-service-details.html?id=${request.id}'">
                        <i class="bi bi-eye"></i> Details
                    </button>
                    ${isNearby ? `
                    <button class="btn btn-success" onclick="acceptService('${request.id}')">
                        <i class="bi bi-check-lg"></i> Accept
                    </button>
                    ` : ''}
                </div>
            </div>
        </div>
        `;
    }).join('');
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c; // Distance in km
}

function displayRequestsWithDistance(currentCoords) {
    const requestsList = document.getElementById('serviceRequestsList');
    requestsList.innerHTML = '';

    serviceRequests.forEach(request => {
        const customerLocation = getCustomerLocation(request);
        const distance = calculateDistance(
            currentCoords[0],
            currentCoords[1],
            request.location.latitude,
            request.location.longitude
        );
        const isNearby = distance < 1;

        const statusClass = request.status.toLowerCase() === 'accepted' ? 'bg-success' : 
                           request.status.toLowerCase() === 'in progress' ? 'bg-warning' : 'bg-primary';

        const acceptButtonHtml = request.status.toLowerCase() !== 'accepted' && distance <= 1 ? 
            `<button class="btn btn-success btn-sm" onclick="acceptService('${request.id}')">Accept</button>` : '';

        const requestCard = `
            <div class="card mb-3">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start">
                        <div>
                            <h5 class="card-title">${request.customer.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${request.product}</h6>
                        </div>
                        <span class="badge ${statusClass}">${request.status}</span>
                    </div>
                    <p class="card-text">${request.description}</p>
                    <p class="card-text"><small class="text-muted">Distance: ${distance.toFixed(1)} km</small></p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button class="btn btn-outline-primary" onclick="callCustomer('${request.customer.contact}')">
                                <i class="bi bi-telephone"></i> Call
                            </button>
                            <button class="btn btn-outline-primary" onclick="window.open('https://maps.google.com/maps?q=${customerLocation[0]},${customerLocation[1]}','popUpWindow','height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no'); return false;">
                                <i class="bi bi-geo-alt"></i> Directions
                            </button>
                            <button class="btn btn-primary" onclick="window.location.href='engineer-service-details.html?id=${request.id}'">
                                <i class="bi bi-eye"></i> Details
                            </button>
                            ${isNearby ? `
                            <button class="btn btn-success" onclick="acceptService('${request.id}')">
                                <i class="bi bi-check-lg"></i> Accept
                            </button>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
        requestsList.innerHTML += requestCard;
    });
}

function deg2rad(deg) {
    return deg * (Math.PI/180);
}

function acceptService(requestId) {
    // Find and update the service request status
    const request = serviceRequests.find(req => req.id === requestId);
    if (request) {
        request.status = 'Accepted';
        // Refresh the display to show updated status and hide accept button
        displayRequestsWithDistance([engineerLocation[0], engineerLocation[1]]);
    }
}

// Handle customer call
function callCustomer(phoneNumber) {
    window.location.href = `tel:${phoneNumber}`;
}

// Open map directions
function openDirections(lat, lng) {
    // Show the modal first
    const modal = new bootstrap.Modal(document.getElementById('mapDirectionsModal'));
    modal.show();

    // The map will be initialized by the show.bs.modal event listener
    // Add destination marker after map is initialized
    if (mapInstance) {
        const destinationMarker = L.marker([lat, lng], {
            title: 'Destination'
        }).addTo(mapInstance);
        markers.push(destinationMarker);

        // Get user's current location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const origin = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                // Add origin marker
                const originMarker = L.marker([origin.lat, origin.lng], {
                    title: 'Your Location'
                }).addTo(mapInstance);
                markers.push(originMarker);

                // Create a bounds object and fit the map to show both markers
                const bounds = L.latLngBounds(
                    [origin.lat, origin.lng],
                    [lat, lng]
                );
                mapInstance.fitBounds(bounds);

                // Open directions in user's default map app
                const directionLink = document.createElement('a');
                directionLink.href = `https://www.openstreetmap.org/directions?from=${origin.lat},${origin.lng}&to=${lat},${lng}`;
                directionLink.target = '_blank';
                directionLink.className = 'btn btn-primary mt-3 w-100';
                directionLink.innerHTML = '<i class="bi bi-sign-turn-right"></i> Get Directions';
                mapInstance.getContainer().appendChild(directionLink);
            });
        }
    }
}

// View service request details
function viewServiceDetails(requestId) {
    const request = serviceRequests.find(req => req.id === requestId);
    if (!request) return;

    // Helper function to safely update element text content
    const safeSetText = (elementId, text) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = text || '';
        }
    };

    // Update modal content with service request details
    safeSetText('modalRequestId', request.id);
    safeSetText('modalServiceType', request.type);
    safeSetText('modalStatus', request.status);
    safeSetText('modalCreatedDate', request.date);
    safeSetText('modalCustomerName', request.customer.name);
    safeSetText('modalCustomerContact', request.customer.contact);
    safeSetText('modalCustomerAddress', request.customer.address);
    safeSetText('modalProduct', request.product);
    safeSetText('modalSerialNumber', request.serialNo);
    safeSetText('modalIssueDescription', request.description);

    // Update service history
    const historyContainer = document.getElementById('modalServiceHistory');
    if (historyContainer && request.serviceHistory) {
        historyContainer.innerHTML = request.serviceHistory.map(history => `
            <tr>
                <td>${history.date}</td>
                <td>${history.status}</td>
                <td>${history.remarks}</td>
            </tr>
        `).join('');
    }

    // Update documents list
    const documentsContainer = document.getElementById('modalAttachments');
    if (documentsContainer && request.documents) {
        documentsContainer.innerHTML = request.documents.map(doc => `
            <div class="document-item d-flex justify-content-between align-items-center mb-2">
                <div>
                    <h6 class="mb-0">${doc.type}</h6>
                    <small class="text-muted">Date: ${doc.date}</small>
                </div>
                <button class="btn btn-sm btn-outline-primary" onclick="downloadDocument('${doc.fileNo}')">
                    Download
                </button>
            </div>
        `).join('');
    }

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('serviceDetailsModal'));
    modal.show();
}

// Download document (mock function)
function downloadDocument(fileNo) {
    // TODO: Implement actual document download functionality
    console.log(`Downloading document: ${fileNo}`);
    alert('Document download started...');
}


let mapInstance;
let markers = [];

// Initialize map when the directions modal is shown
document.getElementById('mapDirectionsModal').addEventListener('show.bs.modal', function () {
    const mapContainer = document.getElementById('map');
    
    // Clear existing map instance if it exists
    if (mapInstance) {
        mapInstance.remove();
    }
    
    // Initialize new map instance
    mapInstance = L.map(mapContainer).setView([0, 0], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(mapInstance);
    
    // Clear existing markers
    markers.forEach(marker => marker.remove());
    markers = [];
    customerLocation = getCustomerLocation(serviceRequests[0]);

    // Draw a line between the two points
    const routeLine = L.polyline([engineerLocation, customerLocation], {
        color: 'blue',
        weight: 3,
        opacity: 0.7
    }).addTo(map);

    markers.push(routeLine);
}, error => {
    console.error('Error getting location:', error);
    alert('Unable to get your current location. Please enable location services.');
});


// Helper function to get customer location (you'll need to implement this based on your data structure)
function getCustomerLocation(request) {
    // This is a placeholder - you should implement proper geocoding or use stored coordinates
    // For now, returning a dummy location near the engineer
    return [request.location.latitude || 0, request.location.longitude || 0];
}