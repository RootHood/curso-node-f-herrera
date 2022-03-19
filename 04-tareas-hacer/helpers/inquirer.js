
import 'colors';
import inquirer from "inquirer";

const menuQuestions = [
    {
        type: 'list',
        name: 'opt',
        message: '\n¿Que desea hacer?\n',
        choices: [
            {
                value: 1,
                name: `${ '1'.green }. Crear tarea` // TODO : bug when add \n
            },
            {
                value: 2,
                name: `${ '2'.green }. Listar tareas`
            },
            {
                value: 3,
                name: `${ '3'.green }. Listar tareas completadas`
            },
            {
                value: 4,
                name: `${ '4'.green }. Listar tareas pendientes`
            },
            {
                value: 5,
                name: `${ '5'.green }. Completar tareas`
            },
            {
                value: 6,
                name: `${ '6'.green }. Borrar tarea`
            },
            {
                value: 7,
                name: `${ '7'.green }. Salir`
            },
        ]
    }
];

export const inquirerMenu = async() => {
    console.clear();
    console.log('***************************************************************************************\n'.bgGreen.bold);
    console.log('                             Seleccione una opción\n'.yellow.bold);
    console.log('***************************************************************************************'.bgGreen.bold);
    const { opt } = await inquirer.prompt(menuQuestions);
    return opt;
}

export const pause = async() => {
    const pauseOption = {
        type: 'input',
        name: 'enter',
        message: ` Presione ${ 'ENTER'.green } para continuar`,
    }
    await inquirer.prompt(pauseOption);
}

export const readInput = async(message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor, control + c to abort';
                }
                return true;
            }
        }
    ];
    const { desc } = await inquirer.prompt(question);
    return desc;
}
