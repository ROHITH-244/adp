document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider-container input[type="range"]');
    const valueDisplays = document.querySelectorAll('.slider-container span');
    const submitJobButton = document.getElementById('submitJob');
    const criteriaEvaluation = document.getElementById('criteriaEvaluation');
    const saveAndPostButton = document.getElementById('saveAndPost'); // Get the button

    // Function to update slider values and displays
    function updateSliders() {
        let totalValue = 0;
        sliders.forEach(slider => {
            totalValue += parseInt(slider.value, 10);
        });

        if (totalValue > 100) {
            // Calculate adjustment factor (ensuring it's not dividing by zero)
            const adjustmentFactor = totalValue === 0 ? 0 : 100 / totalValue; 

            sliders.forEach(slider => {
                const newValue = Math.round(parseInt(slider.value, 10) * adjustmentFactor);
                slider.value = newValue; // Update slider
                valueDisplays[Array.from(sliders).indexOf(slider)].textContent = newValue; // Update display
            });
        } else {
            // Just update displays if total is <= 100
            sliders.forEach((slider, index) => {
                valueDisplays[index].textContent = slider.value;
            });
        }
    }

    // Attach event listeners to all sliders
    sliders.forEach(slider => {
        slider.addEventListener('input', updateSliders);
    });

    // Show Criteria Evaluation on button click and hide job details
    submitJobButton.addEventListener('click', () => {
        criteriaEvaluation.style.display = 'block';
        document.querySelector('.container').style.display = 'none';
    });

    // Add functionality to the "Save and Post" button to save/post data.
    saveAndPostButton.addEventListener('click', () => {
        // Logic to save and post the criteria data
        console.log("Saving and posting criteria data...");
        
        // Retrieve the values from the sliders
        const criteriaValues = {};
        sliders.forEach((slider, index) => {
            criteriaValues[slider.id] = parseInt(slider.value, 10);
        });

        // Example: Sending data to the server (replace with your actual logic)
        fetch('/save_criteria', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(criteriaValues),
        })
        .then(response => response.json())
        .then(data => console.log('Criteria data saved:', data));
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const criteriaList = document.getElementById('criteriaList');
    const addCriteriaButton = document.getElementById('addCriteria');
    const saveAndPostButton = document.getElementById('saveAndPost');

    // Function to create a new criteria slider
    function createCriteria(name) {
        const criteriaContainer = document.createElement('div');
        criteriaContainer.classList.add('slider-container');

        const label = document.createElement('label');
        label.textContent = name + ':';
        criteriaContainer.appendChild(label);

        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = 0;
        slider.max = 100;
        slider.value = 50;

        const valueDisplay = document.createElement('span');
        valueDisplay.textContent = '50';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-criteria');

        criteriaContainer.appendChild(slider);
        criteriaContainer.appendChild(valueDisplay);
        criteriaContainer.appendChild(deleteButton);
        criteriaList.appendChild(criteriaContainer);

        // Update display and handle slider input
        slider.addEventListener('input', () => {
            valueDisplay.textContent = slider.value;
            updateSliders();
        });

        // Delete criteria functionality
        deleteButton.addEventListener('click', () => {
            criteriaContainer.remove();
            updateSliders();
        });

        return { slider, valueDisplay };
    }

    // Function to handle adding a new criteria
    addCriteriaButton.addEventListener('click', () => {
        const criteriaName = prompt('Enter the name for the new criteria:');
        if (criteriaName) {
            createCriteria(criteriaName);
        }
    });

    // Function to update slider values and displays
    function updateSliders() {
        const sliders = document.querySelectorAll('#criteriaList input[type="range"]');
        let totalValue = 0;
        sliders.forEach(slider => {
            totalValue += parseInt(slider.value, 10);
        });

        if (totalValue > 100) {
            const adjustmentFactor = totalValue === 0 ? 0 : 100 / totalValue; 

            sliders.forEach(slider => {
                const newValue = Math.round(parseInt(slider.value, 10) * adjustmentFactor);
                slider.value = newValue;
                slider.nextElementSibling.textContent = newValue; // Update display
            });
        } else {
            sliders.forEach(slider => {
                slider.nextElementSibling.textContent = slider.value; // Update display
            });
        }
    }
});

