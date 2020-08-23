// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, githubId) {
       super(name, id, email);

        this.github =  githubId;
       
        this.getGithub = () => {
            return this.github;
        },
        this.getRole = () => {
            return "Engineer";
        }
        
        
    }

}

module.exports = Engineer;





