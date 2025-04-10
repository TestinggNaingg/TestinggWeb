document.getElementById('photoInput')?.addEventListener('change', function () {
    const file = this.files[0];
    const reader = new FileReader();
  
    reader.onload = function (e) {
      const images = JSON.parse(localStorage.getItem('uploadedImages')) || [];
      images.push(e.target.result);
      localStorage.setItem('uploadedImages', JSON.stringify(images));
      alert('Image uploaded!');
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  });
  