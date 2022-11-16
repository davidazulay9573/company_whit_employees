export default class Employee {
  constructor(name) {
    this.name = name;
    this.dataSet = [];
    this.totalWORKTIME = 0;
    this.totalSALARY = 0;
    this.totalTOhour = 0;
  }

  addTOarray(newdata) {
    this.dataSet.push(newdata);
  }
  calculateWorkTime() {
    this.dataSet.forEach((element) => {
      this.totalWORKTIME += element.workhours;
    });
  }

  calculateSalaries() {
    this.dataSet.forEach((element) => {
      this.totalSALARY += element.salary;
    });
  }

  calculateHwomushToHour() {
    this.totalTOhour = this.totalSALARY / this.totalWORKTIME;
  }

  printReport() {
    this.calculateSalaries();
    this.calculateWorkTime();
    this.calculateHwomushToHour();
    console.log(
      "salary:  " +
        this.totalSALARY +
        "    hours:" +
        this.totalWORKTIME +
        "   to hour:" +
        this.totalTOhour
    );
  }
}
