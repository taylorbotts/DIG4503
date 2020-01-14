const chalk = require("chalk");

class Person {
    constructor(name, favoriteColor){
        this.name = name;
        this.favoriteColor = favoriteColor;
    }

    speak(){
        console.log("Hi!");
        console.log("I'm " + this.name);
        console.log("And my favorite color is " + chalk.keyword(this.favoriteColor)(this.favoriteColor));
    }
}

module.exports = Person;