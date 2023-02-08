
const persona = 
    {
      nombre: "Ziortza",
      apellido: "Rey",
      edad: 36,
      altura: "163cm",
      eresDesarrollador: true,
    }
  
  const edad = persona.edad
  
  console.log(edad);

  const datos = [
{   ...persona},
    {
      nombre: "Myriam",
      apellido: "Murias",
      edad: 36,
      altura: "166cm",
  
      eresDesarrollador: false,
    },
    {
        nombre: "Mónica",
        apellido: "Pérez",
        edad: 37,
        altura: "160cm",
        eresDesarrollador: false,
      },
  ];
  
  const datosOrdenados = datos.
  sort((a, b) => b.edad - a.edad);
  console.log(datosOrdenados);
  