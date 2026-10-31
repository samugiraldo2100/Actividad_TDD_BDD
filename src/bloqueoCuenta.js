const LIMITE_INTENTOS_FALLIDOS = 5;

function debeBloquearCuenta(intentosFallidos) {
    return intentosFallidos >= LIMITE_INTENTOS_FALLIDOS;
}

function puedeIniciarSesion(cuentaBloqueada, contrasenaCorrecta) {
    return !cuentaBloqueada && contrasenaCorrecta;
}

module.exports = { debeBloquearCuenta, puedeIniciarSesion };