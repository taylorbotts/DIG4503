const Person = require("./Person.js");

class Taylor extends Person {
    constructor(name, favoriteColor){
        super(name, favoriteColor);
    }
}

module.exports = Taylor;