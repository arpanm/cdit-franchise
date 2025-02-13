// Mock data for franchises
const franchises = [
    {
        id: 'f1',
        name: 'Mumbai Central Franchise',
        location: 'Mumbai',
        brands: ['samsung', 'lg', 'whirlpool'],
        nps: 4.5
    },
    {
        id: 'f2',
        name: 'Delhi North Franchise',
        location: 'Delhi',
        brands: ['samsung', 'whirlpool'],
        nps: 4.2
    },
    {
        id: 'f3',
        name: 'Bangalore Tech Franchise',
        location: 'Bangalore',
        brands: ['lg', 'whirlpool'],
        nps: 4.8
    }
];

// Initialize franchise selector
function initializeFranchiseSelector() {
    populateFilters();
    attachEventListeners();
    renderFranchiseList(franchises);
}

// Populate filter dropdowns
function populateFilters() {
    const locations = [...new Set(franchises.map(f => f.location))];
    const brands = [...new Set(franchises.flatMap(f => f.brands))];

    const locationFilter = document.getElementById('franchiseLocationFilter');
    const brandFilter = document.getElementById('franchiseBrandFilter');

    // Populate locations
    locations.forEach(location => {
        const option = document.createElement('option');
        option.value = location;
        option.textContent = location;
        locationFilter.appendChild(option);
    });

    // Populate brands
    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand.charAt(0).toUpperCase() + brand.slice(1);
        brandFilter.appendChild(option);
    });
}

// Attach event listeners
function attachEventListeners() {
    const locationFilter = document.getElementById('franchiseLocationFilter');
    const brandFilter = document.getElementById('franchiseBrandFilter');
    const searchInput = document.getElementById('franchiseSearch');

    locationFilter.addEventListener('change', applyFilters);
    brandFilter.addEventListener('change', applyFilters);
    searchInput.addEventListener('input', applyFilters);
}

// Apply filters and search
function applyFilters() {
    const location = document.getElementById('franchiseLocationFilter').value;
    const brand = document.getElementById('franchiseBrandFilter').value;
    const searchQuery = document.getElementById('franchiseSearch').value.toLowerCase();

    const filteredFranchises = franchises.filter(franchise => {
        const locationMatch = location === 'all' || franchise.location === location;
        const brandMatch = brand === 'all' || franchise.brands.includes(brand);
        const searchMatch = franchise.name.toLowerCase().includes(searchQuery);

        return locationMatch && brandMatch && searchMatch;
    });

    renderFranchiseList(filteredFranchises);
}

// Render franchise list
function renderFranchiseList(franchises) {
    const franchiseList = document.getElementById('franchiseList');
    franchiseList.innerHTML = '';

    franchises.forEach(franchise => {
        const item = document.createElement('div');
        item.className = 'list-group-item';
        item.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h6 class="mb-1">${franchise.name}</h6>
                    <small class="text-muted">
                        Location: ${franchise.location} | 
                        Brands: ${franchise.brands.join(', ')} | 
                        NPS: ${franchise.nps}
                    </small>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="${franchise.id}" 
                           id="franchise-${franchise.id}">
                </div>
            </div>
        `;
        franchiseList.appendChild(item);
    });
}

// Get selected franchises
function getSelectedFranchises() {
    const checkboxes = document.querySelectorAll('#franchiseList input[type="checkbox"]:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

// Initialize when document is ready
document.addEventListener('DOMContentLoaded', initializeFranchiseSelector);