
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

function addNewBook(author, title, pages, isRead) {
    books.push(new Book(author, title, pages, isRead))
}

function displayBook(book) {
    const bookList = document.getElementById("book-list");

    const bookItem = document.createElement('li');

    bookItem.innerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h4 class="card-title">Bo${book.title}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${book.pages} pages</h6>
                <h5 class="card-text">Author: ${book.author}</h5>
                <p class="card-text">Finished: ${book.isRead ? 'Yes' : 'No'}</p>
                <button class="btn btn-danger">Delete book</button>
            </div>
        </div>
    `;

    bookList.appendChild(bookItem);

    bookItem.addEventListener("click", () => {
        bookList.removeChild(bookItem);
        const bookIndex = books.indexOf(book)
        books.splice(bookIndex, 1);
    });
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

        const newBook = new Book(author, title, pages, isRead);
        addNewBook(newBook);

        displayBook(newBook);

        form.reset();
    });
  });
