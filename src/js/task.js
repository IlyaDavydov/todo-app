/* a file for task creation */ 

export class Task {
    constructor(name, description = 'none', deadline, priority) {
        this.name = name;
        this.description = description;
        this.deadline = deadline;
        this.priority = priority;
        this.status = false;
    }
}