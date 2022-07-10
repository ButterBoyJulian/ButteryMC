const express = require("express");
const fs = require("fs");
const path = require("path");

// Declare variables
var config = JSON.parse(fs.readFileSync("./config.json", "utf8"));
var port = process.env.PORT || config.port;

// Setup the server
const app = express();
app.disable("x-powered-by");
app.set("views", "views");
app.set("view engine", "ejs");

app.listen(port, () => {
	console.log("Server is listening on port " + port);
});

// Serve static files
app.use(express.static(path.join(__dirname, "public"), {
	extensions: ['html', 'htm']
}));

// Serve dynamic pages
app.get("/", (req, res) => {
	res.render("index");
});
app.get("/vote", (req, res) => {
	res.render("vote");
});
app.get("/rules", (req, res) => {
	res.render("rules");
});
app.get("/about", (req, res) => {
	res.render("about");
});
app.get("/store", (req, res) => {
	res.render("store");
});
app.get("/reddit", (req, res) => {
	res.render("reddit");
});
app.get("/discord", (req, res) => {
	res.render("discord");
});

// Page not found handler
app.get("*", (req, res) => {
	res.status(404);
	res.render("404");
});
