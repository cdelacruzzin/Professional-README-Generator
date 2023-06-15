// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'confirm',
        message: 'Do you want to create a README file?',
        name: 'initialization'
    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then( (response) => {

        if(response.initialization) {
            fs.writeFileSync("main.md", README())
            console.log(response.initialization)
        }
})
}

function README() {
    return ` # title`

}
// Function call to initialize app
init();
