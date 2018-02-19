/*  Add a new blog form  */

//  ==============================
    //  REQUIREMENTS
//  ==============================
var express = require("express");
// import body-parser to parse incoming request bodies
var bodyParser = require("body-parser");

//  ==============================
    //  DECLARATIONS
//  ==============================
var app = express();
//  Use body-parser
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

//  ==============================
    //  ROUTES
//  ==============================

//  Create an index route to serve home.ejs
app.get("/", function(req, res) {
    res.render("home");
});

//  Create a blogs route to serve blogs.ejs
// Create array of blog objects to act as test data
var blogs = [
        { blogTitle: "Test title", blogBody: "Test body" },
        { blogTitle: "Test title 2", blogBody: "Test body 2" }
    ];    
    // Add the blogs array for pushing data to the blogs page
     app.get("/blogs", function(req, res) {
        res.render("blogs", {blogs:blogs});
    });
    
    // Add the POST route
    app.post("/blogs", function(req, res) {
        // Add form data to blogs array
        var title = req.body.blogTitle;
        var body = req.body.blogBody;
        var newBlog = {blogTitle: title, blogBody: body};
        blogs.push(newBlog);
        // Redirect to blogs page
        res.redirect("/blogs");
    });
    
    // Add a form for creating new blog
    app.get("/blogs/new", function(req, res) {
        res.render("new");
    });

//  ==============================
    //  SERVER
//  ==============================

app.listen(3000, function() {
    console.log("Server listening on PORT 3000");
});