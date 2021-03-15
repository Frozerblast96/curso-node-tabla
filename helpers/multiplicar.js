const fs = require('fs');
const colors = require('colors');


const crearArchivo = async(base = 5,listar,hasta= 10) =>{
    
    //const base = 7;

    try {


        let salida ='';
        let consola ='';

        for (let i = 1; i <= hasta; i++) {
            salida+=`${base} x ${ i } = ${base * i}\n`;
            consola+=`${base} ${'x'.green} ${ i } ${'='.green} ${base * i}\n`;
        }
        if(listar){
            console.log('======================='.green)
            console.log('Tablas del:'.green, colors.blue(base))
            console.log('======================='.green)
            console.log(consola)
        }

        //sync
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt creado`
    } catch (error) {
        throw error
    }
    
}

module.exports = {
    crearArchivo: crearArchivo
}

 /*v.normal
    fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
        if (err) throw err;
        console.log(`tabla-${base}.txt creado`)
    })
    */