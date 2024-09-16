

// -------------

// ------------------------------
const divProductos = document.querySelector("#itemsList");
const searchBarInput = document.querySelector("#filtro-1");
const filterInput = document.querySelector("#filterInput-2");

const productos = [
    {
        nombre: 'Cultivo de fresa',
        imagen: '/images/Productos_img/img-fresa.jfif',
        descripcion: 'El cultivo de fresa involucra la siembra y el cuidado de las plantas de fresa, asegurando el crecimiento adecuado para obtener fresas de calidad.',
        enlace: '#'
    },
    {
        nombre: 'Cultivo de maíz',
        imagen: '/images/Productos_img/Maiz.jfif',
        descripcion: 'El cultivo de maíz involucra la siembra y el cuidado de las plantas de maíz, asegurando el crecimiento adecuado para obtener mazorcas de calidad.',
        enlace: '#'
    },
    {
        nombre: 'Cultivo de Naranja',
        imagen: '/images/Productos_img/naranja.jfif',
        descripcion: 'El cultivo de naranjas requiere suelos bien drenados y fértiles, clima cálido con temperaturas entre 20-30°C y pleno sol. Se planta en primavera u otoño.',
        enlace: '#'
    },
    {
        nombre: 'Cultivo de Piña',
        imagen: '/images/Productos_img/piña.jfif',
        descripcion: 'El cultivo de piña se realiza para obtener tanto aceite como semillas comestibles. El cuidado del cultivo implica una gestión adecuada del agua y plagas.',
        enlace: '#'
    }
];

// Función para mostrar productos
const mostrarProductos = (productosFiltrados) => {
    divProductos.innerHTML = ''; // Limpia la lista actual
    productosFiltrados.forEach((producto) => {
        const newLi = document.createElement('li');
        newLi.classList.add('li-product');
        newLi.innerHTML = `
            <div class="card">
                <img class="img-productos" src="${producto.imagen}" alt="img-${producto.nombre.toLowerCase()}">
                <div class="boton">
                    <button class="button-ver-detalles">Consultar</button>
                </div>
                <div class="card__content">
                    <p class="card__title">${producto.nombre}</p>
                    <p class="card__description">
                        ${producto.descripcion} <a href="${producto.enlace}">... ver más</a>
                    </p>
                </div>
            </div>
        `;
        divProductos.appendChild(newLi);
    });
};

// Muestra todos los productos al cargar la página
mostrarProductos(productos);

// Función para filtrar productos por nombre
const filtrarProductos = (busqueda) => {
    return productos.filter(producto => 
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
};

// Añadir el evento de búsqueda al primer campo de búsqueda (header principal)
searchBarInput.addEventListener('input', (e) => {
    const terminoBusqueda = e.target.value;
    const productosFiltrados = filtrarProductos(terminoBusqueda);
    mostrarProductos(productosFiltrados);
});

// Añadir el evento de búsqueda al segundo campo de búsqueda (header-2)
filterInput.addEventListener('input', (e) => {
    const terminoBusqueda = e.target.value;
    const productosFiltrados = filtrarProductos(terminoBusqueda);
    mostrarProductos(productosFiltrados);
});


//MENU HAMBURGUESA
// Seleccionar el icono del menú y el contenedor de opciones
const menuToggle = document.getElementById("menuToggle");
const menuOpciones = document.getElementById("menuOpciones");

// Función para mostrar/ocultar el menú al hacer clic
menuToggle.addEventListener("click", () => {
    menuOpciones.style.display = menuOpciones.style.display === "block" ? "none" : "block";
});

// Cerrar el menú si se hace clic fuera de él
window.addEventListener("click", (event) => {
    if (!menuToggle.contains(event.target) && !menuOpciones.contains(event.target)) {
        menuOpciones.style.display = "none";
    }
});

// Seleccionar el enlace de "Cerrar sesión"
const cerrarSesionLink = document.getElementById('cerrarSesion');

// Agregar el evento 'click' para cerrar la pestaña
cerrarSesionLink.addEventListener('click', function(event) {
    event.preventDefault();  // Evitar que el enlace haga su acción predeterminada
    window.close();  // Intentar cerrar la pestaña
});
//GALERIA DE IMAGENES

const gallery = document.querySelector('.gallery-container');
const links = gallery.querySelectorAll('a');
const linkWidth = links[0].offsetWidth + 20; // 20 es el margen total

// Clonar los enlaces para crear el efecto infinito
links.forEach(link => {
    const clone = link.cloneNode(true);
    gallery.appendChild(clone);
});

let currentPosition = 0;
const totalWidth = linkWidth * links.length;

function moveGallery() {
    currentPosition -= 1; // Mover 1 píxel cada vez para un movimiento más suave
    
    if (currentPosition <= -totalWidth) {
        currentPosition = 0;
    }
    
    gallery.style.transform = `translateX(${currentPosition}px)`;
    requestAnimationFrame(moveGallery);
}

moveGallery();

// Prevenir el comportamiento predeterminado del enlace al hacer clic
gallery.addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        const link = e.target.parentElement.href;
        console.log('Enlace clickeado:', link);
        // Aquí puedes añadir la lógica para manejar el clic, 
        // como abrir el enlace en una nueva pestaña o mostrar un modal
    }
});

//FUNCION PARA QUE CAMBIE EL FONDO DEL SECTION DE PRODUCTOS 
const images = [
    '/images/img_fondos/fondo-4.png',
    '/images/img_fondos/fondo-3.jpg',
    '/images/img_fondos/Fondo-1.jpg',
    '/images/img_fondos/Fondo-2.jpeg',
    '/images/img_fondos/fondo-5.jpg',
    
];

let currentIndex = 0; // Índice actual de la imagen

function changeBackground() {
    const section = document.querySelector('.section-produtos');
    section.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length; // Cambia al siguiente índice, volviendo al principio si es necesario
}

// Cambiar el fondo cada 4 segundos
setInterval(changeBackground, 10000);

// Inicializar el fondo cuando la página se carga
changeBackground();