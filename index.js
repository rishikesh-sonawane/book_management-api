const express = require("express");

// import database
const Database = require("./database");


// initialization
const OurApp = express();

OurApp.get("/", (request,response) => {
    response.json({ message:"Server is working well"});
});

// ----------------------------" BOOK "--------------------------------- 

// Route    - /book
// Des      - To get all books
// Access   - Public
// Method   - GET
// Params   - none
// Body     - none
OurApp.get("/book", (req, res) => {
    return res.json({ books: Database.Book });
});

// Route    - /book/:bookID
// Des      - To get a book based on ISBN
// Access   - Public
// Method   - GET
// Params   - bookID
// Body     - none
OurApp.get("/book/:bookID", (req, res) => {
    const getBook = Database.Book.filter(
        (book) => book.ISBN === req.params.bookID
    );
    return res.json({ book: getBook });
 });

// Route    - /book/c/:category
// Des      - to get a list of books based on category
// Access   - Public
// Method   - GET
// Params   - category
// Body     - none
OurApp.get("/book/c/:category", (req, res) => {
    const getBook = Database.Book.filter(
        (book) => book.category.includes(req.params.category)
    );
    return res.json({ book: getBook});
});

// Route    - /book/a/:authors
// Des      - to get a list of books based on author
// Access   - Public
// Method   - GET
// Params   - authors
// Body     - none
OurApp.get("/book/a/:authors", (req, res) => {
    const getBook = Database.Book.filter(
        (book) => book.authors.includes(parseInt(req.params.authors))
        );
    return res.json({ book: getBook});
});

// -----------------------------------" AUTHORS "------------------------------------------- //

// Route    - /author
// Des      - to get all authors
// Access   - Public
// Method   - GET
// Params   - none
// Body     - none
OurApp.get("/author", (req, res) => {
    return res.json({ author: Database.Author });
  });

// Route    - /author/:authorID
// Des      - To get a book based on authorID
// Access   - Public
// Method   - GET
// Params   - authorID
// Body     - none
OurApp.get("/author/:authorID", (req, res) => {
    const getAuthor = Database.Author.filter(
        (author) => author.id === parseInt(req.params.authorID)
    );
    return res.json({ author: getAuthor });
 });




 // --------------------------------" PUBLICATION "------------------------

// Route    - /publication
// Des      - to get all publication
// Access   - Public
// Method   - GET
// Params   - none
// Body     - none
OurApp.get("/publication", (req, res) => {
    return res.json({ publication: Database.Publication });
  });

// Route    - /publication/:authorID
// Des      - to get specific publication
// Access   - Public
// Method   - GET
// Params   - publicationID
// Body     - none
OurApp.get("/publication/:publicationID", (req, res) => {
    const getPublication = Database.Publication.filter(
        (publication) => publication.id === parseInt(req.params.publicationID)
    );
    return res.json({ publication: getPublication });
 });




OurApp.listen(5001, () => console.log("Server is running"));