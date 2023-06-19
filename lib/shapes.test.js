const fs = require("fs");
const inquirer = require("inquirer");

test("Triangle", () => {
  it("should make triangle and set color to blue", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});
