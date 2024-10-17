document.addEventListener('DOMContentLoaded', function() {
    const addStudentBtn = document.getElementById('addStudentBtn');
    const overlayForm = document.getElementById('overlayForm');
    const closeBtn = document.getElementById('closeBtn');
    const studentForm = document.getElementById('studentForm');

    addStudentBtn.addEventListener('click', function() {
        overlayForm.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        overlayForm.style.display = 'none';
    });

    studentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const student = {
            name: document.getElementById('name').value,
            studentId: document.getElementById('studentId').value,
            gender: document.getElementById('gender').value,
            email: document.getElementById('email').value,
            year: document.getElementById('year').value
        };
        addStudent(student);
        overlayForm.style.display = 'none';
        studentForm.reset();
    });

    function addStudent(student) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.studentId}</td>
            <td>${student.gender}</td>
            <td>${student.email}</td>
            <td>${student.year}</td>
            <td>View</td>
        `;
        
        // Add click event listener to the row
        row.addEventListener('click', function() {
            // Redirect to achievements.html with student ID as a parameter
            window.location.href = `achievements.html?studentId=${student.studentId}`;
        });

        document.querySelector('#studentTable tbody').appendChild(row);
    }
});
