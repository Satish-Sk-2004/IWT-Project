// Get elements
const addStudentBtn = document.getElementById('addStudentBtn');
const overlayForm = document.getElementById('overlayForm');
const closeBtn = document.getElementById('closeBtn');
const studentForm = document.getElementById('studentForm');
const studentTable = document.getElementById('studentTable').querySelector('tbody');

// Function to open overlay form
addStudentBtn.addEventListener('click', () => {
    overlayForm.style.display = 'flex';  // Show overlay
});

// Function to close overlay form
closeBtn.addEventListener('click', () => {
    overlayForm.style.display = 'none';  // Hide overlay
});

// Handle form submission
studentForm.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent page reload

    // Get form values
    const name = document.getElementById('name').value;
    const studentId = document.getElementById('studentId').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const year = document.getElementById('year').value;

    // Create a new row in the table
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${studentId}</td>
        <td>${gender}</td>
        <td>${email}</td>
        <td>${year}</td>
    `;

    // Add the row to the table
    studentTable.appendChild(row);

    // Clear form fields
    studentForm.reset();

    // Hide the overlay form
    overlayForm.style.display = 'none';
});
