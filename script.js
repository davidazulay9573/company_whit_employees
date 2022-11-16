import Company from "./company.js";
import Employee from "./employee.js";
import DailyReport from "./dailyreport.js";

let company1 = new Company('BIG');
let employee1 = new Employee('david');
let employee2 = new Employee("mesi");

let dailyreport1 = new DailyReport('28.04.2022',10,500);
let dailyreport2 = new DailyReport("28.04.2022", 10, 500);
let dailyreport3 = new DailyReport('23.09.2020',10,500);

employee1.addTOarray(dailyreport1);
employee1.addTOarray(dailyreport2);
employee2.addTOarray(dailyreport2);
employee1.addTOarray(dailyreport3);
employee1.calculateSalaries();
employee1.calculateWorkTime();
employee2.calculateSalaries();
employee2.calculateWorkTime();


company1.addTOarray(employee1);
company1.addTOarray(employee2);
company1.calculateWorkTime();
company1.calculateSalaries();
company1.printReport();
company1.calculateHwomushToHour()
console.log(company1)


