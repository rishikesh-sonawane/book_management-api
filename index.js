const express = require("express");

const OurApp = express();

OurApp.get("/", (request,response) => {
    response.json({ message:"Request served!!!!!!!"});
});

OurApp.listen(5001, () => console.log("Server is running"));