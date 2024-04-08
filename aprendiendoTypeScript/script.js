"use strict";
// Booleans
let estudiasteJavascript = false;
if (estudiasteJavascript) {
    console.log("Puedes seguir viendo este curso de Typescript");
}
else {
    console.log("Primero mira el curso de Javascript");
}
// Numbers
let interMiami = 11;
let fcDallas = 11;
let messi = 1;
let juegaMessi = true;
// void significa que la funcion no retorna nada
const jugar = (equipo1, equipo2, juegaMessi) => {
    if (equipo1 > equipo2) {
        console.log("Gana interMiami");
    }
    else if (equipo1 === equipo2) {
        console.log("Empatan");
    }
    else {
        console.log("Gana fcDallas");
    }
};
jugar(interMiami, fcDallas, juegaMessi);
// Any (Cualquier dato)
// any se usa para saltar las validaciones de tipado de Typescript pero la recomendacion es no usarlo, siempre hay que evitar que una variable sea de tipo any.
let disney;
disney = "Start Wars y Marvel";
console.log(disney);
disney = 15000000000;
console.log(disney);
disney = true;
console.log(disney);
// disney = undefined;
// console.log(disney);
// Arrays
let array;
array = [1, 3, 5, 7, 9];
console.log(array);
let arregloNumeros = [1, 2, 3, 4, 5, 6, 7];
let arregloStrings = ["HTML", "CSS", "JS"];
console.log(arregloNumeros[0]);
let programador = {
    nombre: "Manuel Blanco",
    tecnologias: ["React", "Angular", "Vue"],
    tomarCafe: true
};
let programador2 = {
    nombre: "Federico",
    tecnologias: ["HTML", "Cobol"],
    tomarCafe: null
};
;
let dev1 = {
    nombre: "Javier Lopez",
    tecnologias: ["React", "Angular", "Vue"],
    tomarCafe: true
};
let dev2 = {
    nombre: "Federico",
    tecnologias: ["HTML", "Cobol"],
    tomarCafe: null
};
const enviarCurriculum = (programador) => {
    console.log(`Este curriculum es de ${programador.nombre}`);
};
enviarCurriculum(dev1);
enviarCurriculum(dev2);
// CLASES Y POO
class Pelicula {
    // Metodo constructor
    constructor(nombre, personajes, actores) {
        this.nombre = nombre;
        this.personajes = personajes;
        this.actores = actores;
    }
    // Metodo o accion (Es una función) 
    proyectarEnCine() {
        console.log(`La pelicula "${this.nombre}" esta siendo proyectada.`);
    }
    ;
}
// Insatanciamos un objeto de la clase Pelicula
const pelicula1 = new Pelicula("Barbie", ["Barbie", "Ken"], ["Margot Robbie", "Ryan Gosling"]);
const pelicula2 = new Pelicula("Openheimer", ["Openheimer", "Strauss"], ["Cillian Murphy", "Robert Downey Jr."]);
console.log(pelicula1);
pelicula1.proyectarEnCine();
console.log(pelicula2);
pelicula2.proyectarEnCine();
// Encapsulamiento (get y set) y genericos
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(numero) {
        this.ticket = numero;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
;
let sorteo1 = new Sorteo("Camilo Perez");
sorteo1.setTicket("S7");
console.log(sorteo1.sortear());
