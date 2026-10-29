document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. CONFIGURACIÓN Y ROTACIÓN DE IMÁGENES DE FONDO ---
    // Coloca aquí los nombres o rutas de tus 4 imágenes
    const imagenesFondo = [
        'fondo0.jpg',
        'fondo1.jpg',
        'fondo2.jpg',
        'fondo3.jpg',
        'fondo4.jpg',
        'fondo5.jpg',
    ];
    
    let indiceActual = 0;
    const fondo = document.querySelector(".parallax-bg");
    
    // Función para cambiar la imagen
    const cambiarImagenFondo = () => {
        fondo.style.backgroundImage = `url('${imagenesFondo[indiceActual]}')`;
        // Avanza a la siguiente imagen, y vuelve a la primera al terminar
        indiceActual = (indiceActual + 1) % imagenesFondo.length;
    };
    
    // Carga la primera imagen de inmediato
    cambiarImagenFondo();
    
    // Cambia la imagen automáticamente cada 6 segundos (6000 milisegundos)
    setInterval(cambiarImagenFondo, 5000);


    // --- 2. MOVIMIENTO DEL FONDO (PARALLAX EFFECT) ---
    window.addEventListener("scroll", () => {
        let despliegueScroll = window.scrollY;
        fondo.style.transform = `translateY(${despliegueScroll * 0.15}px)`;
    });


    // --- 3. ANIMACIÓN DE COMPONENTES AL HACER SCROLL ---
    const elementosAnimados = document.querySelectorAll(".scroll-anim");
    
    const comprobarScroll = () => {
        const disparadorPunto = window.innerHeight * 0.85;
        
        elementosAnimados.forEach(elemento => {
            const elementoTop = elemento.getBoundingClientRect().top;
            if (elementoTop < disparadorPunto) {
                elemento.classList.add("activo");
            }
        });
    };
    
    window.addEventListener("scroll", comprobarScroll);
    comprobarScroll(); 


    // --- 4. ENVÍO DEL FORMULARIO A WHATSAPP ---
    const formulario = document.getElementById("form-invitacion");
    
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const nombre = document.getElementById("nombre").value;
        const evento = document.getElementById("evento").value;
        const detalles = document.getElementById("detalles").value || "Sin detalles adicionales";
        
        const telefono = "7775457308";
        
        const mensaje = `¡Hola! Me interesa una invitación digital:%0A%0A` +
                        `*Nombre:* ${encodeURIComponent(nombre)}%0A` +
                        `*Evento:* ${encodeURIComponent(evento)}%0A` +
                        `*Detalles:* ${encodeURIComponent(detalles)}`;
        
        const urlWhatsApp = `https://wa.me/${telefono}?text=${mensaje}`;
        window.open(urlWhatsApp, "_blank");
    });
});
