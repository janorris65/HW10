const fs = require ('fs');
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
const questionsImport = require('./questions');
const questions = questionsImport.One;
const questionsEngineer = questionsImport.Two;
const questionsIntern = questionsImport.Three;

inquirer
  .prompt(questions).then((response)=>{
    if (response.employeeType == "I am finished"){
        // make file
    } else if (response.employeeType == "Engineer"){
         engineerCall(questionsEngineer);
    } else if (response.employeeType== "Intern"){
         internCall(questionsIntern);
    }
  })

  function engineerCall(questionsEngineer){
    inquirer
  .prompt(questionsEngineer).then((response)=>{
    if (response.employeeType == "I am finished"){
        // make file
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
    if (response.employeeType == "I am finished"){
        // make file
    } else if (response.employeeType == "Engineer"){
         engineerCall(questionsEngineer);
    } else if (response.employeeType == "Intern"){
         internCall(questionsIntern);
    }
  })
  };
