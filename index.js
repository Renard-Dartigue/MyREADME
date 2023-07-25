// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

const questions = [
    {
        type:"input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type:"input",
        name:"description",
        message:"Enter a description.",
    },
    {
        type:"input",
        name:"installation",
        message:"Enter the installation guide."
    },
    {
        type:"input",
        name:"usage",
        message:"Enter the usage guide."
    },
    {
        type:"input",
        name:"license",
        message:"Enter license.",
    },
    {
        type:"input",
        name:"gitHub",
        message:"Enter github user name.",
    },
    {
        type:"input",
        name:"email",
        message:"Enter email adress."
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, date) {
    fs.writeFile(fileName, date, (error) => {
        error ? console.error(error) : console.log("Success");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        let markdown = generateMarkdown(answers);
        writeToFile("README.md",markdown);
    });
}

// Function call to initialize app
init();
