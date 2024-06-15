"use strict";
const primerLago = {
    nombre: "mar caspio",
    area: 371000,
    longitud: 1199,
    profundidad: 1025,
    esAguaDulce: false,
    paises: ['Kazakhstan', 'Russia', 'Turkmenistan', 'Azerbaijan', 'Iran']
};
const segundoLago = {
    nombre: 'Superior',
    area: 82100,
    longitud: 616,
    profundidad: 947,
    esAguaDulce: true,
    paises: ['Canada', 'United States']
};
const tercerLago = {
    nombre: 'Baikal',
    area: 31500,
    longitud: 636,
    profundidad: 1637,
    esAguaDulce: true,
    paises: ["Rusia"],
    congelado: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"]
};
let cuartoLago = {
    nombre: 'Tanganyika',
    profundidad: 1470,
    longitud: 676,
    area: 32600,
    esAguaDulce: true,
    paises: ['Burundi', 'Tanzania', 'Zambia', 'Congo'],
    kigoma: 'Tanzania',
    kalemie: 'Congo',
};
console.log(primerLago.nombre);
const tank = {
    size: 50,
    health: 100,
    range: 60,
    damage: 12
};
// tank.size = 27;
tank.health = 95;
const tankHit = (tankName, damageDone) => {
    tankName.health -= damageDone;
    return tankName.health;
};
