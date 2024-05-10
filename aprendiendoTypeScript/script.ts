// Booleans

let estudiasteJavascript: boolean = false;

if (estudiasteJavascript) {
  console.log("Puedes seguir viendo este curso de Typescript");
} else {
  console.log("Primero mira el curso de Javascript");
}

// Numbers
let interMiami: number = 11;
let fcDallas: number = 11;
let messi: number = 1;
let juegaMessi: boolean = true;

// void significa que la funcion no retorna nada
const jugar = (equipo1: number, equipo2: number, juegaMessi: boolean): void => {


  if (equipo1 > equipo2) {
    console.log("Gana interMiami");
  } else if (equipo1 === equipo2) {
    console.log("Empatan");
  } else {
    console.log("Gana fcDallas");
  }
};

jugar(interMiami, fcDallas, juegaMessi);

// Any (Cualquier dato)
// any se usa para saltar las validaciones de tipado de Typescript pero la recomendacion es no usarlo, siempre hay que evitar que una variable sea de tipo any.
let disney: string | number | boolean;
disney = "Start Wars y Marvel"
console.log(disney);

disney = 15000000000;
console.log(disney);

disney = true;
console.log(disney);

// disney = undefined;
// console.log(disney);

// Arrays
let array: number[];
array = [1, 3, 5, 7, 9];
console.log(array);

let arregloNumeros: number[] = [1, 2, 3, 4, 5, 6, 7];
let arregloStrings: string[] = ["HTML", "CSS", "JS"];
let arregloVarios: (string | number)[] = [2, "Hola", 1, "Mundo"];

console.log(arregloNumeros[0]);

// Objetos y Types
type Programador = {
  nombre: string,
  tecnologias: string[],
  tomarCafe?: boolean | null // EL signo de interrogación ? significa que la propiedad es opcional
};

let programador: Programador = {
  nombre: "Manuel Blanco",
  tecnologias: ["React", "Angular", "Vue"],
  tomarCafe: true
};

let programador2: Programador = {
  nombre: "Federico",
  tecnologias: ["HTML", "Cobol"],
  tomarCafe: null
};

// Interfaces
interface NuevoProgramador {
  nombre: string,
  tecnologias: string[],
  tomarCafe?: boolean | null,
};

let dev1: NuevoProgramador = {
  nombre: "Javier Lopez",
  tecnologias: ["React", "Angular", "Vue"],
  tomarCafe: true
};

let dev2: NuevoProgramador = {
  nombre: "Federico",
  tecnologias: ["HTML", "Cobol"],
  tomarCafe: null
};

let dev3: NuevoProgramador = {
  nombre: "Pedro",
  tecnologias: ["HTML", "Css"],
  // tomarCafe: null
};

const enviarCurriculum = (programador: NuevoProgramador) => {
  console.log(`Este curriculum es de ${programador.nombre}`);
};

enviarCurriculum(dev1);
enviarCurriculum(dev2);

// CLASES Y POO
class Pelicula {
  // Atributos, propiedades o variables de clase
  nombre: string;
  personajes: string[];
  actores: string[];

  // Metodo constructor
  constructor (nombre: string, personajes: string[], actores: string[], ){
    this.nombre = nombre;
    this.personajes = personajes;
    this.actores = actores;
  }

  // Metodo o accion (Es una función) 
  proyectarEnCine() {
    console.log(`La pelicula "${this.nombre}" esta siendo proyectada.`);
  };
}

// Insatanciamos un objeto de la clase Pelicula
const pelicula1 = new Pelicula("Barbie", ["Barbie", "Ken"], ["Margot Robbie", "Ryan Gosling"]);

const pelicula2 = new Pelicula("Openheimer", ["Openheimer", "Strauss"], ["Cillian Murphy", "Robert Downey Jr."]);

console.log(pelicula1);
pelicula1.proyectarEnCine();
console.log(pelicula2);
pelicula2.proyectarEnCine();

// Encapsulamiento (get y set) y genericos
class Sorteo<T> {
  private ticket?: T;

  constructor(private nombre: string) {}

  setTicket(numero: T) {
    this.ticket = numero;
  }

  getTicket() {
    return this.ticket;
  }

  public sortear(): string {
    return `Para ${this.nombre} el ticket es ${this.ticket}`;
  }
};

let sorteo1 = new Sorteo<string>("Camilo Perez");

sorteo1.setTicket("S7");
console.log(sorteo1.sortear());
