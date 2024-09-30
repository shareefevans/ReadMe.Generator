// import npm/node packages
import inquirer from 'inquirer';
import fs from 'fs';

// creating an array that will store the different values available for each npm package
const npmLicenses = [
  {
    npmName: 'inquirer',
    badge:
      '![Inquirer Version](https://img.shields.io/npm/v/inquirer.svg?label=Inquirer)',
    downloads: '![NPM Downloads](https://img.shields.io/npm/dm/inquirer)',
    license: '![NPM License](https://img.shields.io/npm/l/inquirer)',
  },
  {
    npmName: '',
    badge: '',
    downloads: '',
    license: '',
  },
  {
    npmName: '',
    badge: '',
    downloads: '',
    license: '',
  },
];

// this function will loop through the npm licenses array to check if what the user has entered in licenses matches any of the options within the array, if the options do match then the function returns the name, badge, downloads and license of the npm package otherwise, if it simply returns NA ( for this project we're justing ignoring the other npm packages in the array, so they'll return NA hence the empty strings for their objects in the array above)
const selectedLicenseInfo = (licenses) => {
  for (let i = 0; i < npmLicenses.length; i++) {
    if (npmLicenses[i].npmName === licenses[0]) {
      return {
        name: npmLicenses[i].npmName,
        badge: npmLicenses[i].badge,
        downloads: npmLicenses[i].downloads,
        license: npmLicenses[i].license,
      };
    }
  }
  return {
    name: 'NA',
    badge: 'NA',
    downloads: 'NA',
    license: 'NA',
  };
};

// function to generate the readMe file based of values stored in the parameters
const generateReadMe = ({
  title,
  licenses,
  description,
  installation,
  usage,
  contribution,
  test,
  github,
  gitlink,
  email,
}) => {
  const info = selectedLicenseInfo(licenses);
  return `
# ${title}
${info.badge}

## 🚀 Description

${description}
    
### 📋 Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Walkthrough](#walkthrough)
* [Questions](#questions)

## 🔌 Installation

${installation}

## ✋ Usage

${usage}

## ➕ Contributing

${contribution}

## ✅ Tests

${test}

## 📺 Walkthrough

[insert video link]

### ❓ Questions

Checkout my github profile below 👇
* GitHub Name: ${github}
* GitHub Link: [Follow link here](${gitlink})

---

_If you have any questions, don't hesitate to reach out vie the emial address below_
*${email}*

## 🏆 License

This project is not licensed

----

### ${licenses}:
* Donwloads: ${info.downloads}
* License: ${info.license}
    `;
};

// setting up the user prompts based of the response...
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
      choices: ['inquirer', 'color'],
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
