const messages = [
  {
    text: "Hey there!",
    user: "Peter",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Dusty",
    added: new Date(),
  },
];

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "Mini Messageboard" });
});

router.post("/new", function (req, res, next) {
  const messageText = req.body.message;
  const messageUser = req.body.user;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

module.exports = router;
