const navlinks = document.querySelectorAll('.navlink');

const homeNavlink = navlinks[0];
const aboutNavlink = navlinks[1];
const skillsNavlink = navlinks[2];
const projectsNavlink = navlinks[3];
const contactNavlink = navlinks[4];

const navbar = document.querySelector('.navbar');
const hamburger = navbar.querySelector('.fa-bars');
const links = navbar.querySelector('ul');

hamburger.addEventListener('click', () => {
    links.style.display = links.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('scroll', function () {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if(scrollPosition < 500) {
        document.querySelector('.active').classList.remove('active');
        homeNavlink.classList.add('active');
        if(navbar.getElementsByTagName('ul')[0].style.margin != "20px") {
            navbar.getElementsByTagName('ul')[0].style.margin = "20px";
        }        
    }

    if(scrollPosition > 500) {
        document.querySelector('.active').classList.remove('active');
        aboutNavlink.classList.add('active');
        navbar.getElementsByTagName('ul')[0].style.margin = "0px";
        navbar.style.backgroundColor = "rgba(0,0,0,0.8)";
    }

    if(scrollPosition > 1800) {
        document.querySelector('.active').classList.remove('active');
        skillsNavlink.classList.add('active');
    }
    
    if(scrollPosition > 2650) {
        document.querySelector('.active').classList.remove('active');
        projectsNavlink.classList.add('active');
    }

    if(scrollPosition > 4000) {
        document.querySelector('.active').classList.remove('active');
        contactNavlink.classList.add('active');
    }

});

navlinks.forEach(navlink => {
    navlink.addEventListener('click', function () {
        const hash = this.hash + '-anchor';
        console.log(hash);
        document.querySelector(hash).scrollIntoView({
            behavior: 'smooth'
        });
    });
});        