const employeesJSON = require("./employees.json");
const managersJSON = require("./managers.json");

class Employee {
  constructor(name, position, yearJoined, salary) {
    this.name = name;
    this.position = position;
    this.yearJoined = yearJoined;
    this.salary = salary;
  }

  idBadge = () => {
    return `${this.position} : ${this.name.split(" ")[0]} `;
  };
}

const employee1 = new Employee("Michael Brown", "Developer", 2016, 5500);
console.log(employee1.idBadge());

class Manager extends Employee {
  constructor(name, position, yearJoined, salary, bonusPercentage) {
    super(name, position, yearJoined, salary);
    this.bonusPercentage = bonusPercentage;
  }

  salaryIncrease = (increaseAmount) => {
    this.salary += increaseAmount;
  };

  getWorkingYears = () => {
    return 2023 - this.yearJoined;
  };
  logManagerInfo = () => {
    console.log(
      `${this.name} \nsince ${this.yearJoined} \nBonus % ${this.bonusPercentage}`
    );
  };
}
const manager1 = new Manager("Amy Wilson", "Senior Manager", 2012, 10000, 0.1);

manager1.logManagerInfo();
console.log(manager1.getWorkingYears()); // 11
console.log(manager1.salary); // 10000
manager1.salaryIncrease(20);
console.log(manager1.salary); // 10020

const employeesList = employeesJSON.map((employee) => {
  employee = new Employee(
    employee.name,
    employee.position,
    employee.yearJoined,
    employee.salary
  );
});

const managersList = managersJSON.map((manager) => {
  manager = new Manager(
    manager.name,
    manager.position,
    manager.yearJoined,
    manager.salary
  );
});
