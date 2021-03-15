//config yargs
const argv = require('yargs')
.option('b',{
    alias: 'base',
    type:'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
})
.option('l',{
    alias: 'listar',
    type:'boolean',
    default:false,
    describe: 'Muestra tabla por consola'
})
.option('h',{
    alias: 'hasta',
    type:'numberr',
    default:10,
    describe: 'Hasta donde lleva la tabla'
})
.check((argv,options)=>{
    if(isNaN(argv.base)){
        throw 'La base tienen que ser un numero'
    }
        return true
})
.argv;

module.exports = argv; //export por defecto