'use strict';

// Carga de la función init
window.addEventListener('load', init, false);

// Función inicial
function init() {
    // Declaración de las variables
    let nombre = document.getElementById('nombreTxt');
    let apellido = document.getElementById('apellidoTxt');
    let email = document.getElementById('emailTxt');
    let numero = document.getElementById('numberTxt');
    let mensaje = document.getElementById('mensajeTxt');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    // Función del botón Enviar
    btnEnviar.onclick = function (e) {
        // Prevenir el envío del formulario
        e.preventDefault();

        // Obtener los valores del formulario
        nombre = nombre.value;
        apellido = apellido.value;
        email = email.value;
        numero = numero.value;
        mensaje = mensaje.value;

        // Condicionales anidadas para validar cada campo del formulario
        if (nombre === '' || apellido === '' || email === '' || numero === '' || mensaje === '') {
            // Si algún campo está vacío, mostrar alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Campos incompletos',
                text: 'Debe llenar todos los campos.',
            });
        } else if (expressionEmail.test(email) === false) {
            // Si el email no es válido
            Swal.fire({
                icon: 'error',
                title: 'Campos Vacíos',
                text: 'Por favor complete todos los campos.',
            });
        } else {
            // Si todo está bien, mostrar alerta de éxito
            Swal.fire({
                icon: 'success',
                title: 'Mensaje enviado',
                text: 'Gracias por ponerte en contacto, nos comunicaremos pronto.',
            });

            // Enviar los datos del formulario (por ejemplo, usando emailjs)
            emailjs.sendForm('service_7xvmcss', 'template_80ty99h', '#form1', 'Yh5Zzyawgwf5Gilqw');

            // Limpiar el formulario después de enviar
            limpiar();
        }
    };

    // Función para limpiar el formulario
    function limpiar() {
        nombreTxt.value = '';
        apellidoTxt.value = '';
        emailTxt.value = '';
        numberTxt.value = '';
        mensajeTxt.value = '';
    }
}
