// Asercion de tipos
let channel1 : any = "Juan";

let channelStr2 = <string>channel1;
let channelStr3 = channel1 as number;

// const myCnavas = document.getElementById('main') as HTMLCanvasElement;
const myCnavas = <HTMLCanvasElement>document.getElementById('main');