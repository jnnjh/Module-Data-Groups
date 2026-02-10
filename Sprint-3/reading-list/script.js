// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

function bookList() {
  for(let [key] of Object.entries(books)){
    //to create li elements
    let list = document.createElement('li');
    list.classList.add('list-card');

    //to create elements inside the li element
    //to add classes to the elements for styling;
    let div = document.createElement('div');
    div.classList.add('div');
    let title = document.createElement('p');
    title.classList.add('title');
    let author = document.createElement('p');
    author.classList.add('author');
    let imageWrapper = document.createElement('div');
    imageWrapper.classList.add('wrapper');
    let cover = document.createElement('img');
    cover.classList.add('book-cover');

    //to add classes to the li elements for future styling use
    if(books[key].alreadyRead === true) div.classList.add('read')
    else div.classList.add('not-read');

    //appendChild the li element to the body
    //appendchild the title, author and cover inside the li element.
    document.body.appendChild(list).appendChild(div).appendChild(title).innerHTML = books[key].title;
    document.body.appendChild(list).appendChild(div).appendChild(author).innerHTML = `by ${books[key].author}`;
    document.body.appendChild(list).appendChild(div).appendChild(imageWrapper).appendChild(cover).src = books[key].bookCoverImage;
    
  }
  
}

bookList();