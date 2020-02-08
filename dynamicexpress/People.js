const Person = require("./Person.js");
const faker = require('faker');

class People {
    constructor(){
        this.people = [];
        // generate 99 people with random name and color
        for (let i = 0; i < 99; i++) {
            let name = faker.name.findName();
            let color = faker.commerce.color();
            this.people.push(new Person(name, color));
        }
    }

    readColor(req){
        // loop through the people, if there is a match send it back
        // could also be done using .filter(), .map, or .find
        let result = { "error": "could not find!" };

        this.people.forEach((value) => {
            if (value.color == req.params.color) {
                result = value;
            }
        });
        // if none are found send an error response
        if (result.error) {
            console.log("Inalid: " + req.path);
        } else {
            console.log("Valid: " + req.path);
        }
        return result;
    }

    readName(req){
        let result = { "error": "could not find!" };

        this.people.forEach((value) => {
            if (value.name == req.params.name) {
                result = value;
            }
        });
        if (result.error) {
            console.log("Invalid: " + req.path);
        } else {
            console.log("Valid: " + req.path);
        }
        
        return result;
    }

}

module.exports = People;