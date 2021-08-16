const express = require("express");

// import database
const Database = require("./database");


// initialization
const OurApp = express();

OurApp.get("/", (request,response) => {
    response.json({ message:"Server is working well"});
});

OurApp.get("/book", (req, res) => {
    return res.json({ books: Database.Book });
});

OurApp.listen(5001, () => console.log("Server is running"));