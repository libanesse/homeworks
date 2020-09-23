const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const mkdirAsync = util.promisify(fs.mkdir);
const writeFileAsync = util.promisify(fs.writeFile);

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const questions = [
  { name: "name", message: "What is the employee's name?" },
  { name: "id", message: "What's the employee's ID?" },
  { name: "email", message: "What is the employee's email?" },
  {
    type: "list",
    name: "role",
    message: "What's the employee's role?",
    choices: ["Manager", "Engineer", "Intern"],
  },
];

const managerQuestions = [
  { name: "officeNumber", message: "What's the manager's office number?" },
];

const engineerQuestions = [
  { name: "github", message: "What is the engineer's Github account?" },
];

const internQuestions = [
  { name: "school", message: "What school does the intern attend?" },
];

const confirm = [
  {
    type: "confirm",
    name: "addEmployee",
    message: "Would you lick to add another?",
  },
];

const init = async () => {
  const employees = [];
  let newEmployee = true;

  while (newEmployee) {
    const { name, id, email, role } = await inquirer.prompt(questions);

    if (role === "Manager") {
      const { officeNumber } = await inquirer.prompt(managerQuestions);
      
      employees.push(new Manager(name, id, email, officeNumber));
    } else if (role === "Engineer") {
      const { github } = await inquirer.prompt(engineerQuestions);
      
      employees.push(new Engineer(name, id, email, github));
    } else {
      const { school } = await inquirer.prompt(internQuestions);
     
      employees.push(new Intern(name, id, email, school));
    }
    
    const { addEmployee } = await inquirer.prompt(confirm);

    newEmployee = addEmployee;
  }

  const html = render(employees);

  if (!fs.existsSync(outputPath)) {
    const error = await mkdirAsync(OUTPUT_DIR);
    error && console.error(error);
  }

  const error = await writeFileAsync(outputPath, html);
  error && console.error(error);
};

init();