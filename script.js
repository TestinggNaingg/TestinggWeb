document.getElementById('year').textContent = new Date().getFullYear();

const gallery = document.querySelector('.gallery');
const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg' ]; // သင့်ရဲ့ ပုံနာမည်တွေကို ဒီ Array ထဲမှာ ပြင်ပါ။

images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = `images/${image}`;
    imgElement.alt = 'ကျွန်တော်တို့ပုံ';
    gallery.appendChild(imgElement);
});