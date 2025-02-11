const carouselTrack = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');

// Duplicate the icons dynamically
items.forEach((item) => {
    const clone = item.cloneNode(true); // Clone each icon
    carouselTrack.appendChild(clone); 
});
