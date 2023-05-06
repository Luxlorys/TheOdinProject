
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

function displayBooks(books) {
    const bookList = document.getElementById("book-list")

    books.forEach(book => {
        const bookItem = document.createElement('li');

        bookItem.innerHTML = `
            <h2>${book.author}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.isRead ? 'Yes' : 'No'}</p>
        `;

        bookList.appendChild(bookItem);
    });

    document.body.appendChild(bookList);
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-add-book");
    const authorInput = document.getElementById("author");
    const titleInput = document.getElementById("title");
    const pagesInput = document.getElementById("pages");
    const isReadInput = document.getElementById("isRead");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const author = authorInput.value;
        const title = titleInput.value;
        const pages = pagesInput.value;
        const isRead = isReadInput.checked;

        addNewBook(author, title, pages, isRead);

        displayBooks(books);

        form.reset();
    });
  });