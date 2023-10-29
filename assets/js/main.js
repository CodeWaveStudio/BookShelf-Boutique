//hamberger show for mobile screem
document.addEventListener('DOMContentLoaded', function() {
  // Add an event listener to the hamburger menu icon
  document.querySelector('#ham-button').addEventListener('click', function() {
      // Toggle the visibility of the navigation actions
      document.querySelector('#nav__actions').classList.toggle('visible');
      document.querySelector('#ham-button').style.display = 'none';
      document.querySelector('#ham-close').style.display = 'inline-block';
  });

  // Add an event listener to the close icon
  document.querySelector('#ham-close').addEventListener('click', function() {
      // Toggle the visibility of the navigation actions
      document.querySelector('#nav__actions').classList.toggle('visible');
      document.querySelector('#ham-close').style.display = 'none';
      document.querySelector('#ham-button').style.display = 'inline-block';
  });
});

/*=============== SEARCH ===============*/
const searchButton=document.getElementById('search-button'),
searchClose=document.getElementById('search-close'),
searchContent=document.getElementById('search-content')


// SEARCH SHOW
if(searchButton){
    searchButton.addEventListener('click',()=>{
        searchContent.classList.add('show-search') 
    })
}

// SEARCH HIDDEN
if(searchClose){
    searchClose.addEventListener('click',()=>{
        searchContent.classList.remove('show-search') 
    })
}
/*=============== LOGIN ===============*/
const loginButton=document.getElementById('login-button'),
loginClose=document.getElementById('login-close'),
loginContent=document.getElementById('login-content')

// LOGIN SHOW
if(loginButton){
    loginButton.addEventListener('click',()=>{
        loginContent.classList.add('show-login') 
    })
}

// LOGIN HIDDEN
if(loginClose){
    loginClose.addEventListener('click',()=>{
        loginContent.classList.remove('show-login') 
    })
}

/*=============== ADD SHADOW HEADER ===============*/

const shadowHeader=()=>{
    const header=document.getElementById('header')
     this.scrollY>=50?header.classList.add('shadow-header')
                     : header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)
/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
  spaceBetween:-24,
  grabCursor:true,
  slidesPerView:'auto',
  centeredSlides:'auto',
  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  },
  breakpoints:{
    1220:{
        spaceBetween:-32,  
    }
  }
  })

/*=============== FEATURED SWIPER ===============*/

let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
  spaceBetween:16,
  grabCursor:true,
  slidesPerView:'auto',
  centeredSlides:'auto',
 
  navigation:{
nextEl:'.swiper-button-next',
prevEl:'.swiper-button-prev',
  },
  breakpoints:{
    1150:{
        slidesPerView:4,  
        centeredSlides:false,
    }
  }
  })
/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new__swiper', {
  loop: true,
spaceBetween:16,
slidesPerView:'auto',

breakpoints:{
  1150:{
      slidesPerView:3,  
    
  }
}
})

/*=============== TESTIMONIAL SWIPER ===============*/

let swiperTestimonial = new Swiper('.testimonial__swiper', {
  loop: true,
spaceBetween:16,
grabCursor:true,
slidesPerView:'auto',
centeredSlides:'auto',

navigation:{
  nextEl:'.swiper-button-next',
  prevEl:'.swiper-button-prev',
    },
breakpoints:{
  1150:{
      slidesPerView:3,  
      centeredSlides:false,
  } ,
  0: {
    slidesPerView: 1, // Adjust this value as needed
    centeredSlides: false, // You can change this as needed
  }
}
})
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp=()=>{
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY>=350 ? scrollUp.classList.add('show-scroll')
  :scrollUp.classList.remove('show-scroll') 
}
window.addEventListener('scroll',scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
document.addEventListener('DOMContentLoaded', function() {
  let navLinks = document.querySelectorAll('.nav__link');

  navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
          navLinks.forEach(function(link) {
              link.classList.remove('active');
          });
          this.classList.add('active');
         
      });
  });
});

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton=document.getElementById('theme-button')
const darkTheme='dark-theme'
const iconTheme='ri-sun-line'

const selectedTheme=localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon')

const getCurrentTheme=()=> document.body.classList.contains(darkTheme)?'dark': 'light'
const getCurrentIcon=()=>themeButton.classList.contains(iconTheme)?'ri-moon-line':'ri-sun-line'

if(selectedTheme){
  document.body.classList[selectedTheme==='dark'?'add':'remove'](darkTheme)
  themeButton.classList[selectedIcon==='ri-moon-line'?'add':'remove'](iconTheme)
}

themeButton.addEventListener('click',()=>{
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme',getCurrentTheme())
  localStorage.setItem('selected-icon',getCurrentIcon())
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
ScrollReveal({ 
  // reset: true ,
distance :'80px',
duration:2000,
delay:200
});
ScrollReveal().reveal('.section__title,.discount__title', { origin: 'top' });
ScrollReveal().reveal('.featured__container,.discount__description,.new__container,.join__bg,.footer__copy', { origin: 'bottom' });
ScrollReveal().reveal('.footer,.services__container',{ origin: 'left' });
ScrollReveal().reveal('.discount__images,.testimonial__swiper',{ origin: 'right' });