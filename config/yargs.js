const desc ={
    descripcion:{
    demand:true,
    alias: 'd', 
    desc:'Descripcion de la tarea por hacer'
}};
const comp ={
    descripcion:{
    demand: true,
    alias: 'd', 
    desc:'Descripcion de la tarea por hacer'
},
completado:{
    alias:'c',
    default: true
}};
    
const argv = require('yargs')
            .command('crear','Añade un pendiente a la lista',desc)
            .command('update','Completa el pendiente',comp)
            .command('delete','Eliminar un pendiente de la lista',desc)
            .help().argv;

module.exports = {argv};
           