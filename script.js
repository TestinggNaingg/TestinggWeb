const imageUpload = document.getElementById('imageUpload');
const imagePreview = document.getElementById('imagePreview');
const submitBtn = document.getElementById('submitBtn');

let selectedImageData = null;

// Preview the selected image
imageUpload.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
        selectedImageData = reader.result;
        imagePreview.src = selectedImageData;
        imagePreview.style.display = 'block';
    };

    reader.readAsDataURL(file);
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
  