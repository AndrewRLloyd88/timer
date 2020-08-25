const assert = require("chai").assert.strictEqual;
const timer1 = require("../timer1");


describe("#timer1", () => {
  it("should quit out immediately if no numbers are provided", () => {
    assert(timer1(), undefined)
  })
});


  it("should ignore elements that are provided if they are aren't a number", () => {
    assert(timer1(["gobledegook"]), undefined)
  })



  it("should ignore negative numbers", () => {
    assert(timer1([-1]), undefined)
  })



