//  Interfaces
interface Lagos {
  nombre: string;
  area: number;
  longitud: number;
  profundidad: number;
  esAguaDulce: boolean;
  paises: string[];
  congelado?: string[];
  [extraProp: string]: any
}

const primerLago: Lagos = {
  nombre: "mar caspio",
  area:371000,
  longitud: 1199,
  profundidad: 1025,
  esAguaDulce: false,
  paises: ['Kazakhstan', 'Russia', 'Turkmenistan', 'Azerbaijan', 'Iran']
};

const segundoLago: Lagos = {
  nombre: 'Superior',
  area: 82100,
  longitud: 616,
  profundidad: 947,
  esAguaDulce: true,
  paises: ['Canada', 'United States']
};

const tercerLago: Lagos = {
  nombre: 'Baikal',
  area: 31500,
  longitud: 636,
  profundidad: 1637,
  esAguaDulce: true,
  paises: ["Rusia"],
  congelado: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"]
};

let cuartoLago: Lagos = {
  nombre: 'Tanganyika',
  profundidad: 1470,
  longitud: 676,
  area: 32600,
  esAguaDulce: true,
  paises: ['Burundi', 'Tanzania', 'Zambia', 'Congo'],
  kigoma:'Tanzania',
  kalemie: 'Congo',
}

console.log(primerLago.nombre);

// Propiedades de sólo Lectura
interface Enemy {
  readonly size: number,
  health: number,
  range: number,
  readonly damage: number
}

const tank: Enemy = {
  size: 50,
  health: 100,
  range: 60,
  damage: 12
}

// tank.size = 27;
tank.health = 95;
// tank.damage = 10;

// Funciones e Interfaces
interface EnemyHit {
  (name: Enemy, damageDone: number): number;
}

const tankHit: EnemyHit = (tankName: Enemy, damageDone: number) => {
  tankName.health -= damageDone;
  return tankName.health;
}