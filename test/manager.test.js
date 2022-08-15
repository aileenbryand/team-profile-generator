const Manager = require('../lib/Manager');
const employee = new Manager('Mary', '963258', 'mary@email.com', '333')






describe('values for the maanger object' , () =>{
    expect(manager.name).toEqual('Mary');
    expect(manager.id).toEqual('963258');
    expect(manager.email).toEqual('mary@email.com');
    //ADD OFFICE NUMBER
    expect(manager.officeNumber).toEqual('333');

});

//getName() mehtod

describe('it should get the name  from getName() ' , () => {
    expect(manager.getName).toEqual('Mary');
});

// getId() mehtod

describe('it should get the id  from getId() ' , () => {
    expect(manager.getId).toEqual('963258');
});


//getEmail()
describe('it should get the email  from getEmail() ' , () => {
    expect(manager.getEmail).toEqual('mary@email.com');
});


//getRole method()
describe('it should get the role  from getRole() ' , () => {
    expect(manager.getRole).toEqual("Manager");
});

//getOfficeNumber()
describe('it should get the office number  from getOfficeNumber() ' , () => {
    expect(manager.getOfficeNumber).toEqual('333');
});



