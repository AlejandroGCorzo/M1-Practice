var objContains = function (obj, prop, value) {
  /* Tu codigo aqui */

  for (const key in obj) {
    if (typeof obj[key] !== "object" && key === prop && obj[key] === value)
      return true;
    if (typeof obj[key] === "object" && objContains(obj[key], prop, value))
      return objContains(obj[key], prop, value);
  }
  return false;
};
const user = {
  id: 6,
  email: "homero@maxpower.com",
  infoPersonal: {
    nombre: "Homero Simpson",
    tuvieja: {
      junior: "tanga",
    },
    direccion: {
      calle: "Avenida Siempreviva",
      numero: 742,
      barrio: "Springfield",
      estado: "Massachusetts",
    },
  },
};
console.log(objContains(user, "barrio", "Springfield"));
