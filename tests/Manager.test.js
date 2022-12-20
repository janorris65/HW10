const classImport = require('../classes');
const Manager = classImport.Two;

it( "should create an object with name, ID, Email, office Number and methods getName, getID, getEmail, getRole, getofficeNum",()=>{
//Arrange
const nameTest = "John";
const IDTest = 3456;
const emailTest = "Love@Love.com";
const officeNumTest =5678;
//Act
let manager = new Manager(nameTest, IDTest, emailTest, officeNumTest);
//Assert
expect(manager.getName()).toEqual(nameTest);
expect(manager.getID()).toEqual(IDTest);
expect(manager.getEmail()).toEqual(emailTest);
expect(manager.getofficeNum()).toEqual(officeNumTest);
expect(manager.getRole()).toEqual("Manager");
});