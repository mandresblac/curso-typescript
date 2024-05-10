/* En typescript hay tres tipos de datos: primitivos, compuestos y definidos por el usuario */

let cuenta: string = "cuenta";
let cuentaNumerica: number = 3_000_000;
let cuentaActiva: boolean = false;
// console.log(cuenta);
// console.log(cuentaNumerica);
// console.log(cuentaActiva);

// Arrays
// Opción 1 de declarar un array: string[]
const cuentas: string[] = ["cuentas1", "cuentas2", "cuentas3"];
cuentas[3] = "cuenta4";

console.log(cuentas);

// Opción 2 de declarar un array: Array<string>
const animales: Array<string> = ["Perro", "Gato", "Gallina", "Loro"];

// Tuplas
let miTupla: [boolean, string, number];
miTupla = [true, "string", 123];

//Enums
enum Roles {
  Empleado,
  Administrador,
  Asistente
};

let resultado =  Roles.Administrador;
console.log(resultado);