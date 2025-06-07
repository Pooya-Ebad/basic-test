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
})