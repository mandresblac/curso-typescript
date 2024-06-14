"use strict";
function area(shape, width, height) {
    const area = width * height;
    return `Yo soy un ${shape} con un area de ${area} cm al cuadrado.`;
}
document.body.innerHTML = area("rectangulo", 30, 15);
