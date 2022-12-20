const classImport = require('../classes');
const Engineer = classImport.Three;

it( "should create an object with name, ID, Email, GitHub and methods getName, getID, getEmail, getRole",()=>{
//Arrange
const nameTest = "John";
const IDTest = 3456;
const emailTest = "Love@Love.com";
const gitHubTest = "john3456";
//Act
let engineer = new Engineer(nameTest, IDTest, emailTest, gitHubTest);
//Assert
expect(manager.getName()).toEqual(nameTest);
expect(manager.getID()).toEqual(IDTest);
expect(manager.getEmail()).toEqual(emailTest);
expect(managet.getgitHub()).toEqual(gitHubTest);
expect(manager.getRole()).toEqual("engineer");
});