class EngineerManager {
    constructor() {
        this.engineers = [
            {
                id: 'ENG001',
                name: 'Mike Tech',
                location: 'Mumbai',
                skills: ['AC', 'Refrigerator'],
                availability: true,
                rating: 4.5,
                completedJobs: 150
            },
            {
                id: 'ENG002',
                name: 'Sarah Fix',
                location: 'Delhi',
                skills: ['Washing Machine', 'Microwave'],
                availability: true,
                rating: 4.8,
                completedJobs: 200
            },
            {
                id: 'ENG003',
                name: 'John Tech',
                location: 'Bangalore',
                skills: ['AC', 'TV'],
                availability: false,
                rating: 4.2,
                completedJobs: 120
            }
        ];
    }

    updateEngineerList() {
        const engineerList = document.getElementById('engineerList');
        if (!engineerList) return;

        engineerList.innerHTML = '';
        
        this.engineers.forEach(engineer => {
            const card = document.createElement('div');
            card.className = 'engineer-card';
            card.dataset.engineerId = engineer.id;
            
            card.innerHTML = `
                <div class="d-flex justify-content-between align-items-start">
                    <div>
                        <h6>${engineer.name}</h6>
                        <p class="text-muted mb-1">${engineer.location}</p>
                        <p class="mb-1"><small>Skills: ${engineer.skills.join(', ')}</small></p>
                        <div class="d-flex align-items-center">
                            <span class="text-warning me-1">★</span>
                            <small>${engineer.rating} (${engineer.completedJobs} jobs)</small>
                        </div>
                    </div>
                    <span class="badge ${engineer.availability ? 'bg-success' : 'bg-danger'}">
                        ${engineer.availability ? 'Available' : 'Busy'}
                    </span>
                </div>
            `;

            card.addEventListener('click', () => {
                document.querySelectorAll('.engineer-card').forEach(c => c.classList.remove('selected'));
                if (engineer.availability) {
                    card.classList.add('selected');
                }
            });

            engineerList.appendChild(card);
        });
    }

    filterEngineers() {
        const location = document.getElementById('locationFilter').value;
        const skill = document.getElementById('skillFilter').value;
        const availability = document.getElementById('availabilityFilter').value;

        this.engineers.forEach(engineer => {
            const card = document.querySelector(`[data-engineer-id="${engineer.id}"]`);
            if (!card) return;

            const locationMatch = location === 'all' || engineer.location === location;
            const skillMatch = skill === 'all' || engineer.skills.includes(skill);
            const availabilityMatch = availability === 'all' || 
                (availability === 'available' && engineer.availability) ||
                (availability === 'busy' && !engineer.availability);

            card.style.display = locationMatch && skillMatch && availabilityMatch ? 'block' : 'none';
        });
    }
}