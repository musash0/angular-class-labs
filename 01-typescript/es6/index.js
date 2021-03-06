class Book {
  constructor(title, yearPublished) {
    this.title = title;
    this.yearPublished = yearPublished;
  }
}

class Author {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }
}

window.onload = function() {
  var author = new Author('John Steinbeck');

  author.addBook(new Book('Of Mice and Men', 1937));
  author.addBook(new Book('The Grapes of Wrath', 1939));
  author.addBook(new Book('East of Eden', 1952));

  author.books.forEach(function(book) {
    console.log(book.title, book.yearPublished);
  });
};
