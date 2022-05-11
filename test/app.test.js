const modula = require("../module");
const assert = require("assert");
const { isTypedArray } = require("util/types");

class Car{

   
    Drive(){
        return "vroom";
    }

    Honk(){
        return "pim";
    }


};

describe("Car", ()=>{
    it(" can drive", ()=>{
        const cra = new Car();
        assert.equal(cra.Drive(), "vroom");
    });

    it("can honk", ()=>{
        const cra = new Car();
        assert.equal(cra.Honk(), "pim");
    })
});