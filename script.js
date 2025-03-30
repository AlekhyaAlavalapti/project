document.addEventListener('DOMContentLoaded', () => {
    const idProofSelect = document.getElementById('idProof');
    const idProofDetails = document.getElementById('idProofDetails');
    const donationTypeSelect = document.getElementById('donationType');
    const foodDetails = document.getElementById('foodDetails');
    const moneyDetails = document.getElementById('moneyDetails');

    idProofSelect.addEventListener('change', () => {
        if (idProofSelect.value) {
            idProofDetails.style.display = 'block';
        } else {
            idProofDetails.style.display = 'none';
        }
    });

    donationTypeSelect.addEventListener('change', () => {
        if (donationTypeSelect.value === 'food') {
            foodDetails.style.display = 'block';
            moneyDetails.style.display = 'none';
        } else if (donationTypeSelect.value === 'money') {
            foodDetails.style.display = 'none';
            moneyDetails.style.display = 'block';
        } else {
            foodDetails.style.display = 'none';
            moneyDetails.style.display = 'none';
        }
    });
});
