const fs = require("fs-extra");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title to this project?",
    },
  ]);

// function to write README file
const writeToFile = (fileName, data) => {
  const write = util.promisify(fs.writeFile);
  data()
    .then((data) => write(fileName, generateMarkdown(data)))
    .then(() => console.log("Successfully wrote to your file"))
    .catch((err) => console.error(err));
};

// function to initialize program
const init = () => writeToFile("test.md", questions() )
// function init() {}

// function call to initialize program
init();
