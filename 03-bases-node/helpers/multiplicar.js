const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async (numBase = 5, listar, hasta) => {

    let salida = '';
    let consola = '';
    const fileName = `./files/tabla-${ numBase }.txt`

    for (let i=1; i<=hasta; i++) {
        consola += `${ numBase } ${colors.red('x')} ${ i } = ${ numBase * i }${i < hasta ? '\n' : ''}`;
        salida += `${ numBase } x ${ i } = ${ numBase * i }${i < hasta ? '\n' : ''}`;
    }

    if (listar) {
        console.log(('===============').blue.bgYellow);
        console.log(colors.bgYellow(colors.blue(' Tabla del ', numBase, ' ')));
        console.log(colors.bgYellow(colors.blue('===============')));
        console.log(consola);
    } 

    try {
        fs.writeFileSync(fileName, salida);
        return fileName;
    } catch(err) {
        throw err;
    }
}
module.exports = { crearArchivoTabla };