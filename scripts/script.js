window.addEventListener('load', () => {
    const preloader = document.querySelector('.loader-wrapper');
    preloader.classList.add('loaded')
})


let slideImages = document.querySelectorAll('.slide');
let arrowRight = document.querySelector('#arrowRight');
let arrowLeft = document.querySelector('#arrowLeft');
let current = 0;
let galleryPhotos = document.querySelectorAll('.galleryPhoto');
let menu = document.querySelectorAll('.menuEl');
let menuBtn = document.querySelector('.menuBtn');
let menuCloseBtn = document.querySelector('.menuCloseBtn');
let nav = document.querySelector('nav');

const reset = () => {
    for (let i = 0; i < slideImages.length; i++) {
        slideImages[i].style.display = 'none';
    }
}

const startSlide = () => {
    reset();
    slideImages[0].style.display = 'block';
}

const showPrev = () => {
    reset();
    slideImages[current - 1].style.display = 'block';
    current--;

}

arrowLeft.addEventListener('click', () => {
    if (current === 0) {
        current = slideImages.length;
    }
    showPrev();
})

const showNext = () => {
    reset();
    slideImages[current + 1].style.display = 'block';
    current++;

}

arrowRight.addEventListener('click', () => {
    if (current === slideImages.length - 1) {
        current = -1
    }
    showNext();
})

galleryPhotos.forEach((galleryPhoto) => {
    galleryPhoto.addEventListener('click', () => {
        galleryPhoto.classList.toggle('fullScreen')
    })
})

setInterval(()=>{
    if (current === slideImages.length - 1) {
        current = -1
    }
    showNext()
}, 5000);

const activate = ()=> nav.classList.add('activeMenu')
menuBtn.addEventListener('click', activate)

const deactivate = ()=> nav.classList.remove('activeMenu')

menuCloseBtn.addEventListener('click', deactivate)

menu.forEach((menuEl)=> menuEl.addEventListener('click', deactivate))

startSlide();



