
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

export const showConfirm = async(message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];
    const { ok } = await inquirer.prompt(question);
    return ok;
}

export const listTasksToRemove = async(tasks) => {
    const choices = tasks.map((task, index) => {
        const i = `${ index + 1 }`.green;
        return {
            value: task.id,
            name: `${ i }. ${ task.desc }`
        }
    });
    choices.push(
        {
            value: null,
            name: '0.'.green + ' Salir'
        }
    )
    const menu = [
        {
            type: 'list',
            name: 'taskId',
            message: 'Seleccione la tarea para borrarla',
            choices
        }
    ]
    const { taskId } = await inquirer.prompt(menu);
    return taskId;
}

export const listTasksToComplete = async(tasks) => {
    const choices = tasks.map((task, index) => {
        const i = `${ index + 1 }`.green;
        return {
            value: task.id,
            name: `${ i }. ${ task.desc }`,
            checked: task.completedIn ? true : false
        }
    });
    const menu = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione las tareas a completar',
            choices
        }
    ]
    const { ids } = await inquirer.prompt(menu);
    return ids;
}
