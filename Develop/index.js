// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { Readme } = require('./createREADME');

const startConfirmation = [
    {
        type: 'confirm',
        message: 'Do you want to create a README file?',
        name: 'initialization'
    }
]

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of the README?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Write your description:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Write your Table of Contents:',
        name: 'ToC'
    },
    {
        type: 'input',
        message: 'Write your Installation:',
        name: 'Installation'
    }
    ,
    {
        type: 'input',
        message: 'Write your Usage:',
        name: 'Usage'
    }
    ,
    {
        type: 'input',
        message: 'Write your License:',
        name: 'License'
    },
    {
        type: 'input',
        message: 'Write your Contributing:',
        name: 'Contributing'
    },
    {
        type: 'input',
        message: 'Write your Tests:',
        name: 'Tests'
    },
    {
        type: 'input',
        message: 'Write your Questions:',
        name: 'Questions'
    }
];

let exit = false; //this is a flag to track if the user exits or not.

// TODO: Create a function to initialize app 
function init() {
    inquirer.prompt(startConfirmation).then((response) => {

        if (response.initialization) {
            fs.writeFileSync("README.md", README(response))     //creates a README file with undefined content. this is just a skeleton of the file contents
            console.log('You have created a README.md');
            console.log(response.initialization);
            return response.initialization  //returns the value of the confirmation: true or false
        } else {
            console.log('You have chosen to create a README.md');
            return Promise.resolve();   // ends the inquiry if user chooses 'no'
        }
    })
}
function README({ title, description, ToC, Installation, Usage, License, Contributing, Tests, Questions }) {
    return `# ${title}

## description
${description}

## Table of Contents
${ToC}

## Installation
${Installation}

## Usage
${Usage}

## License
${License}

## Contributing
${Contributing}

## Tests
${Tests}

## Questions
${Questions}
`
}
// Function call to initialize app
init();
