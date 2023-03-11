window.onload = () => {

document.querySelector('nav .nav-btn input')
.addEventListener('click', () => {
    document.querySelector('nav .nav-list-responsive').classList.toggle('actived');
    document.querySelector('.nav-cont').classList.toggle('actived');
    document.querySelector('.nav-btn span').classList.toggle('actived');
    document.querySelector('.nav-btn').classList.toggle('actived');
});

const menuResP = document.querySelectorAll('nav .nav-menu-responsive');
for (let i = 0; i < menuResP.length; i++) {
    menuResP[i].addEventListener('click', () => {
        document.querySelector('nav .nav-list-responsive').classList.toggle('actived');
        document.querySelector('.nav-cont').classList.toggle('actived');
        document.querySelector('.nav-btn span').classList.toggle('actived');
        document.querySelector('.nav-btn').classList.toggle('actived');
        document.querySelector('nav .nav-btn input').checked = false;
    });
};

function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
            if (elementTop < windowHeight - elementVisible) {
              reveals[i].classList.add("active");
            } else {
              reveals[i].classList.remove("active");
            };
    };
};

window.addEventListener("scroll", reveal);
reveal();
};