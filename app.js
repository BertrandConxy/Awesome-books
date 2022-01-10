//  getting info from the from input fields
const arrayOfBooks = [{title: 'kill it'},
;
];
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const addBtn = document.querySelector('#submit');
function storingBookInfo () {
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const book = {
            title: title.value,
            author: author.value,
        }
     arrayOfBooks.push(book);
     console.log(arrayOfBooks);
     return arrayOfBooks;
     
    
});
}
 
function createHtmlElement () {

    const form = document.querySelector('#form')
    const bookList = document.createElement('div');
    const bookTitle = document.createElement('h4');
    bookTitle.textContent = `${arrayOfBooks[0].title}`
    const bookAuthor = document.createElement('h4');
    const removeBtn = document.createElement('button');
    const hr = document.createElement('hr');
    bookList.append(bookTitle,bookAuthor,removeBtn,hr);
    document.body.insertBefore(bookList, form); 

    
}




storingBookInfo ()
for(let i = 0; i < arrayOfBooks.length; i++){
    if (arrayOfBooks.length === 0) {
        alert('no books')
    } 
    else {
createHtmlElement ()
console.log(arrayOfBooks)
    }
}