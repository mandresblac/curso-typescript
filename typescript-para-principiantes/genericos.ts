const varios: (string | number | number[])[] = [2, "hola", 5, "Adios", [1, 2, 3, 4,]];
console.log(varios);

function randomIntElem(theArray: number[]): number {
  let randomIndex = Math.floor(Math.random()*theArray.length);
  return theArray[randomIndex];
}

const positions: number[] = [103, 458, 472, 458];
const randomPosition: number = randomIntElem(positions);


function randomStrElem(theArray: string[]): string {
  let randomIndex = Math.floor(Math.random()*theArray.length);
  return theArray[randomIndex];
}

const colors1: string[] = ['violet', 'indigo', 'blue', 'green'];
const randomColor1: string = randomStrElem(colors1);


// Genericos
function randomElem<T>(theArray: T[]): T {
  let randomIndex = Math.floor(Math.random()*theArray.length);
  return theArray[randomIndex];
}
const colors2: string[] = ['violet', 'indigo', 'blue', 'green'];
const randomColor2: string = randomElem(colors2);