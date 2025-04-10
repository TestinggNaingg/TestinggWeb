const imageUpload = document.getElementById('imageUpload');
const imagePreview = document.getElementById('imagePreview');
const uploadForm = document.getElementById('uploadForm');
const submitBtn = document.getElementById('submitBtn');

let selectedImageData = null;

// Preview the selected image
imageUpload.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();

    reader.addEventListener('load', function () {
      selectedImageData = this.result; // Store image in memory
      imagePreview.src = selectedImageData;
      imagePreview.style.display = 'block';
    });

    reader.readAsDataURL(file);
  }
});

// Handle form submission
uploadForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload

  if (selectedImageData) {
    let gallery = JSON.parse(localStorage.getItem('gallery')) || [];
    gallery.push(selectedImageData);
    localStorage.setItem('gallery', JSON.stringify(gallery));
    alert("Photo uploaded successfully!");
    window.location.href = "gallery.html"; // Go to gallery
  } else {
    alert("Please select a photo before submitting.");
  }
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
  