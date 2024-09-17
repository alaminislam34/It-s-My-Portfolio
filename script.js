

document.getElementById("upIcon").addEventListener("click", function() {
        document.getElementById("Home").scrollIntoView({
            behavior: 'smooth'  // Smooth scrolling effect
        });
    });
document.getElementById('')


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
        navbar.classList.add('bg-[#ddb4e4]');
        navbar.classList.add('shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]');
    }
    else{
        navbar.classList.remove('sticky');
        navbar.classList.remove('bg-[#ddb4e4]');
        navbar.classList.remove('shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]');
    }
})