let selector = document.querySelector('#phone, #phone2');
let im = new Inputmask("+7(999)999-99-99");
im.mask(selector)
new Splide( '#slider1', {
    pagination: false,
    autoScroll: true,
}).mount();
new Splide( '#slider2', {
    type   : 'loop',
    padding: '30rem',
}).mount();
const myElement = document.getElementById('scrollTop');
function checkScroll() {
  if (window.scrollY >= 600) {
    myElement.style.display = 'block'; 
  } else {
    myElement.style.display = 'none'; 
  }
};
window.addEventListener('scroll', checkScroll);
let progress = 0;
let progressBar = document.querySelector('.preloaded__progress');
let progressNumber = document.querySelector('.preloaded__number');
let preloader = document.querySelector('.preloaded');
let content = document.querySelector('.content');

let interval = setInterval(()=> {
    if(progress < 100) {
        progress++;
        progressBar.style.width = `${progress}%`;
        progressNumber.textContent = `${progress}%`
    } else {
        clearInterval(interval);
        preloader.style.display = 'none'
        content.style.display = 'block'
        
    }
}, 20)

let popup = document.querySelector('.popup');
let popupBtn = document.getElementById('enrol-btn');
let popupClose = document.getElementById('popup-close');
let popupBox = document.getElementById('popup-box');

popupBtn.addEventListener('click', () => {
    popup.classList.add('active');
});
popupClose.addEventListener('click', () => {
    popup.classList.remove('active');
})

window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
        popup.classList.remove('active');
    }
});
async function sendForm(event) {
    event.preventDefault(); 
    
    const formData = new FormData(event.target);     
    const response = await fetch('/submit', {
        method: 'POST',
        body: formData,
    });

    const result = await response.json(); 
    console.log(result); // Выводим результат в консоль    
    // Здесь можно добавить код для обработки результата
    alert(result.message); // Например, показываем сообщение
}
new WOW().init();