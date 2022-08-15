
const Employee = require('../lib/Employee');
const employee = new Employee('Mary', '963258', 'mary@email.com')






describe('values for the employee object' , () =>{
    expect(employee.name).toEqual('Mary');
    expect(employee.id).toEqual('963258');
    expect(employee.email).toEqual('mary@email.com');
});

//getName() mehtod

describe('it should get the name  from getName() ' , () => {
    expect(employee.getName).toEqual('Mary');
});

// getId() mehtod

describe('it should get the id  from getId() ' , () => {
    expect(employee.getId).toEqual('963258');
});


//getEmail()
describe('it should get the email  from getEmail() ' , () => {
    expect(employee.getEmail).toEqual('mary@email.com');
});


//getRole method()
describe('it should get the role  from getRole() ' , () => {
    expect(employee.getRole).toEqual("Employee");
});




  
