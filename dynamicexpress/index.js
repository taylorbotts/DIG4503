const Express = require("express");
const App = Express();
const port = 80;

const People = require("./People.js");
let people = new People();

App.use(Express.json()) // for parsing application/json
App.use(Express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

App.use("/", Express.static("public"));

// this route is looking for a :name in person/name directory
App.get("/people/name/:name", (req, res) => {
    
    // all database stuff is now in People class
    res.send(people.readName(req));

});

App.get("/people/color/:color", (req, res) => {

    res.send(people.readColor(req));

});

App.post("/people/person/:name/:color", (req,res) => {

    res.send(req.params);

})

App.listen(port, ()=> {
    console.log("Server running...");
})