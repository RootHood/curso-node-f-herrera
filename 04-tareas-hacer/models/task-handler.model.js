import {Task} from "./task.model.js";

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
}
