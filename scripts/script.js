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
let registerBtn = document.querySelector('#registerBtn')
let register = document.querySelector('#register')
let container = document.querySelector('.container')
let closeFormBtn = document.querySelector('#closeFormBtn')
let registerBtn2 = document.querySelector('.registerBtn2')
let submitBtn = document.querySelector('#submitBtn')
let select = document.querySelector('#select')
let saturday = document.querySelector("#saturday")
let thuesday = document.querySelector('#thuesday')

const showFormular = () => {
    register.classList.remove('hideRegisterBtn')
    register.classList.add('showRegister')
    container.style.display='none'
}

registerBtn.addEventListener('click', showFormular)
  const closeFormular = () => {
      register.classList.add('hideRegisterBtn')
      register.classList.remove('showRegister')
      container.style.display='block'
 }


const update = ()=>{
    let option = select.options[select.selectedIndex].text
    console.log(option)
    if(option==="Poniedziałek") {
        thuesday.style.display='none'
     saturday.style.display='none'
    monday.style.display='flex'
}
    if(option==="Wtorek") {
        monday.style.display='none'
        saturday.style.display='none'
thuesday.style.display='flex'
    }
if(option==='Sobota') {
    monday.style.display='none'
    thuesday.style.display='none'
    saturday.style.display='flex'
}
}
update();
closeFormBtn.addEventListener('click', closeFormular)
registerBtn2.addEventListener('click', showFormular)

const formInfo=()=>{
    let valChildName = document.querySelector('#childName').value
    let valChildLastName = document.querySelector('#childLastName').value
    let valChildBirth = document.querySelector('#childBirth').value
    let valChildAdress = document.querySelector('#childAdress').value
    let valParentName = document.querySelector('#parentName').value
    let valParentLastName = document.querySelector('#parentLastName').value
    let valParentEmail = document.querySelector('#parentEmail').value
    let valParentPhone = document.querySelector('#parentPhone').value
    console.log(valChildName)
    console.log(valChildLastName)
    console.log(valChildBirth)
    console.log(valChildAdress)
    console.log(valParentName)
    console.log(valParentLastName)
    console.log(valParentEmail)
    console.log(valParentPhone)
}
submitBtn.addEventListener('click', formInfo)


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
  
 
