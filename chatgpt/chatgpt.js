const form = document.getElementById("employeeForm");
const nameInput = document.getElementById("name");
const professionInput = document.getElementById("profession");
const ageInput = document.getElementById("age");
const errorMessage = document.getElementById("error");
const successMessage = document.getElementById("success");
const employeeList = document.getElementById("employeeList");
const employeeCount = document.getElementById("employeeCount");

let employees = [];
let employeeId = 1;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const profession = professionInput.value.trim();
  const age = ageInput.value.trim();

  // Error handling
  if (name === "" || profession === "" || age === "") {
    errorMessage.style.display = "block";
    successMessage.style.display = "none";
    return;
  }

  // Add employee to array
  const employee = {
    id: employeeId++,
    name: name,
    profession: profession,
    age: age,
  };
  employees.push(employee);

  // Clear inputs
  nameInput.value = "";
  professionInput.value = "";
  ageInput.value = "";

  // Hide error, show success
  errorMessage.style.display = "none";
  successMessage.style.display = "block";

  // Update the employee list and count
  displayEmployees();
});

function displayEmployees() {
  employeeList.innerHTML = ""; // Clear the current list

  employees.forEach((employee) => {
    const employeeDiv = document.createElement("div");
    employeeDiv.classList.add("employee");
    employeeDiv.innerHTML = `
            <p>ID: ${employee.id} | Name: ${employee.name} | Profession: ${employee.profession} | Age: ${employee.age} 
                <button onclick="deleteEmployee(${employee.id})">Delete</button>
            </p>
        `;
    employeeList.appendChild(employeeDiv);
  });

  employeeCount.textContent = employees.length;
}

function deleteEmployee(id) {
  employees = employees.filter((employee) => employee.id !== id);
  displayEmployees();
}
