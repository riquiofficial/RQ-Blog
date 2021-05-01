const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
const app = express();

require("dotenv").config();

//connect to MongoDB and listen for requests
const dbURI = process.env.URL;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

//static files and middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//ROUTES

//blog routes
app.use(blogRoutes);

// home page
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

// about page
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// 404 page. Must go bottom of file!!
app.use((req, res) => {
  res.status(404).render("404", { title: "Error 404 - Page not found!" });
});
