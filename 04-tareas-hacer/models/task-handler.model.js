import {Task} from "./task.model.js";
import 'colors';

export class TaskHandler {
    _taskList;

    constructor() {
        this._taskList = {};
    }

    get taskList() {
        if (!this._taskList) return null;
        const list = [];
        Object.keys(this._taskList).forEach(key => {
            list.push(this._taskList[key]);
        });
        return list;
    }

    loadTasksFromArray(taskList = []) {
        taskList.forEach(task => {
            this._taskList[task.id] = task;
        });
    }

    newTask(description = '') {
        const task = new Task(description);
        this._taskList[task.id] = task;
    }

    handlerTaskComplete(ids = []) {
        this.taskList.forEach(task => {
            if (ids.some(id => id === task.id)) {
                task.completedIn = new Date().toISOString();
            } else {
                task.completedIn = null;
            }
        });
    }

    removeTask(id = '') {
        if (this._taskList[id])
            delete this._taskList[id];
    }

    allTasks() {
        this.printTasks(this.taskList);
    }

    loadCompletedTasks() {
        const tasks = this.taskList.filter(task => task.completedIn);
        this.printTasks(tasks, false);
    }

    loadPendentTasks() {
        const tasks = this.taskList.filter(task => !task.completedIn);
        this.printTasks(tasks, false);
    }

    printTasks(taskList, all = true) {
        console.log();
        taskList.forEach((task, index) => {
            if (all) {
                console.log(
                    `  ${ (index + 1).toString().green }. ${ task.desc } :: ${ task.completedIn ? 'Completada'.green : 'Pendiente'.red }`
                )
            } else {
                console.log(
                    `  ${ (index + 1).toString().green }. ${ task.desc } :: ${ task.completedIn ? task.completedIn.toString().green : 'Pendiente'.red }`
                )
            }
        });
        console.log('\n');
    }
}
