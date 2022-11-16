 import Employee from "./employee.js";

 export default class Company extends Employee {
   constructor(name) {
     super(name);
     
   }

   calculateWorkTime() {
     this.dataSet.forEach((element) => {
       this.totalWORKTIME += element.totalWORKTIME/2;
     });
   }

   calculateSalaries() {
     this.dataSet.forEach((element) => {
       this.totalSALARY += element.totalSALARY/2;
     });
   }

   
 }
