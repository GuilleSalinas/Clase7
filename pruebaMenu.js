require('colors');
var readline = require('readline');

console.clear();
console.log('================================'.green);
console.log('   Seleccione una opción'.green);
console.log('================================\n'.green);

console.log(`${ '1.'.green} Imprimir las tareas.`);
console.log(`${ '2.'.green} Agregar tareas.`);
console.log(`${ '3.'.green} Editar.`);
console.log(`${ '4.'.green} Borrar la descripción.`);
console.log(`${ '5.'.green} Borrar el Registro.`);
console.log(`${ '6.'.green} Copiar el Jason.\n`);


var rl = readline.createInterface(process.stdin, process.stdout);
rl.question ('Ingresa la opción: ',(respuesta)=>{
    console.log (`Tu opcion fue:, ${ respuesta}`);
    
    if (respuesta>7 && respuesta<0){
        console.log('olvidaste instroducir la accion a ejecutar');
        return;
    }
    if (respuesta == 2){
        console.log('Introduce la tares y la descripcion: ');
        var rl = readline.createInterface(process.stdin, process.stdout);
        rl.question (':> ',(respuesta)=>{
            console.log (`Tu opcion fue:, ${ respuesta}`);
            process.exit();       
        });
        return;
    }

    
    
   
   
   
    process.exit();
});