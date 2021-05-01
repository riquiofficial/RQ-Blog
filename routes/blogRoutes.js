const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

//BLOG ROUTES

//home
router.get("/blogs", blogController.blog_index);

//create blog
router.get("/create", blogController.blog_create_get);
router.post("/create", blogController.blog_create_post);

//view blog
router.get("/blogs/:id", blogController.blog_details);

//delete blog
router.delete("/blogs/:id", blogController.blog_delete);

module.exports = router;
