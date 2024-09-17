
// upIcon scroll function

document.getElementById("upIcon").addEventListener("click", function() {
        document.getElementById("home").scrollIntoView({
            behavior: 'smooth'
        });
});
// navbar scroll function 
document.getElementById('home-navbar', 'home-menu').addEventListener('click', function(){
    document.getElementById('home').scrollIntoView({
        behavior: "smooth"
    })
})
document.getElementById('home-menu').addEventListener('click', function(){
    document.getElementById('home').scrollIntoView({
        behavior: "smooth"
    })
})
document.getElementById('home-logo', 'about-menu').addEventListener('click', function(){
    document.getElementById('home').scrollIntoView({
        behavior: "smooth"
    })
})
document.getElementById('about-menu').addEventListener('click', function(){
    document.getElementById('home').scrollIntoView({
        behavior: "smooth"
    })
})
document.getElementById('about-navbar', 'about-menu').addEventListener('click', function(){
    document.getElementById('about').scrollIntoView({
        behavior: "smooth"
    })
})
document.getElementById('about-menu').addEventListener('click', function(){
    document.getElementById('about').scrollIntoView({
        behavior: "smooth"
    })
})
document.getElementById('skills-navbar', 'skills-menu').addEventListener('click', function(){
    document.getElementById('skills').scrollIntoView({
        behavior: "smooth"
    })
})
document.getElementById('skills-menu').addEventListener('click', function(){
    document.getElementById('skills').scrollIntoView({
        behavior: "smooth"
    })
})
document.getElementById('portfolio-navbar', 'portfolio-menu').addEventListener('click', function(){
    document.getElementById('portfolio').scrollIntoView({
        behavior: "smooth"
    })
})
document.getElementById('portfolio-menu').addEventListener('click', function(){
    document.getElementById('portfolio').scrollIntoView({
        behavior: "smooth"
    })
})
document.getElementById('contact-navbar', 'contact-menu').addEventListener('click', function(){
    document.getElementById('contact').scrollIntoView({
        behavior: "smooth"
    })
})
document.getElementById('contact-menu').addEventListener('click', function(){
    document.getElementById('contact').scrollIntoView({
        behavior: "smooth"
    })
})


 const homeSection = document.getElementById('Home');
    const homeIcon = document.getElementById('upIcon');

    window.addEventListener('scroll', function() {
        const homeSectionTop = homeSection.getBoundingClientRect().top;

        if (homeSectionTop < window.innerHeight && homeSectionTop >= 0) {
            homeIcon.style.display = 'none'; // Hide icon when home section is in view
        } else {
            homeIcon.style.display = 'block'; // Show icon when home section is out of view
        }
    });

window.addEventListener('scroll', function(){
    const navbar = document.getElementById('navbar');
    if(this.window.scrollY > 80){
        navbar.classList.add('sticky');
        navbar.classList.add('bg-[#1d232a]');
        navbar.classList.add('opacity-90');
        navbar.classList.add('shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]');
    }
    else{
        navbar.classList.remove('sticky');
        navbar.classList.remove('bg-[#1d232a]');
        navbar.classList.remove('shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]');
    }
})