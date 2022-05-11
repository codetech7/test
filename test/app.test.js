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
            return("alraedy rickety");
        }

        else {
            return("not yet rickety");
        }
    }



};

describe("Car", ()=>{
    it("is rickety", ()=>{
        const cra = new Car();
        cra.drive(40);
        assert.equal(cra.isRickety(), "already rickety");
        cra.drive(70);
        assert.equal(cra.isRickety(), "already rickety");
    });
    it("is not rickety", ()=>{
        const cra = new Car();
        cra.drive(40);
        assert.equal(cra.isRickety(), "not yet rickety");
        cra.drive(70);
        assert.equal(cra.isRickety(), "not yet rickety");
    })
    
});