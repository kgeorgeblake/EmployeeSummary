const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
console.log(outputPath)

const render = require("./lib/htmlRenderer");

const employees = [];//should this be let or CONST?

const questions = [
    {
      type: "input",
      message: "What is your name?",
      name: "name"
      },
      {
      type: "input",
      message: "What is your email?",
      name: "email"
      },
     {
        type: "input",
        message: "What is your ID?",
        name: "id"
    },
    {
      type: "list",
      name: "role",
      message:"what is your role",
      choices: ["engineer", "manager", "intern"]
    },
    {
      type: "input",
      message: "What is your github userId name?",
      name: "github",
      when: (answers) => answers.role==="engineer" 
      },
      {
        type: "input",
        message: "What is you school?",
        name: "school",
        when: (answers) => answers.role==="intern"
        },
        {
          type: "input",
          message: "What is your office number?",
          name: "officeNumber",
          when: (answers) => answers.role==="manager"
          }
]

function handleResponse(answers){
  
  if(answers.role==="engineer"){
    employees.push(new Engineer (answers.name, answers.id, answers.email, answers.github))
  }
  if(answers.role==="manager"){
    employees.push(new Manager (answers.name, answers.id, answers.email, answers.officeNumber))
  }
  if(answers.role==="intern"){
    employees.push(new Intern (answers.name, answers.id, answers.email, answers.school))
  }

  inquirer.prompt ({

    type: "list",
    name: "another",
    message: "Enter another employee?",
    choices: ["yes","no"]
  
  }).then(function(answers){
    if (answers.another === "yes") {
      askQuestions();
    } else {
      fs.writeFileSync(outputPath, render(employees), "utf8")
    }

  })

}

function askQuestions(){
  inquirer.prompt(questions).then(handleResponse)
}

askQuestions();
