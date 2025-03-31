const express = require("express");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.render("home"));
app.get("/about", (req, res) => res.render("about"));
app.get("/learn", (req, res) => res.render("learn"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`FBI live on ${PORT}`));