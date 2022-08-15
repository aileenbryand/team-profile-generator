const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Mary', '963258', 'mary@email.com', 'mary32')






describe('values for the maanger object' , () =>{
    expect(engineer.name).toEqual('Mary');
    expect(engineer.id).toEqual('963258');
    expect(engineer.email).toEqual('mary@email.com');
//ADD GITHUB
    expect(engineer.gitHub).toEqual('mary32');

});

//getName() mehtod

describe('it should get the name  from getName() ' , () => {
    expect(engineer.getName).toEqual('Mary');
});

// getId() mehtod

describe('it should get the id  from getId() ' , () => {
    expect(engineer.getId).toEqual('963258');
});


//getEmail()
describe('it should get the email  from getEmail() ' , () => {
    expect(engineer.getEmail).toEqual('mary@email.com');
});


//getRole method()
describe('it should get the role  from getRole() ' , () => {
    expect(engineer.getRole).toEqual("engineer");
});

//getGitHub()
describe('it should get the github from getGitHub() ' , () => {
    expect(engineer.getGitHub).toEqual('mary32');
});



