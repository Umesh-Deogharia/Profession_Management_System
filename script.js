const content = document.getElementsByClassName("content")[0];
const names = document.getElementById("forname");
const Profession = document.getElementById("Profession");
const Age = document.getElementById("Age");
const form = document.querySelector("form");
const errorMessage = document.querySelector("#Error");
const successMessage = document.querySelector("#Success");
const employeeList = document.querySelector("#employeelist");
const employeeCount = document.querySelector("#employeeCount");

let employees = [];
let currentid = 1;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameValue = names.value.trim();
  const professionValue = Profession.value.trim();
  const ageValue = Age.value.trim();

  // Error Handling for empty input
  if (nameValue === "" || professionValue === "" || ageValue === "") {
    successMessage.style.display = "none";
    errorMessage.style.display = "block";
    return;
  }

  //Creating employee list to array
  let employee = {
    Id: currentid++,
    Name: nameValue,
    Profession: professionValue,
    Age: ageValue,
  };
  employees.push(employee);

  // Clear the input

  names.value = "";
  Profession.value = "";
  Age.value = "";

  successMessage.style.display = "block";
  errorMessage.style.display = "none";

  displayEmployees();
});

function displayEmployees() {
  employeeList.innerHTML = "";

  employees.forEach((emp) => {
    const DivBtnMainBlock = document.createElement("div");
    const Button = document.createElement("button");
    Button.addEventListener("click", (e) => deleteEmployees(e, emp.Id));
    Button.innerText = "Delete";
    Button.style.cssText =
      "border-radius:20px; margin-bottom:18px; height:40px; width: 100px;";
    const employeeDiv = document.createElement("div");
    employeeDiv.style.cssText =
      "border:1px solid white; border-radius: 20px; display:flex; justify-content:space-evenly; width:20%; height:50px;align-items:center";
    employeeDiv.setAttribute("class", "employeediv");
    employeeDiv.innerHTML = `<p>${emp.Id}.</p> 
                            <p> ${emp.Name}</p> 
                            <p> ${emp.Profession}</p> 
                            <p> ${emp.Age} </p>`;
    DivBtnMainBlock.style.width = "20%";
    DivBtnMainBlock.appendChild(Button);
    const newDiv = document.createElement("div");
    newDiv.style.display = "flex";
    newDiv.style.alignItems = "center";
    newDiv.style.gap = "10px";
    newDiv.appendChild(employeeDiv);
    newDiv.appendChild(DivBtnMainBlock);
    employeeList.appendChild(newDiv);
    employeeList.style.cssText =
      "display:flex; flex-direction:column; gap: 10px";
  });
  employeeCount.textContent = employees.length;
}

function deleteEmployees(e, id) {
  employees = employees.filter((emp) => emp.Id !== id);
  currentid--;
  displayEmployees();
}
