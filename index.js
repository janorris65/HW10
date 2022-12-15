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
let theHtml = 
'<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta http-equiv="X-UA-Compatible" content="IE=edge">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Document</title></head><body>    <header id="theMan"></header><main id="theWorkers"></main></body><script src="index.js"></script></html>'

inquirer
  .prompt(questions).then((response)=>{
    TheManager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOffice)
    if (response.employeeType == "I am finished"){
        makeHtml(theHtml);
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
        makeHtml(theHtml);
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
        makeHtml(theHtml);
        console.log(lowlyEmployeeArray);
        console.log(TheManager);
    } else if (response.employeeType == "Engineer"){
         engineerCall(questionsEngineer);
    } else if (response.employeeType == "Intern"){
         internCall(questionsIntern);
    }
  })
  };


function makeHtml(endResult){
    fs.writeFile("index.html", endResult,(err) =>
err ? console.log(err) : console.log('Success!'))
} 
function addWorkersHtml(){
    lowlyEmployeeArray.forEach
}
