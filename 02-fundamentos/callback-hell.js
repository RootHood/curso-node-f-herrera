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

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(empleado => empleado.id === id);
    if (empleado) {
        callback(false, empleado);
    } else {
        callback(null, `Empleado con id ${id} no existe`);
    }
}

const getSalario = (id, callback) => {
    const salario = salarios.find(salario => salario.id === id);
    if (salario) {
        callback(false, salario);
        return;
    }
    callback(true, `Salario con id ${id} no existe`);
}

const id = 1;

getEmpleado(id, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado.nombre);
});

getSalario(id, (err, salario) => {
    if (err) return console.log(err);
    console.log(salario.salario);
});