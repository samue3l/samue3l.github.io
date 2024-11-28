// Header 
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})
// Typing effect 
let typed = new Typed('#auto-input', {
    strings:[ ' 4th year BTM Student At TMU!'],
    typeSpeed: 85,
    backSpeed: 60,
    backDelay: 30,
    loop: true,
}) 
