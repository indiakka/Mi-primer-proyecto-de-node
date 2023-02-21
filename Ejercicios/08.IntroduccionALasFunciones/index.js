//Funcion sin parámetros
function verdadera() {
  return true;
}

//Función asíncrona
async function asincrona() {}
return setTimeout(() => console.log("Hola soy una promesa"), 5000);

//Una función generadora de índices pares automáticos
function* generaId() {
  let id = 0;
  while (true) {
    yield (id += 2);
  }
}
