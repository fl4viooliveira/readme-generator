const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const util = require("util");
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
 const writeToFile = (fileName, quest) => {
   const write = util.promisify(fs.writeFile);
   quest()
     .then((data) => write(fileName, generateMarkdown(data)))
     .then(() => console.log("Successfully you have a amazing Readme file to add to your repo."))
     .catch((err) => console.error(err));
 };

 // function to initialize program
 const init = () => writeToFile("test.md", questions);

 // function call to initialize program
 init()
