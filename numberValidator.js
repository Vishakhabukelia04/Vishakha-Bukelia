const userInput = document.getElementById("user-input");
const resultElement = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

console.log(userInput);
console.log(resultElement);
console.log(checkBtn);
console.log(clearBtn);

function checkNumber(input){
  if(input === ""){
    alert("Please provide a phone number");
    return
  };

  const countryCode = `^(1\\s?)?`;
  const areaCode = `(\\([0-9]{3}\\)|([0-9]{3}))`;
  const spaceOrDash = `[\\s\\-]?`;
  const phoneNumber = `[0-9]{3}[\\s\\-]?[0-9]{4}$`;
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spaceOrDash}${phoneNumber}`
  );

  console.log(phoneRegex);

  const pElement = document.createElement("p");
  pElement.className = "result-text";
  phoneRegex.test(input) ? (pElement.style.color = '#00471b') : (pElement.style.color = '#4d3800');
  pElement.textContent = `
  ${phoneRegex.test(input) ? "Valid" : "Invalid"} US Number: ${input}`;

  resultElement.append(pElement);

}

checkBtn.addEventListener("click", () => {
  checkNumber(userInput.value);
  userInput.value = ""
})

clearBtn.addEventListener("click", () => {
  resultElement.textContent = ""
})