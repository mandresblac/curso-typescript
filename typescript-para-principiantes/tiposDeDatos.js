"use strict";
// Tipo de Datos Enum
var Animals;
(function (Animals) {
    Animals[Animals["cat"] = 1] = "cat";
    Animals[Animals["lion"] = 2] = "lion";
    Animals[Animals["dog"] = 11] = "dog";
    Animals[Animals["cow"] = 12] = "cow";
    Animals[Animals["monkey"] = 13] = "monkey";
})(Animals || (Animals = {}));
;
const c = Animals.monkey;
console.log(Animals[5]);
console.log(Animals.monkey);
// Tipos Any
let x = "apple";
let n = 14;
let z = false;
// Tipos Never
let e; // Ok
// let f: never = false; // Error
// let g: never = null; // Error
// let h: never = "monday"; // Error
function stuck() {
    while (true) {
    }
}
