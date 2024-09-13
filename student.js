document.addEventListener('DOMContentLoaded', function() {
    const achievementForm = document.getElementById('achievement-form');
    const achievementsTable = document.getElementById('achievements-table').getElementsByTagName('tbody')[0];
    const modal = document.getElementById('certificate-modal');
    const modalImg = document.getElementById('certificate-image');
    const closeModal = document.getElementsByClassName('close')[0];

    let achievementCount = 0;

    achievementForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const achievementName = document.getElementById('achievement-name').value;
        const certificateFile = document.getElementById('certificate-file').files[0];

        if (achievementName && certificateFile) {
            achievementCount++;
            const newRow = achievementsTable.insertRow();
            newRow.innerHTML = `
                <td>${achievementCount}</td>
                <td>${achievementName}</td>
                <td><button class="show-certificate">Show Certificate</button></td>
            `;

            const showCertificateBtn = newRow.querySelector('.show-certificate');
            showCertificateBtn.addEventListener('click', function() {
                const reader = new FileReader();
                reader.onload = function(e) {
                    modalImg.src = e.target.result;
                    modal.style.display = 'block';
                }
                reader.readAsDataURL(certificateFile);
            });

            achievementForm.reset();
        }
    });

    closeModal.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});

document.getElementById('certificate-file').addEventListener('change', function(e) {
    var fileName = e.target.files[0].name;
    document.querySelector('.file-name').textContent = fileName;
});