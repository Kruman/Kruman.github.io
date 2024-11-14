const text = "Bienvenido a mi portafolio.";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // Ajusta la velocidad aquí
    }
}

typeWriter();