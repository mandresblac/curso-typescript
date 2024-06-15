"use strict";
const varios = [2, "hola", 5, "Adios", [1, 2, 3, 4,]];
console.log(varios);
function randomIntElem(theArray) {
    let randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
const positions = [103, 458, 472, 458];
const randomPosition = randomIntElem(positions);
function randomStrElem(theArray) {
    let randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
const colors1 = ['violet', 'indigo', 'blue', 'green'];
const randomColor1 = randomStrElem(colors1);
// Genericos
function randomElem(theArray) {
    let randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
const colors2 = ['violet', 'indigo', 'blue', 'green'];
const randomColor2 = randomElem(colors2);
