const fs = require("fs");
const data = [
  {
    title: "badmindton",desc: "deporte de raqueta en el que se enfrentan dos jugadores",},
  { title: "squash", desc: "excelente regulador del peso corporal" },
  { title: "hockey", desc: "modalidad de hierba y la de hielo" },
  { title: "boxeo", desc: "incluido dentro de las artes marciales" },
  { title: "padel", desc: "deporte de origen mexicano" },
  { title: "balonmano", desc: "deporte que se juega dentro de pistas" },
  { title: "cricket", desc: "es el segundo deporte más popular del mundo" },
  { title: "surf",desc: "deporte acuático, requiere de mucha preparación física",},
  { title: "cabalgar", desc: "andar a caballos" },
  { title: "cantar", desc: "entonar canciones" },
  { title: "correr", desc: "desplazarse a gran velocidad" },
  { title: "cumplir", desc: "hacer lo que se prometio, dependiendo de que" },
  { title: "encantar", desc: "realizar un encantamiento" },
  { title: "saltar", desc: "ganar elevacion" },
  { title: "nadar", desc: "El deporte mas completo de todos" },
  { title: "waterpolo", desc: "futbol en el agua" },
  { title: "gritar", desc: "hacerlo con toda el alma" },
  { title: "comer", desc: "tratar de no hacer Gula" },
];

const writeJson = () =>{
  let dataParseada = JSON.stringify(data);
  fs.writeFileSync('tasksData.JSON', dataParseada);
  console.log(dataParseada)
  return true;
};

module.exports = writeJson;