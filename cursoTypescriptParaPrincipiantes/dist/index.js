"use strict";
/* ----- TIPOS DE DATOS BASICOS EN TYPESCRIPT ----- */
// String
let myTypeString = "Hello World";
// number
let myTypeNumber = 35;
// Boolean
let myTypeBoolean = true;
/* -------- ARRAYS -------- */
// Arrays de números
// Declaracion array tipo 1
let arrayNumber1 = [1, 2, 3, 4, 5];
// Declaracion array tipo 2
let arrayNumber2 = [1, 2, 3, 4, 5];
// Arrays de string
let arrayString1 = ['a', 'b', 'c', 'd', 'e'];
// Declaracion array tipo 2
let arrayString2 = ['f', 'g', 'h', 'i'];
// Array de diferentes tipos
let arrayDiferentes = ["Hola", 1, 2];
/* -------- TUPLAS -------- */
// las tuplas son un tipo de array pero sabe esactamente cuantos elementos contiene el array y que tipo de dato hay en cada posicion, se debe respetar el orden en el que van los tipos de datos
let tuplePlayers = ["Hola", 12, false];
// Tupla de array, es decir un array dentro de otro array
let players = [];
players = [
    [1, "Lebron"],
    [2, "Carry"],
    [3, "Durant"],
    [4, "Smith"]
];
/* -------- INFERENCIA DE TIPOS -------- */
// La inferencia de tipos es la capacidad del compilador de TypeScript para determinar automáticamente el tipo de una variable basándose en el valor que se le asigna. Esto significa que no tienes que especificar explícitamente el tipo de una variable cada vez que la declaras. En su lugar, el compilador mirará el valor e inferirá el tipo por ti.
// Por ejemplo, en el siguiente fragmento de código, TypeScript deducirá automáticamente que el tipo de nombre es una cadena:
let nombre = "John";
// Otros ejemplos
let myVariable1;
let myVariable2;
let myVariable3 = "Hola mundo";
/* -------- COMPOSICIÓN DE TIPOS -------- */
// Para crear tipos de datos bastante complejos que se pueden combinar existen dos maneras: los Union Types y los Generics
// Union Types = |
// Con los union types podemos declarar que una variable pueda ser de dos o mas tipos, es decir, podemos hacer que una variable admita más de un tipo de dato, haciendo un poco más flexible a TypeScript.
let miVariableUnion;
miVariableUnion = 12;
// union de tipes en arreglos
const myArreglo = [1, 2, 3, "Hola mundo"];
const miscelanea = [false, 12, true,];
// Esta función regresa true si le pasamos un día hábil de la semana, caso contrario regresará false.
// Si pasamos un valor que no está incluido en nuestro type obtendremos un error
const isDiaLaboral = (dia) => dia !== "Sabado" && dia !== "Domingo";
console.log(isDiaLaboral("Miecoles"));
