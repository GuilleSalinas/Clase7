const fs = require('fs');
const read = require('./read');
const path = require('path');

// leemos nuestro archivo
previusData = read();

const borraRegistro = (title) =>{
    const indice = previusData.findIndex(t => t.title === title)
    if (indice > 0) {
        previusData.splice(indice, 1);
        let nv = [...previusData];
        let nvStringify = JSON.stringify(nv);
        fs.writeFileSync('tasksData.JSON', nvStringify);
        return true;
    }

    return false;
}

module.exports = borraRegistro;
