"use strict";
class Car {
    // Metodo Constructor
    constructor(marca, color, puertas = 4) {
        this._marca = marca;
        this._color = color;
        this._puertas = puertas;
        if ((puertas % 2) === 0) {
            this._puertas = puertas;
        }
        else {
            console.error('Las puertas deben ser un número par.');
        }
        Car._numberOfCars;
    }
    // Accessorios
    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
    get color() {
        return `El color del carro es ${this._color}`;
    }
    set color(color) {
        this._color = color;
    }
    get puertas() {
        return this._puertas;
    }
    set puertas(puertas) {
        if (puertas % 2 === 0) {
            this._puertas = puertas;
        }
        else {
            console.error('Las puertas deben ser un número par.');
        }
    }
    // Metodos
    acelerar(velocidad) {
        return `${this.trabajar()} esta acelerando a ${velocidad} MPH.`;
    }
    frenar() {
        return `${this.trabajar()} está frenando con el sistema de frenos estándar.`;
    }
    girar(direccion) {
        return `${this.trabajar()} esta girando a la ${direccion}.`;
    }
    // Esta función realiza trabajo para las otras funciones del método.
    trabajar() {
        return this._marca;
    }
    static getNumberOfCars() {
        return Car._numberOfCars;
    }
}
// Propiedades o atributos
Car._numberOfCars = 0;
;
class ElectricCar extends Car {
    // Constructor
    constructor(marca, color, range, puertas = 2) {
        super(marca, color, puertas);
        this._range = range;
    }
    // Accessors
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }
    // Methods
    charge() {
        console.log(`${this.trabajar()} está cargando.`);
    }
    // Anula el método de frenar de la clase Car.
    frenar() {
        return `${this.trabajar()} está frenando con el sistema de frenado regenerativo.`;
    }
}
// INSTANCIAS DE LA CLASE Car
// Instanciamos objeto 1
let myCar1 = new Car("Cool Car Company", "blue", 2);
// Instanciamos objeto 2
let myCar2 = new Car('Galaxy Motors', 'red', 3);
// Instanciamos objeto 3
let myCar3 = new Car('Galaxy Motors', 'gray');
// console.log(myCar3.puertas);  // returns 4, the default value
// Instanciamos objeto 4
let myCar4 = new Car('Galaxy Motors', 'blue', 2);
// console.log(Car.getNumberOfCars());
// INSTANCIAS DE LA SUBCLASE ElectricCar
let spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.puertas); // returns the default, 2
spark.charge(); // Devuelve "Spark Motors se está cargando"
console.log(spark.frenar()); // devuelve "Spark Motors está frenando con el sistema de frenado regenerativo"
