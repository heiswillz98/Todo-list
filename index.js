const express = require("express");

const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js");

const app = express();
const items = ["Buy food", "Cook food", "Eat Food"];
const workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const day = date.getDate();
  res.render("list", { listTitle: day, newListItems: items });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.post("/", (req, res) => {
  const item = req.body.newitem;
  if (req.body.list === "Work") {
    workItems.push(items);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.listen(4000, (req, res) => {
  console.log("your server is working");
});
