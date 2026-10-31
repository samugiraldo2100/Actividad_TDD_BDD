# language: es
Característica: Bloqueo temporal de cuenta
  Escenario: Rechazar el acceso mientras la cuenta sigue bloqueada
    Dado que la cuenta está bloqueada
    Cuando el usuario ingresa la contraseña correcta antes de 15 minutos
    Entonces el inicio de sesión debe ser rechazado
    