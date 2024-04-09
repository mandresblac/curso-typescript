"use strict";
let cuenta = "cuenta";
let cuentaNumerica = 3000000;
let cuentaActiva = false;
// console.log(cuenta);
// console.log(cuentaNumerica);
// console.log(cuentaActiva);
// Arrays
// Opción 1 de declarar un array: string[]
const cuentas = ["cuentas1", "cuentas2", "cuentas3"];
cuentas[3] = "cuenta4";
console.log(cuentas);
// Opción 2 de declarar un array: Array<string>
const animales = ["Perro", "Gato", "Gallina", "Loro"];
// Tuplas
let miTupla;
miTupla = [true, "string", 123];
//Enums
var Roles;
(function (Roles) {
    Roles[Roles["Empleado"] = 0] = "Empleado";
    Roles[Roles["Administrador"] = 1] = "Administrador";
    Roles[Roles["Asistente"] = 2] = "Asistente";
})(Roles || (Roles = {}));
;
let resultado = Roles.Administrador;
console.log(resultado);
