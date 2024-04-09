let mensaje: string = "Hola mundo";

mensaje = "chanchotp feliz";

mensaje = "Chao mundo";
console.log(mensaje);

console.log(typeof []);

/* Tipos de datos nativos de Javascript
- number
- string
- boolean
- null
- undefined
- object
- function
*/

/* Tipos de datos nativos de Typecript
- any ---> HAY QUE TRATAR DE NO USARLO
- unknown
- never
- arrays
- tuplas
- Enums
- Tipos inferidos: Cuando inicializamos una variable Typescript va a ser lo suficientemente inteligente para saber que tipo de variables es esta.
*/

let extincionDinosaurios: number = 76_000_000;
let dinosaurioFavoritos: string = "T-rex";
let extintos = true;

function chanchitoFeliz(config: any) {
  return config;
}

/* Tipo Array */
let animales: string[] = ["chanchito", "feliz", "felipe"];
let numeros1: number[] = [1, 2, 3];
let checks: boolean[] = [];
let numeros2: Array<number> = [];

// numeros1.map(x => x.); El autocompletado de Typescript sugiere metodos para el tipo de dato

/* Tuplas
Las tuplas son un tipo de dato que no existe en Javascript, pero sin embargo Typescript se tomo la libertad de poder implementarlos
*/

// Una tupla es una variable que contiene un set de datos que se encuentran ordenados.
let tupla: [number, string[]] = [1, ["chanchito feliz", "chanchito triste"]]; 

/* Enums
Enum significa tipo enumerado, es una lista de constantes las cuales podemos referenciar en un futuro
*/

const chica = "s";
const mediana = "m";
const grande = "l";
const extraGrande = "xl";

// Los enums se declaran con PascalCase
enum Talla { 
  Chica = "s",
  Mediana = "m",
  Grande = "l",
  ExtraGrande = "xl"
};
const variable1 = Talla.Grande;
console.log(variable1);

const enum LoadingState { Idle, Loading, Success, Error };

const estado = LoadingState.Success;

/* Objetos */
type Direccion = {
  numero: number,
  calle: string,
  pais: string
}

type Persona = {
  readonly id: number, // readonly permite unicamente lectura
  nombre?: string,
  talla: Talla,
  direccion: Direccion
}

const objeto: Persona = {
  id: 1,
  nombre: "Hola mundo",
  talla: Talla.Mediana,
  direccion: {
    numero: 1,
    calle: "Siempre viva",
    pais: "Chanchitolandia"
  }
};

const arr: Persona[] = [];

