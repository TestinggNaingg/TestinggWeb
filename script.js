document.getElementById('year').textContent = new Date().getFullYear();

const gallery = document.querySelector('.gallery');
const images = ['1V0A7424.jpg', '1V0A7505.jpg', '1V0A7861.jpg']; // သင့်ရဲ့ ပုံနာမည်တွေကို ဒီ Array ထဲမှာ ပြင်ပါ။

images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = `images/${image}`;
    imgElement.alt = 'ကျွန်တော်တို့ပုံ';
    gallery.appendChild(imgElement);
});