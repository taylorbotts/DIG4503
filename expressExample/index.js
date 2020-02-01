const Express = require("express");
const App = Express();
const port = 8080;
const Person = require("./Person.js");

let p = new Person("taylor","yellow");

App.get("/", (Request, Response) => {
    Response.send(p);
});

App.get("/color", (req, res) => {
    res.send(p.color);
});

App.get("/name", (req, res) => {
    res.send(p.name);
});

App.listen(port, function(){
    console.log("Server running");
});