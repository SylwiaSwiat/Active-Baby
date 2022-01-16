 window.addEventListener('load', ()=>{
     const preloader = document.querySelector('.loader-wrapper');
     preloader.classList.add('loaded')
 })

 AOS.init();

 let slideImages = document.querySelectorAll('.slide');
 let arrowRight = document.querySelector('#arrowRight');
 let arrowLeft = document.querySelector('#arrowLeft');
 let current = 0;
 let galleryPhotos = document.querySelectorAll('.galleryPhoto');

 const reset = ()=>{
for(let i=0; i<slideImages.length; i++){
    slideImages[i].style.display='none';
}
 }

 const startSlide = ()=>{
     reset();
     slideImages[0].style.display = 'block';
 }

 const showPrev = ()=>{
     reset();
     slideImages[current -1].style.display = 'block';
     current--;

 }

 arrowLeft.addEventListener('click', ()=>{
     if(current===0){
         current = slideImages.length;
     }
     showPrev();
 })

const showNext = ()=>{
    reset();
    slideImages[current + 1].style.display = 'block';
    current++;
    
}

arrowRight.addEventListener('click', ()=>{
if(current === slideImages.length - 1){
current=-1
}
showNext();
})

 startSlide();

galleryPhotos.forEach((galleryPhoto)=>{
    galleryPhoto.addEventListener('click', ()=>{
        galleryPhoto.classList.toggle('fullScreen')
    })
})
     
 
 
 