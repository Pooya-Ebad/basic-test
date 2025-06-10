const database = require("./db")
const userService = require("./userService")
jest.mock('./db.js')

describe("userService test with mock", () => {
    it("get user test", async () => {
        database.fetchData.mockResolvedValue({id : 1, name : "mocked data"})
        const user = await userService.getUSerData(1)
        expect(user).toEqual({id : 1, name : "mocked data"})
    })
    it("test callback", () => {
        const mockCallback = jest.fn()
        const result = userService.complexOperation(3,4,mockCallback)
        expect(result).toBe(7)
        expect(mockCallback).toHaveBeenCalledTimes(2)
        expect(mockCallback).toHaveBeenCalledWith(3)
        expect(mockCallback).toHaveBeenCalledWith(4)
    })
    it("test value", async () => {
        database.fetchData.mockImplementation(id => {
            if(id === 1) {
                return Promise.resolve({id : 1, name : "mocked data"})
            }
            if(id === 2) {
                return Promise.resolve({id : 2, name : "mocked data 2"})
            }
            return Promise.resolve({Error : "user not found"}) 
        })
        const result = await userService.getUSerData(10)
        expect(result).toEqual({Error : "user not found"})
    })
})