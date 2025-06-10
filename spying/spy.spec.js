const calculator = {
    add : (a, b) => a + b,
    multiply : (a, b) => a * b
}
describe("monitoring add method on calculator", () => {
    test("spy on add method", () => {
        const spy = jest.spyOn(calculator, "add")
        const result = calculator.add(5,2)
        expect(spy).toHaveBeenCalled()
        expect(spy).toHaveBeenCalledWith(5, 2)
        expect(result).toBe(7)
        spy.mockReset()
    })
    test("spy on calculator to change method behave", () => {
        const spy = jest.spyOn(calculator, "add").mockImplementation((a, b) => {
            return {result: a + b, calledWith: [a, b]}
        })
        const result = calculator.add(5,2)
        expect(spy).toHaveBeenCalled()
        expect(spy).toHaveBeenCalledWith(5, 2)
        expect(result).toEqual({result: 7, calledWith: [5, 2]})
        spy.mockRestore()
    })
    test("multiply calls", () => {
        const spy = jest.spyOn(calculator, "add")
        .mockReturnValueOnce(10)
        .mockReturnValueOnce(4)
        .mockReturnValueOnce(33)
        expect(calculator.add(1, 2)).toBe(10)
        expect(calculator.add(3, 4)).toBe(4)
        expect(calculator.add(5, 6)).toBe(33)
        expect(spy).toHaveBeenCalledTimes(3)
        spy.mockRestore()
    })
})