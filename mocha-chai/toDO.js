class toDO {
    constructor(){
        this.tasks = []
    }
    addTask(task){
        if(!task){
            throw new Error("task cannot be empty")
        }
        this.tasks.push(task)
    }
    getTasks(){
        return this.tasks
    }
    removeTask(task){
        const index = this.tasks.indexOf(task)
        if(index === -1){
            throw new Error("task not found")
        }
        this.tasks.splice(index, 1)
    }
}

module.exports = toDO