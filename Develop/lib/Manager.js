// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Manager extends Employee {
      constructor (name, id, email, officeNumber) {
           super(name, id, email);

           this.officeNumber = officeNumber

            this.getOfficeNumber = () => {
                return this.officeNumber;
            }
           
            this.getRole = () => {
                return "Manager";
            }
            
            
        }
    
    }

module.exports = Manager;

// // TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// const Employee = require("./Employee");
// class Intern extends Employee {
//       constructor (name, id, email) {
//            super();
//             this.name = name
//             this.id = id
//             this.email = email
//            this.school = "UCLA"
//             this.getName = () => {
//                 return this.name;
//               },
//               this.getId = () => {
//                 return this.id;
//               },
//             this.getEmail = () => {
//                 return this.email;
//             },
//             this.getSchool = () => {
//                 return this.school
//             }
           
//             this.getRole = () => {
//                 return "Intern";
//             }
            
            
//         }
    
//     }

// module.exports = Intern;


// // TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// const Employee = require("./Employee");

// class Engineer extends Employee {
//     constructor (name, id, email) {
//        super();
//         this.name = name
//         this.id = id
//         this.email = email
//         this.github =  "GitHubUser"
       
//         this.getName = () => {
//             return this.name;
//           },
//           this.getId = () => {
//             return this.id;
//           },
//         this.getEmail = () => {
//             return this.email;
//         },
//         this.getGithub = () => {
//             return this.github;
//         },
//         this.getRole = () => {
//             return "Engineer";
//         }
        
        
//     }

// }

// module.exports = Engineer;


// // TODO: Write code to define and export the Employee class
// class Employee {
//     constructor (name, id, email) {
//         this.name = name
//         this.id = id
//         this.email = email
//         this.getName = () => {
//             return this.name;
//           },
//           this.getId = () => {
//             return this.id;
//           },
//         this.getEmail = () => {
//             return this.email;
//         };
//         this.getRole = () => {
//             return "Employee";
//         }
//     }

// }

// module.exports = Employee;