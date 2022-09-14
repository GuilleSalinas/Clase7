const fs = require('fs');
const read = require('./read');
const path = require('path');

// leemos nuestro archivo
previusData = read();

const borrar = (title) =>{
    const indice = previusData.findIndex(t => t.title === title)
    if (indice > 0) {
        let nuevoValor = ({"title":title, "desc":""});
        previusData.splice(indice,1,nuevoValor);
        console.log(nuevoValor);
        let nv = [...previusData];
        let nvStringify = JSON.stringify(nv);
        fs.writeFileSync('tasksData.JSON', nvStringify);
        return true;
    }

    return false;
}

module.exports = borrar;
