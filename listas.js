

let compra = ["pan", "leche", "huevos", "fruta", "verdura"];
compra.push("Aceite de Girasol");
compra.unshift();

let peliculas = [
  {
    titulo: "Pesadilla antes de navidad",
    director: "Henry Selick",
    fecha: "1993",
  },
  { titulo: "Eduardo Manostijeras", director: "Tim Burton", fecha: "1990 " },
  { titulo: "Leyendas de pasión", director: "Edward Zwick", fecha: "1995" },
];

const peliPost = peliculas.filter((obj) => obj.fecha > 2010);

const directores = peliculas.map((peliculas) => peliculas.director);

const titulos = peliculas.map((peliculas) => peliculas.titulo);

const infoPelis = directores.concat(titulos);

const datosPelis = [...directores, ...titulos];
