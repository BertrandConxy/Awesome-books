// Creating book class

class CreateBook {
    constructor(title, author) {

    this.title = title.value;
    this.author = author.value;
}

}

// localStorage classes

class localStorageClass {

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
  const books = localStorageClass.getbooksFromStore();
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
}



static removeFromTheStore(title) {
    const books = localStorageClass.getbooksFromStore();
    const filteredArray = books.filter((book) => book.title !== title);
    localStorage.setItem('books', JSON.stringify(filteredArray));
  }
}

function removeBook(target) {
  if (target.classList.contains('delete')) {
    target.parentElement.remove();
  }
}
static displayBooks() {
    const books = localStorageClass.getbooksFromStore();
    books.forEach((book) => {
      const bookContainer = document.querySelector('.book-list');
      const listContainer = document.createElement('div');
      listContainer.innerHTML += `
          <p>${book.title}</p>
          <p>${book.author}</p>
          <button class='delete'>Remove</button>
          <hr>`;
  
      bookContainer.appendChild(listContainer);
    });
  }


document.addEventListener('DOMContentLoaded', displayBooks);
document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title');
  const author = document.getElementById('author');

  //   create book
  const book = new CreateBook(title, author);
  // add it to store
  addbookToStore(book);
  // display it
  const bookContainer = document.querySelector('.book-list');
  const listContainer = document.createElement('div');
  listContainer.innerHTML += `
    <p>${book.title}</p>
    <p>${book.author}</p>
    <button class='delete'>Remove</button>
    <hr>`;
  bookContainer.appendChild(listContainer);

  const form = document.querySelector('#form');
  form.reset();
});

// event: remove a book

// Remove book from UI
document.querySelector('.book-list').addEventListener('click', (e) => {
  removeBook(e.target);

  // remove book from the store
  removeFromTheStore(e.target.parentElement.firstElementChild.textContent);
});