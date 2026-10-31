const { defineFeature, loadFeature } = require('jest-cucumber');
const { puedeIniciarSesion } = require('../../src/bloqueoCuenta');

const feature = loadFeature('./tests/bdd/bloqueoDurantePeriodo.feature');

defineFeature(feature, test => {
    test('Rechazar el acceso mientras la cuenta sigue bloqueada', ({ given, when, then }) => {
        let resultado;

        given('que la cuenta está bloqueada', () => {
            resultado = true;
        });

        when('el usuario ingresa la contraseña correcta antes de 15 minutos', () => {
            resultado = puedeIniciarSesion(resultado, true);
        });

        then('el inicio de sesión debe ser rechazado', () => {
            expect(resultado).toBe(false);
        });
    });
});