let currentIndex = 0;
const images = [
    'img1.png',
    'img2.png',
    'img3.png',
    'img4.png',
    'img5.png',
    'img6.png',
    'img7.png',
    'img8.png'
];

function openModal(index) {
    currentIndex = index;
    document.getElementById('modalImage').src = images[currentIndex];
    document.getElementById('photoModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('photoModal').style.display = 'none';
}

function changeImage(direction) {
    currentIndex += direction;
    
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    
    document.getElementById('modalImage').src = images[currentIndex];
}
