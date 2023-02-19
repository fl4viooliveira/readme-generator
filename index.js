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
      message: "What is the title to this project?\n >> ",
    },
    {
      type: "input",
      name: "repoUrl",
      message: "Add your repository complete link here,\n Example: 'https://github.com/<USERNAME>/<REPONAME>':\n >> ",
      validate(answer) {
        if (answer === ""){
          return "You must add the repository URL.";
        }
        return true;
      }
    },
    {
      type: "confirm",
      name: "licenseConf",
      message: "Do you have a LICENSE file on the root of this repo?\n >> "
    },
    {
      type: "list",
      name: "license",
      message: "How your LICENSE file looks like?",
      choices: [
        "LICENSE",
        "LICENSE.txt",
        "License.txt",
        "LICENSE.md",
        "License.md",
      ],
      when(answers){
        return answers.licenseConf;
      }
    },
    {
      type: "confirm",
      name: "linkedin",
      message: "Do you want add your LinkedIn at this file?\n >> ",
    },
    {
      type: "input",
      name: "linkedinUrl",
      message: "Add your LinkedIn profile url.\n Example: https://www.linkedin.com/in/<USERNAME>/\n >> ",
      when(answers) {
        return answers.linkedin;
      }
    },
    {
      type: "confirm",
      name: "logo",
      message: "Have your project a logo?\n >> ",
    },
    {
      type: "input",
      name: "logoPath",
      message: "Add your logo path.\n Example: images/logo.png\n >> ",
      when(answers){
        return answers.logo;
      },
    },
    {
      type: "input",
      name: "shortDescription",
      message: "Add a short description of your project.\n >>"
    },
    {
      type: "confirm",
      name: "screen",
      message: "Have your project a screen shot?\n >> ",
    },
    {
      type: "input",
      name: "screenPath",
      message: "Add your screen shot path.\n Example: images/screenshot.png\n >> ",
      when(answers){
        return answers.screen;
      },
    },
    {
      type: "editor",
      name: "about",
      message: "Write what your project is about:\n >> ",
      waitUserInput: true,
    },
    {
      type: "checkbox",
      name: "builtWith",
      message: "Select which tecnology did you use on this project:",
      choices: [
        new inquirer.Separator(" = Program Languages = "),
        {
          name: "JavaScript",
        },
        {
          name: "Python",
        },
        {
          name: "Ruby",
        },
        {
          name: "Go",
        },
        {
          name: "Rust",
        },
        {
          name: "C",
        },
        {
          name: "C++",
        },
        {
          name: "Java",
        },
        new inquirer.Separator(" = Frameworks = "),
        {
          name: "React",
        },
        {
          name: "jQuery",
        },
        {
          name: "Bootstrap",
        },
        {
          name: "Django",
        },
        {
          name: "RubyonRails",
        },
        {
          name: "None",
        },
      ],
      validate(answer) {
        if (answer.length < 1){
          return "You must choose at least one topping.";
        }
        return true;
      }
    },
    {
      type: "confirm",
      name: "prereqConf",
      message: "Do you want to add the Prerequisites section to your Readme?\n >> ",
    },
    {
      type: "editor",
      name: "prereq",
      message: "Write the Prerequisites necessary for this application.\n You can write it using Markdown syntax.\n >> ",
      waitUserInput: true,
      when(answers){
        return answers.prereqConf;
      },
    },
    {
      type: "confirm",
      name: "installConf",
      message: "Do you want to add the Installation steps to your app on Readme?\n >> ",
    },
    {
      type: "editor",
      name: "install",
      message: "Write the Installation steps.\n You can write it using Markdown syntax.\n >> ",
      waitUserInput: true,
      when(answers){
        return answers.installConf;
      },
    },
    {
      type: "confirm",
      name: "contri",
      message: "Do you want to add contributing steps to this document?\n >> ",
    },
    {
      type: "confirm",
      name: "contact",
      message: "Do you want to add your email contact at this document?\n >> "
    },
    {
      type: "input",
      name: "name",
      message: "Add your name:\n >> ",
      when(answers){
        return answers.contact;
      }
    },
    {
      type: "input",
      name: "email",
      message: "Add your email:\n >> ",
      when(answers){
        return answers.contact;
      }
    },
  ]);

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
const init = () => writeToFile("README.md", questions);

// function call to initialize program
init();
