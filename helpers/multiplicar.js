// requireds
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `     ${ base } ${'x'.bgGreen.yellow} ${ i } ${'='.bgGreen.yellow} ${ base * i }\n\n`;
        }
        if ( listar ) {
            console.log('\n  =================='.bgGreen.yellow);
            console.log('     tabla del:'.bold, colors.bold( base ) );
            console.log('  ==================\n'.bgGreen.yellow);
            
            console.log(consola);
        }

        fs.writeFileSync( `./tablas/tabla-${ base }.txt`, `\nTabla del : ${base} hasta el ${hasta} \n\n${salida}`);

        return `tabla-${base}.txt`;
    } 
    catch (err) {
        throw err;
    }
}
module.exports = { 
    crearArchivo
}
                   



















