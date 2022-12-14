const questions = [
    {
        type: "input",
        name: "managerName",
        message: "What is the manager's name"
    },
    {
        type: "input",
        name: "managerID",
        message: "What is the manager's Employee ID?"
    },
    {
        type: "input",
        name: "managerOffice",
        message: "What is the manager's office number?"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email?"
    },
    {
        type: "list",
        name: 'employeeType',
        message:'Who would you like to add next?',
        choices: ["Engineer","Intern","I am finished"]
    }
]
const questionsEngineer = [
    {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name"
    },
    {
        type: "input",
        name: "engineerID",
        message: "What is the engineer's Employee ID?"
    },
    {
        type: "input",
        name: "engineerGit",
        message: "What is the engineer's GitHub Username?"
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email?"
    },
    {
        type: "list",
        name: 'employeeType',
        message:'Who would you like to add next?',
        choices: ["Engineer","Intern","I am finished"]
    }
]
const questionsIntern = [
    {
        type: "input",
        name: "internName",
        message: "What is the intern's name"
    },
    {
        type: "input",
        name: "internID",
        message: "What is the intern's Employee ID?"
    },
    {
        type: "input",
        name: "internUni",
        message: "What is the intern's University?"
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email?"
    },
    {
        type: "list",
        name: 'employeeType',
        message:'Who would you like to add next?',
        choices: ["Engineer","Intern","I am finished"]
    }
]

module.exports = {
    One: questions,
    Two: questionsEngineer,
    Three: questionsIntern,
};