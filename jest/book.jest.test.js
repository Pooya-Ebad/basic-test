const BookStore = require("./bookstore")
describe("Book Store Test", ()=> {
    let bookStore;
    let nodejs;
    beforeEach(() => {
        bookStore = new BookStore()
        nodejs = bookStore.addBook("nodejs book", "Pooya Ebadollahi")

    })
    test("should add a Book", () => {
        const book = nodejs
        expect(book).toHaveProperty("id")
        expect(book.id).toBeGreaterThan(0)
        expect(book).toEqual({id : 1, title : "nodejs book", author : "Pooya Ebadollahi"})
        expect(bookStore.getBooks()).toHaveLength(1)

    })
    test("get list of Books", () => {
        const nestjs = bookStore.addBook("nestjs book", "Pooya Ebadollahi")
        const books = bookStore.getBooks()
        expect(books).toEqual([
            nodejs,
            nestjs
        ])
        expect(books).toHaveLength(2)

    })  
    test("get count of Books", () => {
        bookStore.addBook("nestjs book", "Pooya Ebadollahi")
        expect(bookStore.getBookCount()).toBe(2)
    })
    test("delete a Book", () => {
        const result = bookStore.deleteBook(1)
        expect(result).toHaveProperty("message")
        expect(result.message).toBe("book deleted successfully")
    })
    test("edit a Book", () => {
        const Reactjs = bookStore.addBook("nestjs book", "Pooya Ebadollahi")
        const newBook = bookStore.editBook(Reactjs.id, "Golang book", "Parsa Ebadollahi")
        expect(newBook).toEqual({id : Reactjs.id, title : "Golang book", author: "Parsa Ebadollahi"})
    })
    test("should throw a error while deleting a book", () => {
        expect(() => bookStore.deleteBook(12)).toThrow()
    })
})