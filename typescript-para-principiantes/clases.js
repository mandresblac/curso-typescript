"use strict";
class Persona {
    constructor(elNombre, laEdad) {
        this.nombre = elNombre;
        this.edad = laEdad;
    }
    presentarce() {
        console.log(`¡Hola, yo soy ${this.nombre}!`);
    }
}
;
const persona1 = new Persona("Sara");
// console.log(persona1);
persona1.presentarce();
// persona1.nombre = "Gloria";
// persona1.presentarce();
class Amigo extends Persona {
    constructor(nombre, edad, anosDeAmistad) {
        super(nombre, edad);
        this.anosDeAmistad = anosDeAmistad;
    }
    tiempoDeConocido() {
        console.log(`Hemos sido amigos por ${this.anosDeAmistad} años.`);
    }
    amigoDesde() {
        let primeraEdad = this.edad - this.anosDeAmistad;
        console.log(`Somos amigos desde que yo tenia ${primeraEdad} años.`);
    }
}
;
const amigo1 = new Amigo("Jacobo", 27, 2);
amigo1.presentarce();
amigo1.tiempoDeConocido();
amigo1.amigoDesde();
