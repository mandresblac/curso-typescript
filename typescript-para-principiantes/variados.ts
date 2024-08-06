// Funciones
function padLeft(value: string, padding: string | number) {
  if(typeof padding === "number"){
    return Array(padding + 1).join(" ") + value;
  }
  if(typeof padding === "string") {
    return Array(padding.length + 1).join(" ") + value;
  }
  // Si existiera Any tendriamos que controlar la excepción
  // Como buenas practicas y ya que este código al fin y al cabo
  // será javascript y es vulnerable a inyeción siempre está bien
  // realizar el control de las posibles excepciones
  throw new Error(`Expected String or number, got '${padding}' `);
}

// console.log(padLeft("hello", "aaa")); // Ejemplo de función con texto -> Funciona
// console.log(padLeft("hello", 5)); // Ejemplo de función con número -> Funciona
// console.log(padLeft("hello", true)); // Ejemplo de función con texto -> NO FUNCIONA (no compila)

// Genericos
// Ejemplo 1
// function echo<T>(arg: T) : T {
//   return arg;
// }

const a1 = echo<number>(1); // El typeof es Number
const b1 = echo<String>("Hola mundo"); // El typeof es String

// console.log(typeof a1);
// console.log(typeof b1);

// Ejemplo 2
// class Generic<T> {
//   add: (X: T, y:T) => T;
// }
// let myGeneric = new Generic<number>();
// console.log(myGeneric.add = (x, y) => x + y);
// console.log(myGeneric.add(5, 4));

// Ejemplo 3
// const Generic = (() => {
//   const Generic = () => {
//   }
//   return Generic;
// }());
// var myGeneric = new Generic();
// console.log(myGeneric.add = function (x, y) { return x + y; });
// console.log(myGeneric.add(3, 4));

// Ejemplo 4
// Interfaz que asegura que el parametro tenga el metodo length
interface WithLength {
  length: number;
}

// El parametro hereda de la interfaz la cual fuerza al parametro para que tenga el método leng th
function echo<T extends WithLength>(arg: T): T {
  // console.log(arg.length);
  return arg;
}

// Esto funcionará
let c1 = echo("aaa");
let t = echo({length: 2, name: "aa"});

// Esto NO funcionará
let b2 = echo(1);

// Type Alias
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  }
  else {
    return n();
  }
}