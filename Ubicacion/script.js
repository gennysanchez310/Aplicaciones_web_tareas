document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Formulario").addEventListener("submit", function(event) {
        event.preventDefault(); 

        var nombre = document.getElementById("nombre").value;
        var edad = document.getElementById("edad").value;
        var asistencia = documento.getElementById("asistencia").value;
        var datosJSON = JSON.stringify(datos);

        localStorage.setItem("datos", datosJSON);

        var datos = {
            nombre: nombre,
            edad: edad,
            asistencia: asistencia};
            if(datos =! null){
                var confirmacion = document.getElementById("answer");
                confirmacion.innerHTML="<p>Se ha registrado con exito " + "</p>"
            }
        console.log(datos);
    });
});
