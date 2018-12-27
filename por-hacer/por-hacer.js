const fs = require('fs');

let listadoPorHacer = []
const loadDB = ()=>{
try {
    listadoPorHacer = require('../db/data.json');
} catch (error) {
    listadoPorHacer=[];
}
     
}
const saveDB = ()=>{
    let data = JSON.stringify(listadoPorHacer);
    
    fs.writeFile('db/data.json',data,err=>{
        if(err) throw new Error('No se pudo grabar ',err);
    })
} 

const create = desc=>{
    loadDB();
    let porHacer={
        desc,
        completado:false
    }

    listadoPorHacer.push(porHacer);
    saveDB();

    return porHacer;
}

const read = ()=>{
    loadDB();
    return listadoPorHacer;
}

const update= (desc, completado = true)=>{
    loadDB();
    let index = listadoPorHacer.findIndex(tarea=> tarea.desc===desc);       
    if(index>=0){
        listadoPorHacer[index].completado=completado;
        saveDB();
        return true;
    }else{
        return false;
    }
    
}

const deletep= desc=>{
    loadDB();
    let index = listadoPorHacer.findIndex(tarea=>tarea.desc===desc);
    if(index>=0){
        let i = listadoPorHacer[index].desc;
        listadoPorHacer.splice(index,1)
        saveDB();
        return i;
    }else{
        return false;
    }

}

module.exports = {
    create,
    read,
    update,
    deletep
}