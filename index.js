import inquirer from 'inquirer';
import fs from 'fs';

const generateReadMe = ({
  title,
  description,
  installation,
  usage,
  contribution,
  test,
}) => {
  return `
# ${title}

## 🏆 License
${licenses}:
![Inquirer Version](https://img.shields.io/npm/v/inquirer.svg?label=Inquirer)
![NPM Downloads](https://img.shields.io/npm/dm/inquirer)
![NPM License](https://img.shields.io/npm/l/inquirer)
_This licence is covered under the MIT license • Copyright (c) 2023 Simon Boudrias (twitter: @vaxilart)_

## Description
${description}
    
### Table of Contents

 * _[Installation](#installation)_
 * _[Usage](#usage)_
 * _[Contributing](#contributing)_
 * _[Tests](#tests)_
 * _[Walkthrough](#walkthrough)_
 * _[Questions](#questions)_

## Installation
${installation}

## Usage
${usage}

## Contributing
${contribution}

## Tests
${test}

## Walkthrough
[insert video link]

### Questions

Checkout my github profile below 👇
*[${github}](${gitLink})*

_If you have any questions, don't hesitate to reach out vie the emial address below_
*${email}*
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
      message: 'Describe the usage information! 🧐',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Are there any contribution guidelines to follow? 🧐',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Are there any test instructions? 🧐',
    },
    {
      type: 'checkbox',
      name: 'licenses',
      message: 'Select any relevant licenses below. 👇',
      choices: ['inquirer'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username? 🚀',
    },
    {
      type: 'input',
      name: 'gitLink',
      message: 'Paste the link to your github profile',
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
