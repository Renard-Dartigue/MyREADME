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
        name:"github",
        message:"Enter github user name.",
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
