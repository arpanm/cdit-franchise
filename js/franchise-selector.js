// Mock data for franchises
const franchises = [
    {
        id: 'franchise1',
        name: 'Mumbai Central Franchise',
        location: 'Mumbai',
        brands: ['samsung', 'lg', 'whirlpool'],
        languages: ['English', 'Hindi', 'Marathi'],
        nps: 4.5
    },
    {
        id: 'franchise2',
        name: 'Delhi North Franchise',
        location: 'Delhi',
        brands: ['samsung', 'whirlpool'],
        languages: ['English', 'Hindi', 'Punjabi'],
        nps: 4.2
    },
    {
        id: 'franchise3',
        name: 'Bangalore Tech Franchise',
        location: 'Bangalore',
        brands: ['lg', 'whirlpool'],
        languages: ['English', 'Kannada', 'Tamil'],
        nps: 4.8
    }
];

// Initialize franchise selector
function initializeFranchiseSelector() {
    populateFilters('franchiseLocationFilter', 'franchiseBrandFilter', 'franchiseLanguageFilter');
    populateFilters('editFranchiseLocationFilter', 'editFranchiseBrandFilter', 'editFranchiseLanguageFilter');
    attachEventListeners('franchiseLocationFilter', 'franchiseBrandFilter', 'franchiseLanguageFilter', 'franchiseSearch');
    attachEventListeners('editFranchiseLocationFilter', 'editFranchiseBrandFilter', 'editFranchiseLanguageFilter', 'editFranchiseSearch');
    renderFranchiseList(franchises, 'franchiseList');
    renderFranchiseList(franchises, 'editFranchiseList');
}

// Populate filter dropdowns
function populateFilters(locationFilterName, brandFilterName, languageFilterName) {
    const locations = [...new Set(franchises.map(f => f.location))];
    const brands = [...new Set(franchises.flatMap(f => f.brands))];
    const languages = [...new Set(franchises.flatMap(f => f.languages))];

    const locationFilter = document.getElementById(locationFilterName);
    const brandFilter = document.getElementById(brandFilterName);
    const languageFilter = document.getElementById(languageFilterName);

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

    // Populate languages
    languages.forEach(language => {
        const option = document.createElement('option');
        option.value = language;
        option.textContent = language;
        languageFilter.appendChild(option);
    });
}

// Attach event listeners
function attachEventListeners(locationFilterName, brandFilterName, languageFilterName, searchFilterName) {
    const locationFilter = document.getElementById(locationFilterName);
    const brandFilter = document.getElementById(brandFilterName);
    const languageFilter = document.getElementById(languageFilterName);
    const searchInput = document.getElementById(searchFilterName);

    locationFilter.addEventListener('change', applyFilters);
    brandFilter.addEventListener('change', applyFilters);
    languageFilter.addEventListener('change', applyFilters);
    searchInput.addEventListener('input', applyFilters);
}

// Apply filters and search
function applyFilters() {
    if (this.id.startsWith("edit")) {
        applyFiltersImpl('editFranchiseLocationFilter', 'editFranchiseBrandFilter', 'editFranchiseLanguageFilter', 'editFranchiseSearch', 'editFranchiseList');
    } else {
        applyFiltersImpl('franchiseLocationFilter', 'franchiseBrandFilter', 'franchiseLanguageFilter', 'franchiseSearch', 'franchiseList');
    }
}

function applyFiltersImpl(locationFilterName, brandFilterName, languageFilterName, searchFilterName, franchileListName) {
    const locationFilter = document.getElementById(locationFilterName);
    const brandFilter = document.getElementById(brandFilterName);
    const languageFilter = document.getElementById(languageFilterName);
    const searchInput = document.getElementById(searchFilterName);

    if (!locationFilter || !brandFilter || !languageFilter || !searchInput) {
        console.warn('One or more filter elements not found');
        return;
    }

    const location = locationFilter.value;
    const brand = brandFilter.value;
    const language = languageFilter.value;
    const searchQuery = searchInput.value.toLowerCase();

    const filteredFranchises = franchises.filter(franchise => {
        const locationMatch = location === 'all' || franchise.location === location;
        const brandMatch = brand === 'all' || franchise.brands.includes(brand);
        const languageMatch = language === 'all' || franchise.languages.includes(language);
        const searchMatch = franchise.name.toLowerCase().includes(searchQuery);

        return locationMatch && brandMatch && languageMatch && searchMatch;
    });

    renderFranchiseList(filteredFranchises, franchileListName);
}

// Render franchise list
function renderFranchiseList(franchises, franchileListName) {
    const franchiseList = document.getElementById(franchileListName);
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
                        Languages: ${franchise.languages.join(', ')} | 
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