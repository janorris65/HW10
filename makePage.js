const dataImport = require("./index");
const manager = dataImport.One;
const lowlyEmployees = dataImport.Two;
console.log(manager);
console.log(lowlyEmployees);




function managerPopulate(){
    let hello = document.querySelector("header");
    hello.textContent = "hello";
    //let managerOutputTitle = document.createElement("ol");
   // managerOutputTitle.textContent = "hello";//TheManager.getRole();
    //let position = document.querySelector("header");
    //position.appendChild(managerOutputTitle);
};
managerPopulate();