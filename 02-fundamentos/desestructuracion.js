const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    // edad: 50,
    getNombre () {
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}

/* const nombre = deadpool.nombre;
const apellido = deadpool.apellido;
const poder = deadpool.poder; */


function imprimeHeroe( { nombre, apellido, poder, edad = 25 } ) {
    console.log(nombre, apellido, poder, edad);
}




const heroes = ['Deadpool', 'Superman', 'Batman'];

/* const h1 = heroes[0];
const h1 = heroes[1];
const h1 = heroes[2]; */
const [ ,, h3 ] = heroes;
console.log(h3);