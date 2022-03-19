import 'colors';
import { inquirerMenu, pause, readInput } from "./helpers/inquirer.js";
import { getTasks, saveInStorage } from './helpers/data-handler.js';
import { TaskHandler } from './models/task-handler.model.js';

const main = async() => {
    let opt = '';
    let tasks = new TaskHandler();

    do {
        opt = await inquirerMenu();

        switch(opt) {
            case 1: 
                const desc = await readInput('Descripción:');
                tasks.newTask(desc);
                saveInStorage(JSON.stringify(tasks.taskList));
            break;
            case 2: 
                showTasks(tasks);
            break;
            case 0: 
                console.log('Thanks form use the App!!');
                pause().then(() => console.clear());
            break;
        }

        if (opt !== 0) await pause();
    } while (opt !== 7);
}

const showTasks = (tasks) => {
    const tasksSaved = getTasks();

    if (!tasksSaved) {
        console.log(`\n    Sin tareas que mostrar\n`.red);
        return;
    }

    tasks.loadTasksFromArray(tasksSaved);
    console.log(tasks.taskList); 
}

main().then(() => {
    console.log('Good bye!! Thanks for use');
    console.clear();
});
