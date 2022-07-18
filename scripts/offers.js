window.addEventListener('load', () => {
    const preloader = document.querySelector('.loader-wrapper');
    preloader.classList.add('loaded')
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(window.innerWidth> 768){
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector("#nav").style.background = "#382142";
    document.querySelector(".logo").src = "./photos/ab_logo_przezroczyste.svg";
  } else {
    document.querySelector("#nav").style.background = "#38214243";
    document.querySelector(".logo").src = "./photos/baby shark_logo_przeroczyste (1).png";
  }
}
}

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

// const showFormular = () => {
//     register.classList.remove('hideRegisterBtn')
//     register.classList.add('showRegister')
//     container.style.display='none'
// }

// registerBtn.addEventListener('click', showFormular)
//   const closeFormular = () => {
//       register.classList.add('hideRegisterBtn')
//       register.classList.remove('showRegister')
//       container.style.display='block'
//  }


// const update = ()=>{
//     let option = select.options[select.selectedIndex].text
//     console.log(option)
//     if(option==="Poniedziałek") {
//         thuesday.style.display='none'
//      saturday.style.display='none'
//     monday.style.display='flex'
// }
//     if(option==="Wtorek") {
//         monday.style.display='none'
//         saturday.style.display='none'
// thuesday.style.display='flex'
//     }
// if(option==='Sobota') {
//     monday.style.display='none'
//     thuesday.style.display='none'
//     saturday.style.display='flex'
// }
// }
// update();
// closeFormBtn.addEventListener('click', closeFormular)

// const formInfo=()=>{
//     let valChildName = document.querySelector('#childName').value
//     let valChildLastName = document.querySelector('#childLastName').value
//     let valChildBirth = document.querySelector('#childBirth').value
//     let valChildAdress = document.querySelector('#childAdress').value
//     let valParentName = document.querySelector('#parentName').value
//     let valParentLastName = document.querySelector('#parentLastName').value
//     let valParentEmail = document.querySelector('#parentEmail').value
//     let valParentPhone = document.querySelector('#parentPhone').value
//     console.log(valChildName)
//     console.log(valChildLastName)
//     console.log(valChildBirth)
//     console.log(valChildAdress)
//     console.log(valParentName)
//     console.log(valParentLastName)
//     console.log(valParentEmail)
//     console.log(valParentPhone)
// }
// submitBtn.addEventListener('click', formInfo)

const activate = ()=> nav.classList.add('activeMenu')
menuBtn.addEventListener('click', activate)

const deactivate = ()=> nav.classList.remove('activeMenu')

menuCloseBtn.addEventListener('click', deactivate)

menu.forEach((menuEl)=> menuEl.addEventListener('click', deactivate))


  
 
