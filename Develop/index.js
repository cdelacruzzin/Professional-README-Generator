// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { Readme } = require('./createREADME');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'confirm',
        message: 'Do you want to create a README file?',
        name: 'initialization'
    },
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



// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {

        if (response.initialization) {
            const initialReadMe = new Readme('');
            fs.writeFileSync("README.md", README(response))
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
