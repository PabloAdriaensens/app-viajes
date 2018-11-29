$('#password, #confirm_password').on('change', function () {
    if ($('#password').val() == $('#confirm_password').val()) {
        $('#message').html('').css('color', 'green');
        console.log("funciona");
    } else {
        console.log("no funciona");
        $('#message').html('Las contraseñas no coinciden').css('color', 'red');
    }
});