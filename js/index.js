
// Book object (title: String, author: String, pages: int, isRead: boolean)

// list that stores book objects

// method to add Books in a list
// method to show books in a page
// method to delete books 

let books = []

class Book {
    constructor(author, title, pages, isRead) {
        this.author = author
        this.title = title
        this.pages = pages
        this.isRead = isRead
    }
}

function addNewBook(author, title, pages, isRead = false) {
    books.push(new Book(author, title, pages, isRead))
}

function showBooks() {
    books.forEach(book => {
        console.log(`Author: ${book.author}`);
        console.log(`Title: ${book.title}`);
        console.log(`Pages: ${book.pages}`);
        console.log(`Is read? - ${book.isRead}`)
    });
}

addNewBook("Dostoevsky", "Idiot", 832);
addNewBook("Burcev", "shit stuff", 1, true);
showBooks()