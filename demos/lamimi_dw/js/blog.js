'use strict';

window.addEventListener('load', init, false);

function init() {
    let email = document.getElementById('inscriptionTxt');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    // Función del botón Enviar
    btnEnviar.onclick = function() {
        let emailValue = email.value.trim();

        if (emailValue === '') {
            // SweetAlert: Email vacío
            Swal.fire({
                icon: 'error',
                title: '¡Oops!',
                text: 'El campo email está vacío',
                confirmButtonText: 'Entendido'
            });
        } else if (!expressionEmail.test(emailValue)) {
            // SweetAlert: Email inválido
            Swal.fire({
                icon: 'error',
                title: '¡Oops!',
                text: 'Email inválido',
                confirmButtonText: 'Entendido'
            });
        } else {
            // SweetAlert: Registro exitoso
            Swal.fire({
                icon: 'success',
                title: '¡Éxito!',
                text: 'Gracias por suscribirte. Estás listo para recibir nuestras novedades.',
                confirmButtonText: 'Gracias'
            }).then(() => {
                // Enviar formulario a EmailJS
                emailjs.sendForm('service_7xvmcss', 'template_jbj3kxa', '#inscription', 'Yh5Zzyawgwf5Gilqw')
                    .then(function(response) {
                        console.log('Success:', response);
                    }, function(error) {
                        console.log('Error:', error);
                    });

                // Limpiar el formulario
                cleanInputs();
            });
        }
    }

    // Función para limpiar el campo de email
    function cleanInputs() {
        email.value = '';
    }
}
