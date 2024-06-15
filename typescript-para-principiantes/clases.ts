class Persona {
  private nombre: string;

  constructor(elNombre: string) {
    this.nombre = elNombre;
  }

  presentarce(){
    console.log(`¡Hola, yo soy ${this.nombre}!`);
  }
};

const persona1 = new Persona("Sara");

console.log(persona1);
persona1.presentarce();

// persona1.nombre = "Gloria";
// persona1.presentarce();

class Amigo extends Persona {
  anosDeAmistad: number;

  constructor(nombre: string, tiempoDeAmigos: number) {
    super(nombre);
    this.anosDeAmistad = tiempoDeAmigos;
  }

  tiempoDeConocido() {
    console.log(`Hemos sido amigos por ${this.anosDeAmistad} años.`)
  }
};

const amigo1 = new Amigo("Jacobo", 2);

amigo1.presentarce();
amigo1.tiempoDeConocido();