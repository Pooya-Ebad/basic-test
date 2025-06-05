class BookStore {
    constructor(){
        this.books = []
    }
    addBook(title , author){
        if(!title && !author){
            throw new Error("title and author are required")
        }
        const book = {id : this.books.length +1, title, author}
        this.books.push(book)
        return book;
    }
    getBooks(){
        return this.books;
    }
    getBookCount(){
        return this.books.length;
    }
    deleteBook(id){
        const index = this.books.findIndex(book => book.id === id)
        if(index === -1){
            throw new Error("book not found")
        }
        this.books.splice(index, 1)
        return {message : "book deleted successfully"}
    }
    editBook(id, newTitle, newAuthor){
        const book = this.books.find(book => book.id === id)
        if(!book){
            throw new Error("book not found")
        }
        if(newTitle) book.title = newTitle
        if(newAuthor) book.author = newAuthor
        this.books.map(value => {
            if(value.id === id){
                return book
            }
            return value
        })
        return book
    }
}

module.exports = BookStore