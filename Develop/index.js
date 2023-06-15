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
        type: 'list',
        message: 'Choose your License:',
        name: 'License',
        choices: [  "MIT License",
        "Apache License 2.0",
        "BSD 2-Clause License",
        "BSD 3-Clause License",
        "Mozilla Public License (MPL)",
        "zlib License",
        "Eclipse Public License"]
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

// TODO: Create a function to initialize app 
function init() {
    inquirer.prompt(startConfirmation).then((response) => {

        if (response.initialization) {
            fs.writeFileSync("README.md", README(response))     //creates a README file with undefined content. this is just a skeleton of the file contents
            console.log('You have created a README.md');
            writeContent();  //returns the value of the confirmation: true or false
        } else {
            console.log('You have chosen to create a README.md');
            return Promise.resolve();   // ends the inquiry if user chooses 'no'
        }
    })
}

function writeContent(){
    inquirer.prompt(questions).then ( (response) => {
        fs.writeFileSync("README.md", README(response)) 
    })
}


function licenseBadge(License) {
    //takes a license argument, and passes it in the switch parameter. will then return the corresponding badge of the license
    switch(License) {
        case "MIT License": return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
        case "Apache License 2.0": return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
        case "BSD 2-Clause License" : return `![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)`;
        case "BSD 3-Clause License": return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]`;
        case "Mozilla Public License (MPL)": return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
        case "zlib License": return `![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)`
        case "Eclipse Public License": return `![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)`;

    }
}

function README({ title, description, ToC, Installation, Usage, License, Contributing, Tests, Questions }) {
    var badge = licenseBadge(License);  //calls the licenseBadge function and gets the badge of the license passed in the parameters
    console.log(badge);

    return `
${badge}

# ${title}





## Description
${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#Tests)
- [Questions](#Questions)

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
