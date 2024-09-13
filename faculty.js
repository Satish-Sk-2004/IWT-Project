document.addEventListener('DOMContentLoaded', () => {
    // Show the "Ward Members" section by default
    showSection('ward-members');

    document.getElementById('add-achievement').addEventListener('click', addAchievement);
});

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
}

function addAchievement() {
    const name = document.getElementById('achieve-name').value;
    const desc = document.getElementById('achieve-desc').value;
    const reg = document.getElementById('achieve-reg').value;
    const media = document.getElementById('achieve-media').files[0];

    if (name && desc && reg) {
        const table = document.getElementById('achievement-table').querySelector('tbody');
        const newRow = table.insertRow();

        newRow.insertCell(0).textContent = name;
        newRow.insertCell(1).textContent = desc;
        newRow.insertCell(2).textContent = reg;

        if (media) {
            const mediaLink = document.createElement('a');
            mediaLink.href = URL.createObjectURL(media);
            mediaLink.textContent = 'View Proof';
            mediaLink.target = '_blank';
            newRow.insertCell(3).appendChild(mediaLink);
        } else {
            newRow.insertCell(3).textContent = 'No Proof';
        }

        // Clear form fields
        document.getElementById('achievement-form').reset();
    } else {
        alert('Please fill in all required fields.');
    }
}
