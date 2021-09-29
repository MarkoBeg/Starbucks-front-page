const slides = document.getElementsByClassName('carousel-item')
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')
let currentItem = 0
const totalSlides = slides.length




nextBtn.addEventListener('click', function(){
    hideAllSlides()
    if(currentItem === totalSlides -1){
        currentItem = 0
    }else {
        currentItem ++
    }
    
    slides[currentItem].classList.add('carousel-item-visible')
    console.log('Move to next slide')
})

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function randomSlide(){
    let random = 0
    random = Math.floor(Math.random() * slides.length) 
    console.log(random)
}


randomSlide()
prevBtn.addEventListener('click', function(){
    hideAllSlides()
    if(currentItem === 0){
        currentItem = totalSlides - 1
    }else {
        currentItem --
    }
    slides[currentItem].classList.add('carousel-item-visible')
    console.log('Move to next prev')
})

const barsEl = document.getElementById('barsbtn')
const sideBar = document.querySelector('.nav-side')
const timesEl = document.getElementById('timesbtn')

barsEl.addEventListener('click', function(){
    sideBar.style.display = 'block'
    sideBar.style.width = '350px'
    
    
})

timesEl.addEventListener('click', function(){
    sideBar.style.display = 'none'
   
})



window.addEventListener('load', function(){
    let loader = document.getElementById('loader')
    loader.classList.add('hidden')
})

