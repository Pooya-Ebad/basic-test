const { expect } = require("chai");
const toDO = require("./toDO");

describe("ToDo application test", () => {
    let todo;
    beforeEach(() => {
        todo = new toDO()
    })
    it("add new task", () => {
        todo.addTask("new task")
        expect(todo.getTasks()).to.include("new task")
    })
    it("should throw an error when adding new task", () => {
        expect(() => todo.addTask("")).to.throw()
    })
    it("remove task", () => {
        todo.addTask("new task")
        todo.removeTask("new task")
        expect(todo.getTasks()).to.not.include("new task")
        expect(todo.getTasks().length).to.be.eq(0) //eq = equal
    })
    it("return all task", () => {
        todo.addTask("task 1")
        todo.addTask("task 2")
        expect(todo.getTasks()).to.be.deep.eq(["task 1", "task 2"])
    })
})