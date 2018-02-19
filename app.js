/*  Set up a second GET route and serve views  */

//  ==============================
    //  REQUIREMENTS
//  ==============================
var express = require("express");

//  ==============================
    //  DECLARATIONS
//  ==============================
var app = express();

//  Set the view-engine. This means we dont have to use the .ejs extension in our routes
app.set("view engine", "ejs");

//  ==============================
    //  ROUTES
//  ==============================

//  Create an index route to serve home.ejs
app.get("/", function(req, res) {
    res.render("home");
});

//  Create a blogs route to serve blogs.ejs
app.get("/blogs", function(req, res) {
    res.render("blogs");
});

//  ==============================
    //  SERVER
//  ==============================

app.listen(3000, function() {
    console.log("Server listening on PORT 3000");
});