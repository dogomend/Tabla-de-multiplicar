const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log('\n\n Archivo :'.bgWhite.black, nombreArchivo.bgWhite.black, ' hasta el'.bgWhite.black, `${`${argv.h}`.bgYellow.black}`, 'Creado Exitosamente\n\n'.bgWhite.black) )
    .catch( err => console.log(err) );















