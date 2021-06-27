// /* MOSTRAR MENU */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// MENU SHOW
// VALIDATE IF CONSTANT EXISTS
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// HIDDEN MENU 
// VALIDATE IF CONSTTANT EXISTS
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 100) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SWIPER DISCOVER ====================*/
var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
})
// /* <!-- VIDEO --> */
const videoFile = document.getElementById('video-file')
videBotton = document.getElementById('video-button')
videIcon = document.getElementById('video-icon')

function playPause(){
    if(videoFile.paused){
        //play video
        videoFile.play()

        //we change the icon
        videIcon.classList.add('ri-pause-line')
        videIcon.classList.remove('ri-play-line')
    }
    else{
        //pause video
        videoFile.pause()
        // we change the icon
        videIcon.classList.remove('ri-pause-line')
        videIcon.classList.add('ri-play-line')
    }
}
videBotton.addEventListener('click',playPause)

function finalVide0(){
    //Video ands, icon change
    videIcon.classList.remove('ri-pause-line')
    videIcon.classList.add('ri-play-line')
}
 //ended, whe the video ends
 videoFile.addEventListener('ended', finalVideo)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll');
     else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

