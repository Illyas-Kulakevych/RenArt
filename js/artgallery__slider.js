const sliderImages = document.querySelectorAll('.slider__img'),
    sliderLine = document.querySelector('.slider__line'),
    sliderDots = document.querySelectorAll('.slider__dot'),
    sliderBtnPrev = document.querySelector('.btn-prev'),
    sliderBtnNext = document.querySelector('.btn-next');

let sliderWidth;   
let sliderCount = 0;

window.addEventListener('resize', showSlide);

sliderBtnPrev.addEventListener('click', prevSlide);
sliderBtnNext.addEventListener('click', nextSlide);
    
function showSlide() {
    sliderWidth =  document.querySelector('.slider-container').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + "px"
    sliderImages.forEach(item => item.style.width = sliderWidth + "px");
    rollSlider();
}
showSlide();

function prevSlide() {
    sliderCount--;
    if(sliderCount < 0) sliderCount = sliderImages.length -1;

    rollSlider();
    thisSlide(sliderCount);
}
function nextSlide() {
    sliderCount ++;
    if(sliderCount >= sliderImages.length) sliderCount = 0;
    rollSlider();
    thisSlide(sliderCount);
}

function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
    })
})
