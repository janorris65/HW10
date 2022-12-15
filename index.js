const fs = require ('fs');
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
const questionsImport = require('./questions');
const questions = questionsImport.One;
const questionsEngineer = questionsImport.Two;
const questionsIntern = questionsImport.Three;
const classImport = require('./classes');
const Employee = classImport.One;
const Manager = classImport.Two;
const Engineer = classImport.Three;
const Intern = classImport.Four;
let lowlyEmployeeArray=[];
let TheManager;

inquirer
  .prompt(questions).then((response)=>{
    TheManager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOffice)
    if (response.employeeType == "I am finished"){
        console.log(TheManager);
    } else if (response.employeeType == "Engineer"){
         engineerCall(questionsEngineer);
    } else if (response.employeeType== "Intern"){
         internCall(questionsIntern);
    }
  })

  function engineerCall(questionsEngineer){
    inquirer
  .prompt(questionsEngineer).then((response)=>{
    let engineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.engineerGit);
    lowlyEmployeeArray.push(engineer);
    if (response.employeeType == "I am finished"){
        console.log(lowlyEmployeeArray);
        console.log(TheManager);
    } else if (response.employeeType == "Engineer"){
         engineerCall(questionsEngineer);
    } else if (response.employeeType == "Intern"){
         internCall(questionsIntern);
    }
  })
  };
  function internCall(questionsIntern){
    inquirer
  .prompt(questionsIntern).then((response)=>{
    let intern = new Intern(response.internName, response.internID, response.internEmail, response.internUni);
    lowlyEmployeeArray.push(intern);
    if (response.employeeType == "I am finished"){
        console.log(lowlyEmployeeArray);
        console.log(TheManager);
    } else if (response.employeeType == "Engineer"){
         engineerCall(questionsEngineer);
    } else if (response.employeeType == "Intern"){
         internCall(questionsIntern);
    }
  })
  };
