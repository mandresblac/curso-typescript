/* Module 2: Declare variable types in TypeScript
   Lab start  */

/*  EXERCISE 1
    TODO: Modify the code to add types to the variable declarations. 
    The resulting JavaScript should look the same as the original example when you're done. */

let firstName: string;
let lastName: string;
let fullName:string;
let age: number;
let ukCitizen: boolean = false;

firstName = 'Rebecca';
lastName = 'Smith';
age = 42;
ukCitizen = false;
fullName = firstName + " " + lastName;

if (ukCitizen) {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
} else {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
}

/* EXERCISE 2
   TODO: You can use types to ensure operation outcomes. Run the code as is and then modify 
   it to have strongly typed variables. Then, address any errors you find so that the result 
   returned to a is 12. */

let x: number;
let y: number;
let a: number;

x = 5;
y = 7;
a = x + y;

console.log(a);

/* EXERCISE 3
   TODO: In the following code, implement an enum type called Season that represents 
   the constants "Fall", "Winter", "Spring", and "Summer". Then, update the function so 
   you can pass in the season by referencing an item in the enum, for example 
   Season.Fall, instead of the literal string "Fall". */

enum Season {
    Fall,
    Winter,
    Spring,
    Summer
};

function whichMonths(season: Season) {

    let monthsInSeason: string;

    switch (season) {
        case Season.Fall:
            monthsInSeason = "September to November";
            break;
        case Season.Winter:
            monthsInSeason = "December to February";
            break;
        case Season.Spring:
            monthsInSeason = "March to May";
            break;
        case Season.Summer:
            monthsInSeason = "June to August";
    }

    return monthsInSeason;
}

console.log(whichMonths(Season.Fall));

/* EXERCISE 4
   TODO: Declare the array as the type to match the type of the items in the array. */

let randomNumbers: number[] = [];
let nextNumber: number;

for (let i = 0; i < 10; i++) {
    nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    randomNumbers.push(nextNumber);
}

console.log(randomNumbers);

// EXERCISE 5

const totalOportunidades = (array: string[]) => {
    // Separamos los elementos del array original y los almacenamos en variables individuales 
    const resultPerdida: string[]= array.filter((element: string) => element === "PERDIDA");
    const resultganada: string[] = array.filter((element: string) => element === "GANADA");
    const resultEnproceso: string[] = array.filter((element: string) => element === "EN PROCESO");
    const resultCerrada: string[] = array.filter((element: string) => element === "CERRADA");

    // Retornamos
    return `Perdida: ${resultPerdida.length} \nGanada: ${resultganada.length} \nEn proceso: ${resultEnproceso.length} \nCerrada: ${resultCerrada.length}
        `
};

const oportunidades: string[] = ["PERDIDA", "GANADA", "EN PROCESO", "CERRADA", "GANADA", "CERRADA", "PERDIDA" , "GANADA", "CERRADA", "CERRADA"];

console.log(totalOportunidades(oportunidades));

// EXERCISE 6
class Persona {
    // Atributos, propiedades o variables de clase
    nombre: string;
    apellido: string;
    edad: number;
    soltero: string;
    ocupacion: string;

    // Metodo constructor
    constructor (nombre: string, apellido: string, edad: number, soltero: string, ocupacion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.soltero = soltero;
        this.ocupacion =  ocupacion;
    }

    // Metodo 1
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}, tengo ${this.edad} años y estoy ${this.soltero}.`);
    }

    // Metodo 2
    trabajar() {
        console.log(`Yo soy ${this.ocupacion}.`)
    }
}

const persona1 = new Persona("Carlos", "Torres", 28, "Soltero", "Abogado");
persona1.saludar();
persona1.trabajar();

const persona2 = new Persona("Carolina", "Duran", 32, "Casada", "Caontadora");
persona2.saludar();
persona2.trabajar();
