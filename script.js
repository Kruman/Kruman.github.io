// Smooth scroll para los enlaces
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mostrar una sección específica y ocultar el contenedor principal
function showSection(sectionId) {
    // Oculta todas las secciones
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Muestra la sección seleccionada
    document.getElementById(sectionId).classList.add('active');

    // Oculta el contenedor principal
    document.getElementById('main-container').style.display = 'none';

    // Asegura que el contenedor de proyectos esté visible si se selecciona la sección de proyectos
    if (sectionId === 'projects') {
        document.getElementById('projects').style.display = 'block';
    }
}

// Mostrar el contenedor principal y ocultar las secciones
function showMainContainer() {
    // Muestra el contenedor principal
    document.getElementById('main-container').style.display = 'block';

    // Oculta todas las secciones
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Oculta el contenedor de proyectos principal
    document.getElementById('projects').style.display = 'none';
}

// Habilitar el desplazamiento suave para los enlaces de navegación
document.querySelectorAll('.btn-group a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mostrar una sección de proyecto específica y ocultar las demás
function showProject(projectId) {
    // Oculta todas las secciones
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Muestra la sección del proyecto seleccionado
    document.getElementById(projectId).classList.add('active');

    // Oculta el contenedor de proyectos principal
    document.getElementById('projects').style.display = 'none';
}

// Mostrar el contenedor de proyectos y ocultar las vistas de proyectos
function showProjectsContainer() {
    // Muestra el contenedor de proyectos
    document.getElementById('projects').style.display = 'block';

    // Oculta todas las vistas de proyectos
    document.querySelectorAll('.project-detail').forEach(section => {
        section.classList.remove('active');
    });

    // Asegúrate de que el contenedor principal esté oculto
    document.getElementById('main-container').style.display = 'none';
}
