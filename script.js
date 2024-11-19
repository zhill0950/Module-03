// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.getElementById("add-employees-btn");

const employeesArray = [];
// Collect employee data
function collectEmployees() {
  // TODO: Get user input to create and return an array of employee objects
  while (true) {
    const firstName = prompt("Enter employees first name");
    if (firstName === null || firstName === "") {
      break;
    }

    const lastName = prompt("Enter employees last name");
    if (lastName === null || lastName === "") {
      alert("Last name required");
      continue;
    }

    const salaryInput = prompt("Enter employees salary");
    if (salaryInput === null) {
      break;
    }

    const salary = parseFloat(salaryInput);
    if (isNaN(salary) || salary <= 0) {
      alert("Please enter a valid number");
      continue;
    }

    employeesArray.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    });

    const addEmployees = confirm("Would you like to add another employee?");
    if (!addEmployees) {
      break;
    }
  }
  displayEmployees(employeesArray);
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += parseFloat(employeesArray[i].salary);
  }
  const averageSalary = totalSalary / employeesArray.length;
  alert(`The average salary is ${averageSalary.toFixed(2)}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  alert(
    `Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`
  );

  return randomEmployee;
};

addEmployeesBtn.addEventListener("click", collectEmployees);

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
