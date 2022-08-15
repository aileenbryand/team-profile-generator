const Intern = require('../lib/Intern');
const intern = new Intern('Mary', '963258', 'mary@email.com', 'UTA')






describe('values for the maanger object' , () =>{
    expect(intern.name).toEqual('Mary');
    expect(intern.id).toEqual('963258');
    expect(intern.email).toEqual('mary@email.com');
    //ADD OSCHOOL
    expect(intern.school).toEqual('UTA');

});

//getName() mehtod

describe('it should get the name  from getName() ' , () => {
    expect(intern.getName).toEqual('Mary');
});

// getId() mehtod

describe('it should get the id  from getId() ' , () => {
    expect(intern.getId).toEqual('963258');
});


//getEmail()
describe('it should get the email  from getEmail() ' , () => {
    expect(intern.getEmail).toEqual('mary@email.com');
});


//getRole method()
describe('it should get the role  from getRole() ' , () => {
    expect(intern.getRole).toEqual("Intern");
});

//getSchool()
describe('it should get the school number  from getSchool() ' , () => {
    expect(intern.getSchool).toEqual('UTA');
});



