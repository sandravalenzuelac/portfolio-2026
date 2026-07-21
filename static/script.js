let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showItem(index) {
    items.forEach((item, i) => {
        item.style.display = (i === index) ? 'block' : 'none';
    });
}

function moveCarousel(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = items.length - 1; // Vuelve al último elemento
    } else if (currentIndex >= items.length) {
        currentIndex = 0; // Vuelve al primer elemento
    }

    showItem(currentIndex);
}

// Inicializa mostrando el primer proyecto
showItem(currentIndex);

// Inicializar EmailJS
emailjs.init("H0oZsSlt7xgFJcgnJ"); 

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Evitar el envío por defecto del formulario

  // Obtener los valores del formulario
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const contactMethod = document.getElementById("contactMethod").value;

  // Validación básica
  if (!name || !message || (contactMethod === "email" && !email)) {
    alert("Por favor, completa todos los campos obligatorios.");
    return;
  }

  if (contactMethod === "email") {
    // Enviar el mensaje por correo usando EmailJS
    emailjs
  .send("service_61tlpin", "template_nhszytw", {
    name: name,
    email: email,
    message: message,
  })
  .then(() => {
    alert("Mensaje enviado por correo electrónico.");
  })
  .catch((error) => {
    console.error("Error al enviar el correo:", error);
    alert(`Error al enviar el mensaje: ${error.text}`);
  });
  } else if (contactMethod === "whatsapp") {
    // Generar un enlace de WhatsApp con el mensaje
    const phoneNumber = "5491153744122"; // Cambia este número por tu WhatsApp (incluye el código del país)
    const whatsappMessage = `Hola, soy ${name}. ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
    alert("Mensaje enviado a través de WhatsApp.");
    document.getElementById("contactForm").reset(); // Limpiar el formulario
  } else {
    alert("Selecciona un método de contacto válido.");
  }
});

// Diccionario de traducciones
const translations = {
  "About Me": "Sobre mí",
  "Projects": "Proyectos",
  "Education": "Educación",
  "Contact": "Contacto",
  "E-commerce System": "Sistema de comercio electrónico",
  "Development of an e-commerce system for a small business. Includes product inventory, user management, and shopping cart functionalities. Developed using Python, Flask, and MySQL.": 
  "Desarrollo de un sistema de comercio electrónico para una pequeña empresa. Incluye inventario de productos, gestión de usuarios y funcionalidades de carrito de compras. Desarrollado con Python, Flask y MySQL.",
  "Personal Productivity System": "Sistema de productividad personal",
  "A productivity management system for personal use. Features include task management, progress tracking with a color-changing productivity bar, and habit tracking. Technologies: .NET, SQL, and Python.": 
  "Un sistema de gestión de productividad para uso personal. Incluye gestión de tareas, seguimiento del progreso con una barra de productividad que cambia de color y seguimiento de hábitos. Tecnologías: .NET, SQL y Python.",
  "Cryptocurrency Management System": "Sistema de gestión de criptomonedas",
  "A system designed to manage cryptocurrency portfolios for small businesses, providing features like transaction tracking, real-time price updates, and analytics. Built with C#, ASP.NET, and MySQL.": 
  "Un sistema diseñado para gestionar carteras de criptomonedas para pequeñas empresas, proporcionando características como seguimiento de transacciones, actualizaciones de precios en tiempo real y análisis. Construido con C#, ASP.NET y MySQL.",
  "University Degree in Programming": "Título universitario en programación",
  "National Technological University (UTN), ongoing. Covers backend development, databases, system modeling, and optimization techniques.": 
  "Universidad Tecnológica Nacional (UTN), en curso. Cubre desarrollo backend, bases de datos, modelado de sistemas y técnicas de optimización.",
  "Web Development Bootcamp": "Bootcamp de desarrollo web",
  "Completed training in Full Stack Web Development, including frontend (HTML, CSS, JS) and backend technologies (Python, Flask, MySQL).": 
  "Entrenamiento completado en desarrollo web Full Stack, incluyendo tecnologías de frontend (HTML, CSS, JS) y backend (Python, Flask, MySQL).",
  "Email:": "Correo electrónico:",
  "LinkedIn:": "LinkedIn:",
  "GitHub:": "GitHub:",
  "Name": "Nombre",
  "Message": "Mensaje",
  "Send": "Enviar"
};

// Función para traducir la página
function translatePage() {
  const elements = document.querySelectorAll("*"); // Selecciona todos los elementos
  elements.forEach((el) => {
    if (el.children.length === 0) {
      const text = el.innerText.trim();
      if (translations[text]) {
        el.innerText = translations[text];
      }
    }
  });
}

// Evento para traducir al hacer clic en el botón
document.getElementById("translate-btn").addEventListener("click", translatePage);
