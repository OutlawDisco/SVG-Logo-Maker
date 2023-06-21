const fs = require("fs");
const inquirer = require("inquirer");
const { Shapes, Circle, Square, Triangle } = require("./lib/shapes.js");

const generateSVG = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter up to three characters",
        name: "text",
      },
      {
        type: "input",
        message: "Enter a color keyword or hekidecimal number",
        name: "textColor",
      },
      {
        type: "list",
        message: "what shape would you like for your logo?",
        name: "shape",
        choices: ["circle", "triangle", "square"],
      },
      {
        type: "input",
        message: "what color would you like for your shape?",
        name: "shapeColor",
      },
    ])
    .then((results) => {
      let shape;
      if (results.shape === "circle") {
        shape = new Circle(results.text, results.textColor, results.shapeColor);
      } else if (results.shape === "square") {
        shape = new Square(results.text, results.textColor, results.shapeColor);
      } else {
        shape = new Triangle(
          results.text,
          results.textColor,
          results.shapeColor
        );
      }

      const svgPageContent = shape.render();

      fs.writeFile("./examples/logo.svg", svgPageContent, (err) =>
        err ? console.log(err) : console.log("Success!")
      );
    });
};
generateSVG();
