document.addEventListener('DOMContentLoaded', function() {
    const dropZone = document.getElementById('drop-zone');

    const isValidFileType = (file) => {
        const validTypes = ['image/jpeg', 'image/png'];
        return validTypes.includes(file.type);
    };

    dropZone.addEventListener('dragover', function(e) {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', function() {
        dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', function(e) {
        e.preventDefault();
        dropZone.classList.remove('dragover');

        const files = e.dataTransfer.files;
        if (files.length > 0 && isValidFileType(files[0])) {
            // Simulate file upload
            setTimeout(() => {
                dropZone.textContent = 'Le document a été téléchargé.';
            }, 1000); // Simulate a delay for file upload
        } else {
            dropZone.textContent = 'Invalid file type. Please upload a JPG or PNG file.';
            setTimeout(() => {
                dropZone.textContent = 'Drag & drop a file here or click to upload';
            }, 3000); // Reset the message after 3 seconds
        }
    });

    dropZone.addEventListener('click', function() {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.jpg, .jpeg, .png'; // Restrict file types
        fileInput.style.display = 'none';

        fileInput.addEventListener('change', function() {
            if (fileInput.files.length > 0 && isValidFileType(fileInput.files[0])) {
                // Simulate file upload
                setTimeout(() => {
                    dropZone.textContent = 'Le document a été téléchargé.';
                }, 1000); // Simulate a delay for file upload
            } else {
                dropZone.textContent = 'Invalid file type. Please upload a JPG or PNG file.';
                setTimeout(() => {
                    dropZone.textContent = 'Drag & drop a file here or click to upload';
                }, 3000); // Reset the message after 3 seconds
            }
        });

        document.body.appendChild(fileInput);
        fileInput.click();
        document.body.removeChild(fileInput);
    });
});
