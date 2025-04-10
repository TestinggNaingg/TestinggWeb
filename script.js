const imageUpload = document.getElementById('imageUpload');
const imagePreview = document.getElementById('imagePreview');
const uploadForm = document.getElementById('uploadForm');

let selectedImageData = null;

// Preview the selected image
imageUpload.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();

    reader.addEventListener('load', function () {
      imagePreview.src = this.result;
      imagePreview.style.display = 'block';
    });

    reader.readAsDataURL(file);
  }
});

// Handle form submission
uploadForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload

  const file = imageUpload.files[0];
  if (!file) {
    alert('Please select an image before submitting.');
    return;
  }

  // Simulate upload or log to console
  console.log('File ready to upload:', file);
  alert('Image submitted successfully!');
});

// On submit: save and redirect
submitBtn.addEventListener('click', function () {
    if (selectedImageData) {
      let gallery = JSON.parse(localStorage.getItem('gallery')) || [];
      gallery.push(selectedImageData);
      localStorage.setItem('gallery', JSON.stringify(gallery));
      alert("Photo uploaded successfully!");
      window.location.href = "gallery.html"; // 🚀 redirect after upload
    } else {
      alert("Please select a photo before submitting.");
    }
  });
  