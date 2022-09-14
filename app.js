const read = require('./crud/read.js');
const create = require('./crud/create.js');
const update = require('./crud/update.js');
const borrar = require('./crud/delete.js');
const borraRegistro = require('./crud/deleteRegistro.js');
const writeJson = require('./crud/writeJson.js');


const action = process.argv[2];
if (!action){
    console.log('olvidaste instroducir la accion a ejecutar');
    return;
}

switch (action) {
    // la accion add agrega un nuevo valor al JSON al final del mismo se debe ingresar dos valores, el titulo y la descripcion
    // si uno de ellos no existe arroja un mensaje de que la accion no se puede procesar.
    // -------------------------------------------------------------------------------------------
    case 'add':{
        // lmacenamos nuestros argumentos
        const t = process.argv[3];
        title = t.toLowerCase();
        const desc = process.argv[4];
        // verificamos que los argumentos existan
        if (!title || !desc) {
            console.log("Olvidaste introducir el titulo o la descripción");
            break;
        }
        // almacenamos en una variable el resultado de ejecutar nuestra función create
        const isOk = create(title, desc);
        // si el resulado es true se muestra en consola
        if (isOk) {
            console.log("Taréa agregada con éxito");
        } else{
            console.log("Ocurrio un error");
        }
        break;
    }
    // -------------------------------------------------------------------------------------------
    case 'edit': {
        // recibe como parametro el titulo y una descripcion, si el titulo existe debe de 
        // modificar la descripcion de lo contratio no realizar ninguna modificacion.
        const t = process.argv[3];
        title = t.toLowerCase();
        const desc = process.argv[4];
        
        // verificamos que los argumentos existan
        if (!title || !desc) {
            console.log("Olvidaste introducir el titulo o la descripción");
            break;
        }
        const isOk = update (title, desc);
        if (isOk) {
            console.log("Descripción cambiada con éxito");
        } else{
            console.log("Ocurrio un error, el titulo no existe o esta mal escrito.");
        }
        break;
    }

    // -------------------------------------------------------------------------------------------
    case 'list':{
        // Lista todo el JSON con los cambios realizados
        const tasks = read();
        for (task of tasks) {
            console.log(task.title);
            console.log(task.desc);
            console.log('―――――――――――――――――――――――――――――――');
        }
        break;
    }
    
    // -------------------------------------------------------------------------------------------
    case 'delete': {
        // borra el dato = titulo/title del JSON el cual se ingresa por consola / teclado
        // y debe de ser un string.
        const t = process.argv[3];
        title = t.toLowerCase();
                
        // verificamos que los argumentos existan
        if (!title) {
            console.log("Olvidaste introducir el titulo");
            break;
        }
        const isOk = borrar (title);
        if (isOk) {
            console.log("Descripcion BORRADA con éxito");
        } else{
            console.log("Ocurrio un error, el titulo no existe o esta mal escrito.");
        }
        break;
    }
    
    // -------------------------------------------------------------------------------------------
    case 'deleteRegistro': {
        // borra el dato = titulo/title del JSON el cual se ingresa por consola / teclado
        // y debe de ser un string.
        const t = process.argv[3];
        title = t.toLowerCase();
               
        // verificamos que los argumentos existan
        if (!title) {
            console.log("Olvidaste introducir el titulo a borrar");
            break;
        }
        const isOk = borraRegistro (title);
        if (isOk) {
            console.log("Registro BORRADO con éxito");
        } else{
            console.log("Ocurrio un error, el titulo no existe o esta mal escrito.");
        }
        break;
    }


    // -------------------------------------------------------------------------------------------
    case 'writeJson': {
        // Paso 8 de las consignas, genera el JSON con los parametros del array de datos.
        
        const isOk = writeJson ();
        if (isOk) {
            console.log("Se genero con éxito el JSON con los valores del array");
        } else{
            console.log("Ocurrio un error, el JSON no se genero, verificar el nombre ingresado.");
        }
        break;
    }

    // -------------------------------------------------------------------------------------------
    default: {
        console.log('acción invalida');
        break;
    }
}