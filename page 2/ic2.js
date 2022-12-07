// NAVBAR SLIDE
const menuToggle = document.querySelector('.menu-toggle input')
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
   nav.classList.toggle('slide');
});
// STORAGE
const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
   e.preventDefault();

   const fd = new FormData (form);
   const obj = Object.fromEntries(fd);
    
    const json = JSON.stringify(obj);
    localStorage.setItem('form', json);
 
    window.location.href = "index3.html"
})
