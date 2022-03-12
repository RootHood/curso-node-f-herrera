const { crearArchivoTabla } = require('./helpers/multiplicar')
const argv = require('./config/yargs');
const colors = require('colors/safe');

console.clear();


crearArchivoTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log('El archivo:', nombreArchivo, 'ha sido creado correctamente.'.green))
    .catch(err => console.log(colors.red('err')));


// Capturar argumentos desde la consola (Forma Vanilla).
// const [ ,,arg3 = 'base=5' ] = process.argv;
// const [ , numBase = 5 ] = arg3.split('=')

// const numBase = 3;

