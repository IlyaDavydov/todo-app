/* a file for project creation */ 

export class Project {
    constructor(name) {
        this.name = name;
        this.tasks = []; 
    }

    addTask(task) {
        this.tasks.push(task);
    }

    deleteTask(task) {
        let index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
    }
}