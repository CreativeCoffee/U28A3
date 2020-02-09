console.log("SLIDESHOW LOADED") // debug message

const slideshow = document.querySelector('.slideshow');
const slideshowImages = document.querySelectorAll('.slideshow img');

const previousButton = document.querySelector('#previousButton');
const nextButton = document.querySelector('#nextButton');

let counter = 1;
const size = slideshowImages[0].clientWidth;

slideshow.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextButton.addEventListener('click', () => {
    if(counter >= slideshowImages.length - 1) return;
    slideshow.style.transition ="transform 0.4s ease-in-out";
    counter++;
    slideshow.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
})


previousButton.addEventListener('click', () => {
    if(counter <= 0) return;
    slideshow.style.transition ="transform 0.4s ease-in-out";
    counter--;
    slideshow.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
})

slideshow.addEventListener('transitionend', () => {
    if(slideshowImages[counter].id === 'lastClone') {
        slideshow.style.transition = "none";
        counter = slideshowImages.length - 2;
        slideshow.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if(slideshowImages[counter].id === 'firstClone') {
        slideshow.style.transition = "none";
        counter = slideshowImages.length - counter;
        slideshow.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})