const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Carlos'
    },
    {
        id: 3,
        nombre: 'Manolo'
    },
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
];

const getEmpleado = (id) => {
    return new Promise( (resolve, reject) => {
        const empleado = empleados.find(empleado => empleado.id === id);
        setTimeout(() => {
            empleado ? resolve(empleado.nombre) : reject(`No existe el empleado con id ${ id }`)
        }, 2000);
    });
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id);
        salario ? resolve(salario.salario) : reject(`No existe el salario con el id ${id}`);
    });
}

const id = 3;

// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(error => console.log(error));

// getSalario(id)
//     .then(empleado => console.log(empleado))
//     .catch(error => console.log(error));

let nombre;
 getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id);
    })
    .then(salario => console.log('El empleado: ', nombre, ' tiene un salario de ', salario))
    .catch(err => console.log(err));