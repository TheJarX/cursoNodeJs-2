// const {argv} = require('yargs');
const {argv} = require('./config/yargs');
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
// console.log(argv);

let command = argv._[0];

switch(command){
    case 'crear':
        console.log('crear pendiente');
        let tarea = porHacer.create(argv.descripcion);
        console.log(tarea);
    break;

    case 'listar':
    console.log('Mostrar pendientes'.inverse.underline);
    let lista = porHacer.read();

    lista.forEach(tarea=>{
        console.log('=======Por hacer======='.green);
        console.log(`►${tarea.desc}    `.green);
        console.log(`Estado:  ${tarea.completado}    `.green);
        console.log('======================='.green);
    });

    break;

    case 'update':
        console.log('actualiza un pendiente');
        let act=porHacer.update(argv.descripcion,argv.completado);
        if(act)console.log(act);
        else console.log('Intente reescribir la consulta');
    break;

    case 'delete':
    console.log('borra un registro');
    let del = porHacer.deletep(argv.descripcion);
    if(del)console.log(`'${del}' se ha eliminado correctamente`)
    else console.log('error!'); 
    break;  
    default:
    console.log('Unknown command!');
    break;

}
