
const nombre = "Ziortza";
const apellido = "Rey";
const datos = { nombre, apellido };
//sessionStorage.setItem(datos, JSON.stringify(datos));
//localStorage.setItem(datos, JSON.stringify(datos));

console.log(JSON.parse(localStorage.getItem(datos)));
console.log(JSON.parse(sessionStorage.getItem(datos)));

const now = new Date()
//document.cookie = `datos=${JSON.stringify(datos)};expires=${new Date(now.getTime() + 2 * 60000)}`