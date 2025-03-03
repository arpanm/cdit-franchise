// Mock data for franchises
let franchises = [
    {
        id: 1,
        name: 'Franchise A',
        location: 'Mumbai',
        owner: 'John Doe',
        contact: '+91 9876543210',
        email: 'john@franchisea.com',
        brands: ['Samsung', 'LG'],
        languages: ['English', 'Hindi', 'Marathi'],
        address: '123 Main St, Mumbai',
        performanceScore: 85,
        status: 'active',
        gst_number: '27AABCU9603R1ZX',
        registration_number: 'U74999MH2020PTC123456',
        documents: {
            address_proof: { name: 'rent_agreement.pdf', type: 'application/pdf', size: 2048576 },
            registration_proof: { name: 'incorporation_cert.pdf', type: 'application/pdf', size: 1536870 },
            cancelled_cheque: { name: 'hdfc_cheque.jpg', type: 'image/jpeg', size: 512000 },
            additional_images: [
                { name: 'shop_front.jpg', type: 'image/jpeg', size: 1048576 },
                { name: 'interior.jpg', type: 'image/jpeg', size: 1048576 }
            ]
        }
    },
    {
        id: 2,
        name: 'Franchise B',
        location: 'Delhi',
        owner: 'Jane Smith',
        contact: '+91 9876543211',
        email: 'jane@franchiseb.com',
        brands: ['LG', 'Whirlpool'],
        languages: ['English', 'Hindi', 'Punjabi'],
        address: '456 Park Ave, Delhi',
        performanceScore: 92,
        status: 'active',
        gst_number: '07AADCB2230M1ZR',
        registration_number: 'U74999DL2019PTC987654',
        documents: {
            address_proof: { name: 'property_deed.pdf', type: 'application/pdf', size: 3145728 },
            registration_proof: { name: 'company_cert.pdf', type: 'application/pdf', size: 2097152 },
            cancelled_cheque: { name: 'sbi_cheque.jpg', type: 'image/jpeg', size: 524288 },
            additional_images: [
                { name: 'store_front.jpg', type: 'image/jpeg', size: 2097152 },
                { name: 'warehouse.jpg', type: 'image/jpeg', size: 1572864 }
            ]
        }
    },
    {
        id: 3,
        name: 'Franchise C',
        location: 'Bangalore',
        owner: 'Mike Johnson',
        contact: '+91 9876543212',
        email: 'mike@franchisec.com',
        brands: ['Samsung', 'LG'],
        languages: ['English', 'Kannada', 'Telugu'],
        address: '789 Tech Park, Bangalore',
        performanceScore: 78,
        status: 'pending',
        gst_number: '29AADFR8794B1ZQ',
        registration_number: 'U74999KA2021PTC654321',
        documents: {
            address_proof: { name: 'lease_agreement.pdf', type: 'application/pdf', size: 1835008 },
            registration_proof: { name: 'registration_doc.pdf', type: 'application/pdf', size: 1572864 },
            cancelled_cheque: { name: 'icici_cheque.jpg', type: 'image/jpeg', size: 491520 },
            additional_images: [
                { name: 'office_space.jpg', type: 'image/jpeg', size: 1835008 }
            ]
        }
    },
    {
        id: 4,
        name: 'Franchise D',
        location: 'Chennai',
        owner: 'Sarah Wilson',
        contact: '+91 9876543213',
        email: 'sarah@franchised.com',
        brands: ['Samsung', 'Whirlpool'],
        address: '321 Beach Road, Chennai',
        performanceScore: 45,
        status: 'disabled',
        gst_number: '33AADCS4325K1ZR',
        registration_number: 'U74999TN2019PTC234567',
        documents: {
            address_proof: { name: 'rental_agreement.pdf', type: 'application/pdf', size: 1572864 },
            registration_proof: { name: 'company_registration.pdf', type: 'application/pdf', size: 2097152 },
            cancelled_cheque: { name: 'axis_cheque.jpg', type: 'image/jpeg', size: 524288 },
            additional_images: [
                { name: 'shop_exterior.jpg', type: 'image/jpeg', size: 1835008 }
            ]
        }
    },
    {
        id: 5,
        name: 'Franchise E',
        location: 'Mumbai',
        owner: 'David Brown',
        contact: '+91 9876543214',
        email: 'david@franchisee.com',
        brands: ['LG', 'Whirlpool'],
        address: '567 Link Road, Mumbai',
        performanceScore: 88,
        status: 'active',
        gst_number: '27AABCE9245P1ZX',
        registration_number: 'U74999MH2021PTC345678',
        documents: {
            address_proof: { name: 'ownership_deed.pdf', type: 'application/pdf', size: 2359296 },
            registration_proof: { name: 'incorporation_document.pdf', type: 'application/pdf', size: 1835008 },
            cancelled_cheque: { name: 'yes_bank_cheque.jpg', type: 'image/jpeg', size: 491520 },
            additional_images: [
                { name: 'store_interior.jpg', type: 'image/jpeg', size: 2097152 },
                { name: 'store_exterior.jpg', type: 'image/jpeg', size: 1835008 }
            ]
        }
    },
    {
        id: 6,
        name: 'Franchise F',
        location: 'Delhi',
        owner: 'Lisa Anderson',
        contact: '+91 9876543215',
        email: 'lisa@franchisef.com',
        brands: ['Samsung', 'LG'],
        address: '890 Mall Road, Delhi',
        performanceScore: 62,
        status: 'pending',
        gst_number: '07AADCL4567M1ZX',
        registration_number: 'U74999DL2022PTC456789',
        documents: {
            address_proof: { name: 'lease_deed.pdf', type: 'application/pdf', size: 1835008 },
            registration_proof: { name: 'company_docs.pdf', type: 'application/pdf', size: 2097152 },
            cancelled_cheque: { name: 'hdfc_cheque.jpg', type: 'image/jpeg', size: 524288 },
            additional_images: [
                { name: 'store_front_view.jpg', type: 'image/jpeg', size: 1835008 },
                { name: 'store_interior.jpg', type: 'image/jpeg', size: 2097152 }
            ]
        }
    },
    {
        id: 7,
        name: 'Franchise G',
        location: 'Bangalore',
        owner: 'Tom Davis',
        contact: '+91 9876543216',
        email: 'tom@franchiseg.com',
        brands: ['Samsung', 'Whirlpool'],
        address: '432 MG Road, Bangalore',
        performanceScore: 95,
        status: 'active'
    },
    {
        id: 8,
        name: 'Franchise H',
        location: 'Chennai',
        owner: 'Emma White',
        contact: '+91 9876543217',
        email: 'emma@franchiseh.com',
        brands: ['LG', 'Whirlpool'],
        address: '765 Anna Salai, Chennai',
        performanceScore: 55,
        status: 'disabled'
    },
    {
        id: 9,
        name: 'Franchise I',
        location: 'Mumbai',
        owner: 'Chris Lee',
        contact: '+91 9876543218',
        email: 'chris@franchisei.com',
        brands: ['Samsung', 'LG'],
        address: '234 SV Road, Mumbai',
        performanceScore: 72,
        status: 'active'
    },
    {
        id: 10,
        name: 'Franchise J',
        location: 'Delhi',
        owner: 'Rachel Green',
        contact: '+91 9876543219',
        email: 'rachel@franchisej.com',
        brands: ['Samsung', 'Whirlpool'],
        address: '876 Ring Road, Delhi',
        performanceScore: 68,
        status: 'pending'
    }
];

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    updateDashboardStats();
    populateLocationFilter();
    renderFranchiseTable();
});

// Update dashboard statistics
function updateDashboardStats() {
    document.getElementById('totalFranchises').textContent = franchises.length;
    document.getElementById('activeFranchises').textContent = 
        franchises.filter(f => f.status === 'active').length;
    document.getElementById('pendingApprovals').textContent = 
        franchises.filter(f => f.status === 'pending').length;
    document.getElementById('disabledFranchises').textContent = 
        franchises.filter(f => f.status === 'disabled').length;
}

// Populate location filter with unique locations
function populateLocationFilter() {
    const locations = [...new Set(franchises.map(f => f.location))];
    const locationFilter = document.getElementById('locationFilter');
    
    locations.forEach(location => {
        const option = document.createElement('option');
        option.value = location;
        option.textContent = location;
        locationFilter.appendChild(option);
    });
}

// Apply filters to franchise table
function applyFilters() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const location = document.getElementById('locationFilter').value;
    const status = document.getElementById('statusFilter').value;
    const performance = document.getElementById('performanceFilter').value;

    const filteredFranchises = franchises.filter(franchise => {
        const searchMatch = searchQuery === '' || 
            franchise.name.toLowerCase().includes(searchQuery) || 
            franchise.id.toString().includes(searchQuery);
        const locationMatch = location === 'all' || franchise.location === location;
        const statusMatch = status === 'all' || franchise.status === status;
        const performanceMatch = performance === 'all' || getPerformanceLevel(franchise.performanceScore) === performance;
        
        return searchMatch && locationMatch && statusMatch && performanceMatch;
    });

    renderFranchiseTable(filteredFranchises);
}

// Add event listeners for dynamic filtering
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchInput').addEventListener('input', applyFilters);
    document.getElementById('locationFilter').addEventListener('change', applyFilters);
    document.getElementById('statusFilter').addEventListener('change', applyFilters);
    document.getElementById('performanceFilter').addEventListener('change', applyFilters);
});

// Get performance level based on score
function getPerformanceLevel(score) {
    if (score >= 80) return 'high';
    if (score >= 60) return 'medium';
    return 'low';
}

// Render franchise table
function renderFranchiseTable(data = franchises) {
    const tableBody = document.getElementById('franchiseTable');
    tableBody.innerHTML = '';

    data.forEach(franchise => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${franchise.name}</td>
            <td>${franchise.location}</td>
            <td>${franchise.owner}</td>
            <td>${franchise.contact}</td>
            <td>${franchise.status === 'pending' ? `
                <div class="text-muted">N/A</div>
            ` : `
                <div class="progress" style="height: 20px;">
                    <div class="progress-bar ${getPerformanceColorClass(franchise.performanceScore)}" 
                         role="progressbar" 
                         style="width: ${franchise.performanceScore}%"
                         aria-valuenow="${franchise.performanceScore}" 
                         aria-valuemin="0" 
                         aria-valuemax="100">
                        ${franchise.performanceScore}%
                    </div>
                </div>
            `}</td>
            <td>
                <span class="badge ${getStatusBadgeClass(franchise.status)}">
                    ${franchise.status.charAt(0).toUpperCase() + franchise.status.slice(1)}
                </span>
            </td>
            <td>
                <button class="btn btn-sm btn-info me-1" onclick="viewFranchise(${franchise.id})">
                    <i class="bi bi-eye"></i>
                </button>
                ${franchise.status === 'pending' ? `
                    <button class="btn btn-sm btn-success me-1" onclick="approveFranchise(${franchise.id})">
                        <i class="bi bi-check-lg"></i>
                    </button>
                ` : ''}
                ${franchise.status === 'active' ? `
                    <button class="btn btn-sm btn-danger" onclick="disableFranchise(${franchise.id})">
                        <i class="bi bi-x-lg"></i>
                    </button>
                ` : ''}
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Get performance color class
function getPerformanceColorClass(score) {
    if (score >= 80) return 'bg-success';
    if (score >= 60) return 'bg-warning';
    return 'bg-danger';
}

// Get status badge class
function getStatusBadgeClass(status) {
    switch (status) {
        case 'active': return 'bg-success';
        case 'pending': return 'bg-warning';
        case 'disabled': return 'bg-danger';
        default: return 'bg-secondary';
    }
}

// Submit new franchise
// Initialize Select2 for brand selection
function initializeBrandSelect() {
    $('.select2-multiple').select2({
        tags: true,
        tokenSeparators: [',', ' '],
        placeholder: 'Select or type brands...',
        allowClear: true
    });
}

// Call initialization when document is ready
$(document).ready(function() {
    initializeBrandSelect();
});

function submitFranchise() {
    const form = document.getElementById('addFranchiseForm');
    const formData = new FormData(form);
    const franchiseData = {
        id: franchises.length + 1,
        status: 'pending',
        brands: [],
        languages: [],
        documents: {}
    };

    // Handle file uploads
    const fileFields = ['address_proof', 'registration_proof', 'cancelled_cheque'];
    fileFields.forEach(field => {
        const file = formData.get(field);
        if (file instanceof File) {
            franchiseData.documents[field] = {
                name: file.name,
                type: file.type,
                size: file.size
            };
        }
    });

    // Handle additional images
    const additionalImages = formData.getAll('additional_images[]');
    franchiseData.documents.additional_images = additionalImages
        .filter(file => file instanceof File)
        .map(file => ({
            name: file.name,
            type: file.type,
            size: file.size
        }));

    // Handle other form fields
    for (const [key, value] of formData.entries()) {
        if (!fileFields.includes(key) && key !== 'additional_images[]') {
            if (key === 'brands[]') {
                franchiseData.brands.push(value);
            } else {
                franchiseData[key] = value;
            }
        }
    }

    franchises.push(franchiseData);
    updateDashboardStats();
    renderFranchiseTable();

    // Close modal and reset form
    const modal = bootstrap.Modal.getInstance(document.getElementById('addFranchiseModal'));
    modal.hide();
    form.reset();
}

// View franchise details
function viewFranchise(id) {
    const franchise = franchises.find(f => f.id === id);
    const form = document.getElementById('viewFranchiseForm');
    form.innerHTML = `
        <div class="row mb-3">
            <div class="col-md-6">
                <label class="form-label">Franchise Name</label>
                <input type="text" class="form-control" name="name" value="${franchise.name}" readonly>
            </div>
            <div class="col-md-6">
                <label class="form-label">Location</label>
                <input type="text" class="form-control" name="location" value="${franchise.location}" readonly>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-md-6">
                <label class="form-label">Owner Name</label>
                <input type="text" class="form-control" name="owner" value="${franchise.owner}" readonly>
            </div>
            <div class="col-md-6">
                <label class="form-label">Contact Number</label>
                <input type="tel" class="form-control" name="contact" value="${franchise.contact}" readonly>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-md-6">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" name="email" value="${franchise.email}" readonly>
            </div>
            <div class="col-md-6">
                <label class="form-label">Brand</label>
                <select class="form-select select2-multiple" name="brands[]" multiple readonly>
                    <option value="Samsung" ${franchise.brands.includes('Samsung') ? 'selected' : ''}>Samsung</option>
                    <option value="LG" ${franchise.brands.includes('LG') ? 'selected' : ''}>LG</option>
                    <option value="Whirlpool" ${franchise.brands.includes('Whirlpool') ? 'selected' : ''}>Whirlpool</option>
                </select>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-md-12">
                <label class="form-label">Languages</label>
                <select class="form-select select2-multiple" name="languages[]" multiple readonly>
                    <option value="English" ${franchise.languages?.includes('English') ? 'selected' : ''}>English</option>
                    <option value="Hindi" ${franchise.languages?.includes('Hindi') ? 'selected' : ''}>Hindi</option>
                    <option value="Marathi" ${franchise.languages?.includes('Marathi') ? 'selected' : ''}>Marathi</option>
                    <option value="Punjabi" ${franchise.languages?.includes('Punjabi') ? 'selected' : ''}>Punjabi</option>
                    <option value="Gujarati" ${franchise.languages?.includes('Gujarati') ? 'selected' : ''}>Gujarati</option>
                    <option value="Bengali" ${franchise.languages?.includes('Bengali') ? 'selected' : ''}>Bengali</option>
                    <option value="Kannada" ${franchise.languages?.includes('Kannada') ? 'selected' : ''}>Kannada</option>
                    <option value="Telugu" ${franchise.languages?.includes('Telugu') ? 'selected' : ''}>Telugu</option>
                    <option value="Tamil" ${franchise.languages?.includes('Tamil') ? 'selected' : ''}>Tamil</option>
                    <option value="Malayalam" ${franchise.languages?.includes('Malayalam') ? 'selected' : ''}>Malayalam</option>
                </select>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-md-6">
                <label class="form-label">GST Number</label>
                <input type="text" class="form-control" name="gst_number" value="${franchise.gst_number}" pattern="^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$" readonly>
            </div>
            <div class="col-md-6">
                <label class="form-label">Company Registration Number</label>
                <input type="text" class="form-control" name="registration_number" value="${franchise.registration_number}" readonly>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-md-12">
                <label class="form-label">Address</label>
                <textarea class="form-control" name="address" rows="3" readonly>${franchise.address}</textarea>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-md-12">
                <label class="form-label">Uploaded Documents</label>
                <div class="list-group">
                    ${franchise.documents ? Object.entries(franchise.documents).map(([key, doc]) => {
                        if (key === 'additional_images' && Array.isArray(doc)) {
                            return doc.map((img, index) => 
                                `<a href="#" class="list-group-item list-group-item-action">
                                    <i class="bi bi-image me-2"></i>
                                    <strong>Additional Image ${index + 1}:</strong> 
                                    ${img.name} (${(img.size / 1024).toFixed(2)} KB)
                                </a>`
                            ).join('');
                        }
                        return doc ? `<a href="#" class="list-group-item list-group-item-action">
                            <i class="bi bi-file-earmark me-2"></i>
                            <strong>${key.replace(/_/g, ' ').toUpperCase()}:</strong> 
                            ${doc.name} (${(doc.size / 1024).toFixed(2)} KB)
                        </a>` : '';
                    }).join('') : '<div class="list-group-item">No documents uploaded</div>'}
                </div>
            </div>
        </div>
    `;

    const modal = new bootstrap.Modal(document.getElementById('viewFranchiseModal'));
    modal.show();

    // Store franchise ID for edit functionality
    form.dataset.franchiseId = id;
}

// Enable edit mode
document.getElementById('editFranchiseBtn').addEventListener('click', function() {
    const form = document.getElementById('viewFranchiseForm');
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => input.readOnly = false);

    this.classList.add('d-none');
    document.getElementById('saveFranchiseBtn').classList.remove('d-none');
});

// Save franchise changes
document.getElementById('saveFranchiseBtn').addEventListener('click', function() {
    const form = document.getElementById('viewFranchiseForm');
    const id = parseInt(form.dataset.franchiseId);
    const franchise = franchises.find(f => f.id === id);

    const formData = new FormData(form);
    for (const [key, value] of formData.entries()) {
        franchise[key] = value;
    }

    renderFranchiseTable();

    // Reset view mode
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => input.readOnly = true);

    this.classList.add('d-none');
    document.getElementById('editFranchiseBtn').classList.remove('d-none');
});

// Approve franchise
function approveFranchise(id) {
    const franchise = franchises.find(f => f.id === id);
    franchise.status = 'active';
    updateDashboardStats();
    renderFranchiseTable();
}

// Disable franchise
function disableFranchise(id) {
    if (confirm('Are you sure you want to disable this franchise?')) {
        const franchise = franchises.find(f => f.id === id);
        franchise.status = 'disabled';
        updateDashboardStats();
        renderFranchiseTable();
    }
}