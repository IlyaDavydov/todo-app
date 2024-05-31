/* a file for project creation */ 

export class Project {
    constructor(name) {
        this.name = name;
        this.tasks = []; 
    }

    addTask(task) {
        this.tasks.push(task);
    }
}