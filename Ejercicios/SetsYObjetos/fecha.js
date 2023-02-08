

const fechaHoy = new Date();
console.log(fechaHoy);

const nacimiento = new Date("1986/12/29");
console.log(nacimiento);

const diaTarde = fechaHoy > nacimiento;
const dia = nacimiento.getDate();
const mes = nacimiento.getMonth();
const anio = nacimiento.getYear();
console.log(diaTarde);
console.log(dia);
console.log(mes + 1);
console.log(anio);
