const fs = require("fs");
const inquirer = require("inquirer");
const Shapes = require("./lib/shapes.js");

const generateSVG = ({ text, shape, textColor, shapeColor }) => {
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
        type: "input",
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
      const svgPageContent = generateSVG(results);

      fs.writeFile("logo.svg", svgPageContent, (err) =>
        err ? console.log(err) : console.log("Success!")
      );
    });
};
