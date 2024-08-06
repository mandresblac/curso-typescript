"use strict";
// Funciones
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
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
const a1 = echo(1); // El typeof es Number
const b1 = echo("Hola mundo"); // El typeof es String
// El parametro hereda de la interfaz la cual fuerza al parametro para que tenga el método leng th
function echo(arg) {
    // console.log(arg.length);
    return arg;
}
// Esto funcionará
let c1 = echo("aaa");
let t = echo({ length: 2, name: "aa" });
// Esto NO funcionará
let b2 = echo(1);
function getName(n) {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n();
    }
}
