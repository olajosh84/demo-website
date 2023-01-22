const slideContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
//const nextBtn = document.querySelector('.next-btn');
//const prevBtn = document.querySelector('.prev-btn');
const slideBtnContainer = document.querySelector('.slide-btns');

//show slide buttons based on the no of slides
slides.forEach((slideBtn, btnIndex) => {
    let position = 'next-slide-btn';
    if(btnIndex === 0) {
        position = 'active-slide-btn'
    }
    if(btnIndex === slides.length - 1) {
        position = 'last-slide-btn'
    }
    if(slides.length === 1){
        slideBtnContainer.style.display = "none";
    }
    slideBtnContainer.innerHTML += `<div class="slide-btn ${position}"></div>`;
})
//select all slide btns
const slideBtns = document.querySelectorAll('.slide-btn');
           
//show slides
slides.forEach((slide, slideIndex) => {
    //set default position for all slides to 'next-slide'
    let position = 'next-slide';
    if(slideIndex === 0){
        position = 'active-slide'
    }
    if(slideIndex === slides.length - 1){
        position = 'last-slide';
    }
    if(slides.length === 1){
        position = 'active-slide';
    }

    //display the slides
    slide.classList.add(position);
                
});
          
//auto slider
const autoSlider = setInterval(() => {
    startSlide();
}, 5000);
//do not show next and prev buttons if you have only one item
if(slides.length === 1){
    //nextBtn.style.display = 'none';   
    //prevBtn.style.display = 'none'; 
    //stop auto slide
    clearInterval(autoSlider);
}

function startSlide (type) {
    //first select the active, next slide to the active and the last slides
    const activeSlide = document.querySelector('.active-slide');
    let nextSlide = activeSlide.nextElementSibling;
    const lastSlide = document.querySelector('.last-slide');
    //note: if no next element, next is the first element of the slides container
    if(!nextSlide){
        nextSlide = slideContainer.firstElementChild;
    }
                
    //for slide buttons
    const activeSlideBtn = document.querySelector('.active-slide-btn');
    let nextSlideBtn = activeSlideBtn.nextElementSibling;
    const lastSlideBtn = document.querySelector('.last-slide-btn');
    //note: if no next element, next is the first element of the slides container
    if(!nextSlideBtn){
        nextSlideBtn = slideBtnContainer.firstElementChild;
    }
                
    //remove all slide classes
    activeSlide.classList.remove('active-slide');
    nextSlide.classList.remove('next-slide');
    lastSlide.classList.remove('last-slide');

    //do same for slide btns
    activeSlideBtn.classList.remove('active-slide-btn');
    nextSlideBtn.classList.remove('next-slide-btn');
    lastSlideBtn.classList.remove('last-slide-btn');
                
    if(type && type === "last"){
        lastSlide.classList.add('active-slide');
        activeSlide.classList.add('next-slide');
        nextSlide.classList.add('last-slide');

        //for slide btns
        lastSlideBtn.classList.add('active-slide-btn');
        activeSlideBtn.classList.add('next-slide-btn');
        nextSlideBtn.classList.add('last-slide-btn');
        return;
    }
                
    nextSlide.classList.add('active-slide');
    lastSlide.classList.add('next-slide');
    activeSlide.classList.add('last-slide');

    //for slide btns
    nextSlideBtn.classList.add('active-slide-btn');
    lastSlideBtn.classList.add('next-slide-btn');
    activeSlideBtn.classList.add('last-slide-btn');
}

/*nextBtn.addEventListener('click', () => {
    startSlide();
});
prevBtn.addEventListener('click', () => {
    startSlide('last');
})*/