const Express = require("express");
const App = Express();
const port = 80;

App.get("/", function(req, res){
    res.send("Hello world!");
})

App.use("/public", Express.static("public"));

App.listen(port, function(){
    console.log("Server running..");
})