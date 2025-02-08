// Warranty plans data
const warrantyPlans = [
    {
        id: 1,
        duration: '1 Year',
        price: 2999,
        coverage: ['All Parts & Labor', '24/7 Support', 'Free Service Visits'],
        description: 'Basic coverage for essential appliance protection'
    },
    {
        id: 2,
        duration: '2 Years',
        price: 4999,
        coverage: ['All Parts & Labor', '24/7 Priority Support', 'Free Service Visits', 'Accidental Damage'],
        description: 'Extended coverage with additional benefits'
    },
    {
        id: 3,
        duration: '3 Years',
        price: 6999,
        coverage: ['All Parts & Labor', '24/7 Premium Support', 'Unlimited Service Visits', 'Accidental Damage', 'Free Replacement'],
        description: 'Comprehensive coverage for complete peace of mind'
    }
];

// Function to populate warranty plans in the modal
function populateWarrantyPlans() {
    const warrantyPlansContainer = document.getElementById('warrantyPlans');
    warrantyPlansContainer.innerHTML = '';

    warrantyPlans.forEach(plan => {
        const planCard = document.createElement('div');
        planCard.className = 'col-md-4';
        planCard.innerHTML = `
            <div class="card h-100 warranty-plan" data-plan-id="${plan.id}">
                <div class="card-body">
                    <h5 class="card-title">${plan.duration} Extended Warranty</h5>
                    <h6 class="card-subtitle mb-2 text-primary">₹${plan.price}</h6>
                    <p class="card-text">${plan.description}</p>
                    <ul class="list-unstyled">
                        ${plan.coverage.map(item => `<li><i class="bi bi-check-circle-fill text-success me-2"></i>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="card-footer bg-transparent border-top-0 text-center">
                    <button class="btn btn-outline-primary select-plan-btn" onclick="selectWarrantyPlan(${plan.id})">Select Plan</button>
                </div>
            </div>
        `;
        warrantyPlansContainer.appendChild(planCard);
    });
}

// Function to handle plan selection
function selectWarrantyPlan(planId) {
    // Remove selection from all plans
    document.querySelectorAll('.warranty-plan').forEach(plan => {
        plan.classList.remove('border-primary');
        plan.querySelector('.select-plan-btn').classList.remove('btn-primary');
        plan.querySelector('.select-plan-btn').classList.add('btn-outline-primary');
    });

    // Add selection to chosen plan
    const selectedPlan = document.querySelector(`.warranty-plan[data-plan-id="${planId}"]`);
    if (selectedPlan) {
        selectedPlan.classList.add('border-primary');
        const selectBtn = selectedPlan.querySelector('.select-plan-btn');
        selectBtn.classList.remove('btn-outline-primary');
        selectBtn.classList.add('btn-primary');
    }

    // Enable the send payment link button
    document.getElementById('sendWarrantyPaymentLink').disabled = false;
}

// Initialize warranty plans when the modal is shown
document.getElementById('extendedWarrantyModal').addEventListener('show.bs.modal', function () {
    populateWarrantyPlans();
});

// Reset selection when modal is hidden
document.getElementById('extendedWarrantyModal').addEventListener('hide.bs.modal', function () {
    document.getElementById('sendWarrantyPaymentLink').disabled = true;
});

// Handle send payment link button click
document.getElementById('sendWarrantyPaymentLink').addEventListener('click', function() {
    const selectedPlan = document.querySelector('.warranty-plan.border-primary');
    if (selectedPlan) {
        const planId = selectedPlan.dataset.planId;
        const plan = warrantyPlans.find(p => p.id === parseInt(planId));
        
        // Update warranty status to Payment Pending
        document.getElementById('extendedWarrantyStatus').innerHTML = '<span class="badge bg-warning">Payment Pending</span>';
        
        // TODO: Implement payment link generation and sending logic
        console.log('Sending payment link for plan:', plan);
        
        // Close the modal after sending payment link
        const modal = bootstrap.Modal.getInstance(document.getElementById('extendedWarrantyModal'));
        modal.hide();
    }
});