/* a file for management of all projects */ 

export class ProjectManager {
    constructor() {
        this.projects = [];
      }
    
    addProject(project) {
        this.projects.push(project);
    }
}