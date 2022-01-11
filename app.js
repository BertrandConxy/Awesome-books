
function createBook(title, author) {
    const object = {
        title: title.value,
        author: author.value,
    }  
    return object;

}

function getbooksFromStore() {
    let books;
    if(localStorage.getItem('books') === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
}
function addbookToStore (book) {
    const books = getbooksFromStore();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    console.log(books)
}

function displayBooks () {
    const books = getbooksFromStore();
    books.forEach((book) => {
        const bookContainer = document.querySelector('.book-list');
        const listContainer = document.createElement('div');
        listContainer.innerHTML +=`
        <h4>${book.title}</h4>
        <h4>${book.author}</h4>
        <button class='delete'>Remove</button>
        <hr>`;

        bookContainer.appendChild(listContainer);
    });
}

function removeBook (target) {
   if(target.classList.contains('delete')) { 
    target.parentElement.remove()
}
}

function removeFromTheStore (title) {
    const books = getbooksFromStore();
    const filteredArray = books.filter((book) => book.title !== title);
    console.log(filteredArray);
    // books.forEach((book, index)=> {
    //     if (book.title === title) {
    //         books.splice(index,1)
    //     }
    // })
    localStorage.setItem('books', JSON.stringify(filteredArray));
    

}




document.addEventListener('DOMContentLoaded', displayBooks)
document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title');
    const author = document.getElementById('author');


// validate
if (title.value === '' || author.value === '') {
    alert('fill all inputs')
} else {
     // Adding book process
      console.log(createBook(title,author));
    //   create book
    const book = createBook(title,author);
    // add it to store
    addbookToStore(book);
    // display it
    const bookContainer = document.querySelector('.book-list');
    const listContainer = document.createElement('div');
    listContainer.innerHTML +=`
    <h4>${book.title}</h4>
    <h4>${book.author}</h4>
    <button class='delete'>Remove</button>
    <hr>`;
    bookContainer.appendChild(listContainer);

    
}
});

// event: remove a book

// Remove book from UI
document.querySelector('.book-list').addEventListener('click', (e) => {
     removeBook(e.target);

 // remove book from the store
    removeFromTheStore(e.target.parentElement.firstElementChild.textContent)




});