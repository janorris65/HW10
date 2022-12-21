const classImport = require('../classes');
const Engineer = classImport.Three;

it( "should create an object with name, ID, Email, GitHub and methods getName, getID, getEmail, getRole, getgitHub",()=>{
//Arrange
const nameTest = "John";
const IDTest = 3456;
const emailTest = "Love@Love.com";
const gitHubTest = "john3456";
//Act
let engineer = new Engineer(nameTest, IDTest, emailTest, gitHubTest);
//Assert
expect(engineer.getName()).toEqual(nameTest);
expect(engineer.getID()).toEqual(IDTest);
expect(engineer.getEmail()).toEqual(emailTest);
expect(engineer.getgitHub()).toEqual(gitHubTest);
expect(engineer.getRole()).toEqual("engineer");
});