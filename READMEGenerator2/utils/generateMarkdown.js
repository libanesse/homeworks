// function to generate markdown for README
function generateMarkdown(response) {
    // The user will need to delete the spacing on the markdown document, as my formatter puts four spaces before each line starting on line 64
    return `
      # ${response.title}
      
      ## Description:
      ![License](https://img.shields.io/badge/License-${response.license}-blue.svg "License Badge")
      ${response.description}
  
      # Table of Contents
      
      - [Description](#description)
      - [Installation](#installation)
      - [Usage](#usage)
      - [Contributing](#contributing)
      - [Test](#tests)
      - [License](#license)
      - [Questions](#questions)
      
      ## Installation:
      ${response.installation}
  
      ## Usage:
      ${response.usage}
  
      ## License:
      For more information about the license, click the link below:
  
      - [License](https://opensource.org/licenses/${response.license})
  
      ## Contributing:
      ${response.contributing}
  
      ## Tests:
      ${response.tests}
  
      ## Questions:
      For more information about the Generator, please reach out to me via my GitHub profile.
  
      -[GitHub Profile](https://github.com/${response.username})
  
      For any other questions, please send me an email at: ${response.email}.
      `;
  }
  module.exports = generateMarkdown;
  