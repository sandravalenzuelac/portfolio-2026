const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('.nav__link')

const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')

}

navLink.forEach(n => n.addEventListener('click', linkAction))

const blurHeader = ()=>{
    const header = document.getElementById('header')

    this.scrolly >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
     emailjs.sendForm('service_61tlpin', 'template_nhszytw', '#contact-form', 'H0oZsSlt7xgFJcgnJ')
                    .then(() => {
                        contactMessage.textContent = 'Mensaje enviado con exito'
                    
                        setTimeout(()=>{
                            contactMessage.textContent = ''
                        }, 5000)

                        contactForm.reset()

                    }, () => {
                        contactMessage.textContent = 'Error al enviar mensaje'
                    });
}

contactForm.addEventListener('submit', sendEmail)


const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

        sections.forEach(current =>{
            const sectionHeigh = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionClass = document.querySelector('.nav__menu a[href*='+sectionId+']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeigh){
                sectionClass.classList.add('active-link')
        } else{
                sectionClass.classList.remove('active-link')
        }
              
    })
}

window.addEventListener('scroll', scrollActive)


const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrolly >= 350 ? scrollUp.classList.add('show-scroll')
                                         : scrollUp.classList.remove('show-scroll')
}

const text = "Desarrolladora Web Full Stack"
const speed = 70
const eraseSpeed = 40
const delay = 1200

let i = 0
let isDeleting = false

function typeWriter() {
  const element = document.getElementById("typewriter")

  if (!isDeleting) {
    // ESCRIBIR
    element.innerHTML = text.substring(0, i + 1)
    i++

    if (i === text.length) {
      isDeleting = true
      setTimeout(typeWriter, delay) // pausa antes de borrar
      return
    }
  } else {
    // BORRAR
    element.innerHTML = text.substring(0, i - 1)
    i--

    if (i === 0) {
      isDeleting = false
    }
  }

  setTimeout(typeWriter, isDeleting ? eraseSpeed : speed)
}

window.addEventListener("load", typeWriter)


document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 25
  const y = (window.innerHeight / 2 - e.clientY) / 25

  document.querySelector(".home__blob").style.transform = `translate(${x}px, ${y}px)`
  document.querySelector(".home__data").style.transform = `translate(${x/2}px, ${y/2}px)`
})


const clickSound = document.getElementById("clickSound")
const hoverSound = document.getElementById("hoverSound")

// TODOS los botones
const buttons = document.querySelectorAll(".button, .home__social-link")

buttons.forEach(btn => {

  // CLICK
  btn.addEventListener("click", () => {
    clickSound.currentTime = 0
    clickSound.play()
  })

  // HOVER (suave)
  btn.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0
    hoverSound.volume = 0.3
    hoverSound.play()
  })

})

const swiperProjects = new Swiper('.projects__swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor: true,
  speed: 600,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay:3000,
    disableOnInteraction: false,
  }

 });

 const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const targetSelector = tab.dataset.target,
          targetContent = document.querySelector(targetSelector)

    // Disable all content and active tabs
    tabContents.forEach((content) => content.classList.remove('work-active'))
    tabs.forEach((t) => t.classList.remove('work-active'))

    // Active the tab and corresponding content
    tab.classList.add('work-active')
    targetContent.classList.add('work-active')
  })
})

particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5, "random": false },
    "size": { "value": 3, "random": true },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4, // Velocidad del movimiento
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "grab" }, // Se conectan al pasar el mouse
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "grab": { "distance": 140, "line_linked": { "opacity": 1 } }
    }
  },
  "retina_detect": true
});


const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 60; // Ajusta la cantidad

function init() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speedX: Math.random() * 1 - 0.5,
            speedY: Math.random() * 1 - 0.5,
            color: 'rgba(255, 255, 255, 0.3)' // Puedes cambiar el color aquí
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});

init();
animate();


/*=========================================
=          SCROLL REVEAL                  =
=========================================*/

const revealElements = document.querySelectorAll(
'.reveal,.reveal-left,.reveal-right'
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('reveal-visible');

            observer.unobserve(entry.target);

        }

    });

},{
    threshold:.15
});

revealElements.forEach(el=>observer.observe(el));