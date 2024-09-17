

document.getElementById("upIcon").addEventListener("click", function() {
        document.getElementById("Home").scrollIntoView({
            behavior: 'smooth'  // Smooth scrolling effect
        });
    });

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
    if(this.window.scrollY > 100){
        navbar.classList.add('sticky');
        navbar.classList.add('bg-[#d38aff]')
    }
    else{
        navbar.classList.remove('sticky');
        navbar.classList.remove('bg-[#d38aff]')
    }
})