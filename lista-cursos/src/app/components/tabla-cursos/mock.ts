import { Curso } from "../../models/curso-to";

export const cursos: Curso[] = [
  {
    materia: "Javascript",
    dificultad: 9,
    requiere: "Html y Css"
  },
  {
    materia: "Typescript",
    dificultad: 7,
    requiere: "Javascript"
  },
  {
    materia: "Angular",
    dificultad: 9,
    requiere: "Html, Css, Javascript, Typescript"
  },
  {
    materia: "React",
    dificultad: 7,
    requiere: "Html, Css, Javascript"
  }  
];