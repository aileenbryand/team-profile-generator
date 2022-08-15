

//manager class extending from parent class Employee
//Manager will have the propertied of : officeNumber and getRole()`&mdash;overridden to return `'Manager'`


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.name;
        this.id;
        this.email;
        this.officeNumber = officeNumber;
    }
    getName() {
        return this.name
     }
     
     getId(){
         return this.id;
     }

     getEmail() {
        return this.email
     }

    //getofficeNumber() methood

    getOfficeNumber() {
        return this.officeNumber;
    }

    //getRole() overridden to return `'Manager'`

    getRole() {
        return "Manager";
    }
};



module.exports = Manager;