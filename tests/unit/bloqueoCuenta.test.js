const { debeBloquearCuenta } = require('../../src/bloqueoCuenta');

test('bloquea la cuenta al llegar a cinco intentos fallidos', () => {
    const resultado = debeBloquearCuenta(5);
    expect(resultado).toBe(true);
});