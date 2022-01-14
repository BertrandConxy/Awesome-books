// Creating book class

/* eslint-disable max-classes-per-file */
class CreateBook {
  constructor(title, author) {
    this.title = title.value;
    this.author = author.value;
  }
}

// localStorage classes

class LocalStorageClass {
  static getbooksFromStore() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addbookToStore(book) {
    const books = LocalStorageClass.getbooksFromStore();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeFromTheStore(title) {
    const books = LocalStorageClass.getbooksFromStore();
    const filteredArray = books.filter((book) => book.title !== title);
    localStorage.setItem('books', JSON.stringify(filteredArray));
  }
}

// class to create book element inside the book list

class CreateBookElements {
  static createBookElement(book) {
    const bookContainer = document.querySelector('.book-list');
    const listContainer = document.createElement('div');
    listContainer.className = 'list-Container';
    listContainer.classList.add('flex');
    listContainer.innerHTML += `
            <div class="table-text"><span class="table-text-1">${book.title}</span>by  <span class="table-text-2">${book.author}</span></div>
            <button class='delete'>Remove</button>
            `;

    bookContainer.appendChild(listContainer);
  }
}

// display class

class DisplayBookList {
  static displayBooks() {
    const books = LocalStorageClass.getbooksFromStore();
    books.forEach((book) => CreateBookElements.createBookElement(book));
  }

  static removeBook(target) {
    if (target.classList.contains('delete')) {
      target.parentElement.remove();
    }
  }
}

// class to make the web app an SPA

class DisplaySection {
  static DisplayOnly() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item) => {
      item.addEventListener('click', DisplaySection.nav);
    });
  }

  static nav(e) {
    e.preventDefault();
    const currentPage = e.target.getAttribute('data-target');
    document.querySelector('.active').classList.remove('active');
    document.getElementById(currentPage).classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', DisplayBookList.displayBooks);
document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title');
  const author = document.getElementById('author');

  //   create book
  const book = new CreateBook(title, author);
  // add it to local storage
  LocalStorageClass.addbookToStore(book);
  // append the book to the book list
  CreateBookElements.createBookElement(book);
  //  Reseting the form inputs
  const form = document.querySelector('#form');
  form.reset();
});

// event: remove a book

// Remove book from UI
document.querySelector('.book-list').addEventListener('click', (e) => {
  DisplayBookList.removeBook(e.target);

  // remove book from the store
  const child = e.target.parentElement.children[0].firstElementChild.innerHTML;
  LocalStorageClass.removeFromTheStore(child);
});

// displaying one section

document.addEventListener('DOMContentLoaded', DisplaySection.DisplayOnly);

document.getElementById('date').innerHTML = Date();