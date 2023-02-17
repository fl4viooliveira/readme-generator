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
    {
      type: "input",
      name: "repoUrl",
      message: "Add your repository complete link here, Example: 'https://github.com/<USERNAME>/<REPONAME>': "
    },
    {
      type: "confirm",
      name: "linkedin",
      message: "Do you have a LinkedIn? ",
    },
    {
      type: "input",
      name: "linkedinUrl",
      message: "Add your LinkedIn profile url. Example: https://www.linkedin.com/in/<USERNAME>/ ",
      when(answers) {
        return answers.linkedin;
      }
    },
    // ================ test ======================
    // {
    //   type: "confirm",
    //   name: "bacon",
    //   message: "Do you like bacon?",
    // },
    // {
    //   type: "input",
    //   name: "favorite",
    //   message: "Bacon lover, what is your favorite type of bacon?",
    //   when(answers) {
    //     return answers.bacon;
    //   },
    // },
    // {
    //   type: "confirm",
    //   name: "pizza",
    //   message: "Ok... Do you like pizza?",
    //   when(answers) {
    //     return !likesFood("bacon")(answers);
    //   },
    // },
    // {
    //   type: "input",
    //   name: "favorite",
    //   message: "Whew! What is your favorite type of pizza?",
    //   when: likesFood("pizza"),
    // },
  ]);

function likesFood(aFood) {
  return function (answers) {
    return answers[aFood];
  };
}

// function to write README file
const writeToFile = (fileName, quest) => {
  const write = util.promisify(fs.writeFile);
  quest()
    .then((data) => write(fileName, generateMarkdown(data)))
    .then(() =>
      console.log(
        "Successfully you have a amazing Readme file to add to your repo."
      )
    )
    .catch((err) => console.error(err));
};

// function to initialize program
const init = () => writeToFile("test.md", questions);

// function call to initialize program
init();
