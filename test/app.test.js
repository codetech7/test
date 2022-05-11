const modula = require("../module");
const assert = require("assert");
const mocha = require("mocha");
const { isTypedArray } = require("util/types");

class Car{
    //if a car is still new or not based on how many distance it has covered.
    
    constructor(){
        this.distance = 0;
    }
   
    drive(increase){
        
        this.distance += increase;
    }

    isRickety(){
        if(this.distance > 50){
            console.log("not yet rickety");
        }

        else {
            return("already rickety");
        }
    }



};

describe("Car", ()=>{
    it("is rickety", ()=>{
        const cra = new Car();
        cra.drive(40);
        assert.equal(cra.isRickety(), "already rickety");
    });

    
});