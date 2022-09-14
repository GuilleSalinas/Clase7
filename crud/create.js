const fs = require('fs');
const read = require("./read");
const path = require('path');

const create = (title, desc) =>{
    // leemos nuestro archivo
    previousData = read();

    // definir nuestro objeto a agregar
    const newTask = {title,desc}
    // se genera nuevo array con el nuevo dato que esta en tasksData
    const lastData = [...previousData,newTask];
    // se parsea el nuevo array
    const parseData = JSON.stringify(lastData);

    // try para manejo de errores
    try{
        fs.writeFileSync(path.join(__dirname, "../tasksData.json"), parseData);
        return true;
    }catch (error){
        console.log("Error");
        console.log(error);
        return false;
    }
}
module.exports = create;