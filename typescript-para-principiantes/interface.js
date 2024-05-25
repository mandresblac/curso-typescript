"use strict";
function area(shape) {
    let area = shape.width * shape.height;
    return `Yo soy un ${shape.name} con un area de ${area} cm cuadrados`;
}
console.log(area({ name: "rectangulo", width: 30, height: 15 }));
console.log(area({ name: "cuadrado", width: 30, height: 30, color: "blue" }));
