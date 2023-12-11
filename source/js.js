// Variable
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.list-container');
let on_off = true;

const gallery = document.querySelectorAll('.gallery-content .img-card img');
const modal = document.querySelector('.modal');
const imgModal = document.querySelector('#imgModal');
const caption = document.querySelector('#caption');

// JavaScript para manejar la clase scrolled
window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

btnMenu.addEventListener('click', () => {
     
    if (on_off) {
       menu.style.left = "0";
       menu.style.transition = "300ms";
       on_off = false;
    }else{
        on_off = false;
        menu.style.left = "-100%";
        menu.style.transition = "300ms";
        on_off = true;
    }

});
document.querySelectorAll('.list-container .lists li a').forEach((link) => {
    link.addEventListener('click', () => {
        menu.style.left = "-100%";
        on_off = true;
    });
});

// Gallery
gallery.forEach((images) => {
     
    images.addEventListener('click', (event) => {
       modal.style.display = "block";

       let srcImg = event.target.src;
       let altImg = event.target.alt;

       imgModal.src = srcImg;
       caption.innerHTML = altImg;
              
    });
     
});

document.querySelector('.menu-responsive').addEventListener('click', function () {
    document.querySelector('.lists').classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".list-container .lists li a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        // Quita la clase "active" de todos los enlaces
        navLinks.forEach((link) => {
            link.classList.remove("active");
        });

        // Agrega la clase "active" solo al enlace correspondiente a la sección actual
        if (current) {
            navLinks.forEach((link) => {
                if (link.getAttribute("href").includes(current)) {
                    link.classList.add("active");
                }
            });
        }
    });
});

