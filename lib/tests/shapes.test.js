const { Triangle } = require("../shapes.js");

describe("Triangle", () => {
  it("should make triangle and set color to blue", () => {
    const shape = new Triangle("SVG", "yellow");
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
     <polygon points="150, 18 244, 182 56, 182" fill='blue' />
    
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">SVG</text>
    
    </svg>`
    );
  });
});
