"use strict";
class Shape {
    constructor(name, width, height) {
        this.name = name;
        this.area = width * height;
        this.color = "Pink";
    }
}
class Shape3D extends Shape {
    constructor(name, width, height, length) {
        super(name, width, height);
        this.name = name;
        this.volume = length * this.area;
    }
    ;
    shoutout() {
        return "I'm " + this.name + " with a volume of " + this.volume + " cm cube.";
    }
    superShout() {
        return super.shoutout();
    }
}
let cube = new Shape3D("cube", 30, 30, 30);
console.log(cube.shoutout());
console.log(cube.superShout());
