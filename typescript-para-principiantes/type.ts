function area(shape: string, width: number, height: number) {
  let area = width * height;
  return `Yo soy ${shape} con un area de ${area} cm al cuadrado`;
}

document.body.innerHTML = area("rectangulo", 30, 15);