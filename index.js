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
console.log(employee1.name); // Michael Brown

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

const employees = employeesJSON.map((employee) => {
  return (employee = new Employee(
    employee.name,
    employee.position,
    employee.yearJoined,
    employee.salary
  ));
});

const managers = managersJSON.map((manager) => {
  return (manager = new Manager(
    manager.name,
    manager.position,
    manager.yearJoined,
    manager.salary,
    manager.bonusPercentage
  ));
});

employees.forEach((employee) => {
  console.log(employee.idBadge());
});

const superHeros = employees.filter((employee) => {
  return employee.position === "Developer";
});

console.log(superHeros);
managers.map((manager) => {
  if (manager.getWorkingYears() > 11) {
    return manager.salaryIncrease(1000);
  }
});
console.log(managers[4]);
managers.forEach((manager) => {
  manager.logManagerInfo();
});

const seniorExecutives = managers.filter(
  (manager) => manager.getWorkingYears() > 11
);

console.log(seniorExecutives);

const lowestBonus = managers.find((manager) => {
  return manager.bonusPercentage === 0.1;
});
console.log(lowestBonus);

const promotionCandidate = employees.find((employee) => {
  return employee.salary > 8000;
});
console.log(promotionCandidate);

const mostPaidEmployee = employees.find((employee) => {
  return (
    employee.salary ===
    Math.max(...employees.map((employee) => employee.salary))
  );
});
console.log(mostPaidEmployee);

const totalSalary = employees.reduce(
  (total, employee) => total + employee.salary,
  0
);
console.log(`Total employee salaries: ${totalSalary}$`);

const employeesSorted = employees.sort(
  (lower, higher) => lower.yearJoined - higher.yearJoined
);

console.log(employeesSorted); // starts with 2012 ends with 2020
