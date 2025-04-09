const imageUpload = document.getElementById('imageUpload');
const imagePreview = document.getElementById('imagePreview');
const submitBtn = document.getElementById('submitBtn');

let selectedImageData = null;

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

submitBtn.addEventListener('click', function () {
    if (selectedImageData) {
      let gallery = JSON.parse(localStorage.getItem('gallery')) || [];
      gallery.push(selectedImageData);
      localStorage.setItem('gallery', JSON.stringify(gallery));
      alert("Photo uploaded successfully!");
      imagePreview.style.display = 'none';
      imageUpload.value = "";
      selectedImageData = null;
    } else {
      alert("Please select a photo first!");
    }
  });
  