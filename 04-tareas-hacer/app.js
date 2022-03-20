import 'colors';
import { inquirerMenu, listTasksToComplete, listTasksToRemove, pause, readInput, showConfirm } from "./helpers/inquirer.js";
import { getTasks, saveInStorage } from './helpers/data-handler.js';
import { TaskHandler } from './models/task-handler.model.js';

const main = async() => {
    let opt = '';
    let tasks = new TaskHandler();

    const tasksSaved = getTasks();
    tasks.loadTasksFromArray(tasksSaved);
    do {
        const tasksSaved = getTasks();
        tasks.loadTasksFromArray(tasksSaved);
        opt = await inquirerMenu();

        switch(opt) {
            case 1: 
                const desc = await readInput('Descripción:');
                tasks.newTask(desc);
                saveInStorage(JSON.stringify(tasks.taskList));
            break;
            case 2: 
                tasks.allTasks();
            break;
            case 3: 
                tasks.loadCompletedTasks();
            break;
            case 4: 
                tasks.loadPendentTasks();
            break;
            case 5: 
                const ids = await listTasksToComplete(tasks.taskList);
                tasks.handlerTaskComplete(ids);
            break;
            case 6:
                const taskId = await listTasksToRemove(tasks.taskList);
                let ok = null;
                if (taskId) {
                    ok = await showConfirm('¿Realmente desea borrar?');
                }
                if (ok) {
                    tasks.removeTask(taskId);
                    saveInStorage(JSON.stringify(tasks.taskList));
                }
            break;
            case 7:
                const conf = await showConfirm('¿Desea salir?');
                if (!conf) opt = 1;
            break;
        }
        if (opt !== 7) await pause();
    } while (opt !== 7);
}

export const loadTasks = () => {
   
}

main().then(() => {
    console.clear();
});
