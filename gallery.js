const galleryContainer = document.getElementById('galleryContainer');
const gallery = JSON.parse(localStorage.getItem('gallery')) || [];

if (gallery.length === 0) {
  galleryContainer.innerHTML = "<p>No photos uploaded yet.</p>";
} else {
  gallery.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('gallery-img');
    galleryContainer.appendChild(img);
  });
}
