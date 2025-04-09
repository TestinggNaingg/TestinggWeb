const imageUpload = document.getElementById('imageUpload');
const imagePreview = document.getElementById('imagePreview');

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

reader.addEventListener('load', function () {
    imagePreview.src = this.result;
    imagePreview.style.display = 'block';
  
    // Save to localStorage
    let gallery = JSON.parse(localStorage.getItem('gallery')) || [];
    gallery.push(this.result);
    localStorage.setItem('gallery', JSON.stringify(gallery));
  });
  