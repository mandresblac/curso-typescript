"use strict";
;
function area1(shape) {
    const area = shape.width * shape.height;
    return `Yo soy un ${shape.name} con un area de ${area} cm cuadrados`;
}
console.log(area1({ name: "rectangulo", width: 30, height: 15 }));
console.log(area1({ name: "cuadrado", width: 30, height: 30, color: "blue" }));
console.log(area1({ name: "cuadrado", width: 20, height: 20 }));
function suma(n1, n2) {
    return n1 + n2;
}
;
console.log(suma(10, 11));
