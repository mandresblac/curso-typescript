/* --------------- EJERCICIO 1 - GENERICOS --------------- */

// Genericos en Typescript
function getArray<T>( items: T[]): T[] {
  return new Array<T>().concat(items);
}

// Array de numbers
let numbreArray = getArray<number>([5, 10, 15, 20]);
// console.log(numbreArray);

numbreArray.push(25);
// console.log(numbreArray);

// Genera error porque espera numbers no strings
// numbreArray.push("Hola mundo"); 

// Array de strings
let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
// console.log(stringArray);

stringArray.push("Rabbits");
// console.log(stringArray);

// Genera error porque espera strings no number
// stringArray.push(12); 

/* --------------- EJERCICIO 2 - GENERICOS --------------- */
// Uso de varias variables de tipo
// No está limitado a usar una única variable de tipo en los componentes genéricos.

function identity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

let returnNumber = identity<number, string>(100, "Hello!");
let returnString = identity<string, string>("100", "Hello");
let returnBoolean = identity<boolean, string>(true, "Bonjour!");
// console.log(returnNumber);

returnNumber = returnNumber * 100;   // OK
// returnString = returnString * 100; 
// returnBoolean = returnBoolean * 100;

/* --------------- EJERCICIO 3 - GENERICOS --------------- */
type ValidTypes = string | number;
function identity1<T extends ValidTypes, U> (value: T, message: U) {   // Return type is inferred
  let result: ValidTypes = '';
  let typeValue: string = typeof value;

  if (typeof value === 'number') {           // Is it a number?
      result = value + value;                // OK
  } else if (typeof value === 'string') {    // Is it a string?
      result = value + value;                // OK
  }

  console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);

  return result;
}

let returnNumber1 = identity<number, string>(100, 'Hello!');      // OK
let returnString1 = identity<string, string>('100', 'Hola!');     // OK
let returnBoolean1 = identity<boolean, string>(true, 'Bonjour!');