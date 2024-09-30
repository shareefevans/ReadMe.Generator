import inquirer from 'inquirer';
import fs from 'fs';

const generateReadMe = ({}) => {
  return `
    # ${title} 

    ## Description
    ${description}
    
    ### Table of Contents
     - [Installation](#installation)
     - [Usage](#usage)
     - [Contributing](#contributing)
     - [Tests](#tests)

    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ## Contributing
    ${contribution}

    ## Tests
    ${test}
    `;
};

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? 😲',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your project! 🤔',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions? 🧐',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Describe the usabe information! 🧐',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Are there any contribution guidelines to follow? 🧐',
    },
    {
      type: 'inpu📧t',
      name: 'test',
      message: 'Are there any test instructions? 🧐',
    },
    {
      type: 'checkbox',
      name: 'licenses',
      message: 'Select any relevant licenses below. 👇',
      choices: ['inquirer', 'color', 'prettier'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username? 🚀',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email? 📧',
    },
  ])
  .then((response) => {
    const newReadMe = generateReadMe(response);
    fs.writeFile('ReadMe.md', newReadMe, (err) => {
      err ? console.error(err) : console.log('Success 🎉!');
    });
  });
