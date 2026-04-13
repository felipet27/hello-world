console.log("Hello, World! This is a simple JavaScript file.");

console.log("You can add more functionality to this file as needed."); 

// Crear una funcion que me pueda ver la hora actual
function mostrarHoraActual() {
    const fechaActual = new Date();
    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();  
    console.log(`La hora actual es: ${hora}:${minutos}:${segundos}`);
}

mostrarHoraActual();        
