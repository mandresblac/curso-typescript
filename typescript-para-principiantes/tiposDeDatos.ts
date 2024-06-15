// Tipo de Datos Enum
enum Animals {cat = 1, lion, dog = 11, cow, monkey};
const c: Animals = Animals.monkey;

console.log(Animals[5]);
console.log(Animals.monkey);

// Tipos Any
let x: any = "apple";
let n: any = 14;
let z: any = false;

// Tipos Never
let e: never; // Ok
// let f: never = false; // Error
// let g: never = null; // Error
// let h: never = "monday"; // Error

function stuck(): never {
  while (true) {
  }
}