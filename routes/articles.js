"use strict";
const router = require("express").Router();
let Article = require("../models/article.model");

router.route("/").get((req, res) => {
  Article.find()
    .then((articles) => res.json(articles))
    .catch((err) => res.status(400).json("Error: " + err));
});

// --ROUTER FOR LATEST POSTS//
router.route("/latest").get((req, res) => {
  Article.find()
    .sort({ _id: -1 })
    .limit(1)
    .then((articles) => res.json(articles))
    .catch((err) => res.status(400).json("ErrorEsctricto2: " + err));
});

router.route("/add").post((req, res) => {
  const newArticle = new Article({});
  newArticle.author = req.body.username;
  newArticle.title = req.body.title;
  newArticle.subtitle = req.body.subtitle;
  newArticle.dateCreated = req.body.dateCreated;
  newArticle.tags = req.body.tags;
  newArticle.html = req.body.html;

  newArticle
    .save()
    .then(() => res.json("Article added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Article.findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then(() => res.json("Article deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Article.findById(req.params.id)
    .then((Article) => {
      Article.author = req.body.username;
      Article.text = req.body.text;
      Article.title = req.body.title;
      Article.subtitle = req.body.subtitle;
      Article.tags = req.body.tags;
      Article.html = req.body.html;
      //   Article.date = Date.parse(req.body.date);

      Article.save()
        .then(() => res.json("Article updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
