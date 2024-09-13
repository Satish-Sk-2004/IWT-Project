document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        const staffName = document.getElementById('staffName').value.trim();
        if (staffName === '') {
            alert('Please enter the name of the staff.');
            event.preventDefault();
            return;
        }

        const subject = document.getElementById('subject').value;
        if (subject === '') {
            alert('Please select a subject.');
            event.preventDefault();
            return;
        }

        const email = document.getElementById('email').value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
            return;
        }

        const password = document.getElementById('password').value.trim();
        if (password === '') {
            alert('Please enter a password.');
            event.preventDefault();
            return;
        }

        const yearSelected = document.querySelector('input[name="year"]:checked');
        if (!yearSelected) {
            alert('Please select a year.');
            event.preventDefault();
            return;
        }

        const additionalInfo = document.getElementById('additionalInfo').value.trim();
        if (additionalInfo === '') {
            if (!confirm('Additional Information is empty. Do you want to proceed?')) {
                event.preventDefault();
                return;
            }
        }

        const agree = document.getElementById('agree');
        if (!agree.checked) {
            alert('You must agree to the terms and conditions.');
            event.preventDefault();
            return;
        }

        alert('Form submitted successfully!');
    });
});
