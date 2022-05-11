const modula = require("../module");
const assert = require("assert");
const mocha = require("mocha");
const { isTypedArray } = require("util/types");

class Car{
    //if a car is still new or not based on how many distance it has covered.
    
    distance;

    Car(){
        distance = 0;
    }
   
    drive(increase){
        
        distance += increase;
    }

    isRickety(){
        if(distance > 50){
            console.log("not yet rickety");
        }

        else {
            return("already rickety");
        }
    }

    honk(){
        return "pim";
    }


};

describe("Car", ()=>{
    it("is rickety", ()=>{
        const cra = new Car();
        cra.drive(40);
        assert.equal(isRickety(), "already rickety");
    });

    it("can honk", ()=>{
        const cra = new Car();
        assert.equal(cra.Honk(), "pim");
    })
});