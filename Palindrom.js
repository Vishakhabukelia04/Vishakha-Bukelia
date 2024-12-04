const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultElement = document.getElementById("result");

console.log(checkBtn);
console.log(textInput);
console.log(resultElement);

function checkBtnFunction(input) {
try{
  const userInput = input;

  if (input === '') {
    alert("Please input a value");
  }

  const updatedUserInput = input.replace(/[^A-Za-z0-9]/ig, '')
  console.log(updatedUserInput);

  const lowerUpdatedUserInput = updatedUserInput.toLowerCase();
  console.log(lowerUpdatedUserInput);

  const palindrome = [...lowerUpdatedUserInput].reverse().join("");
  console.log(palindrome);

  const result = `${userInput} ${lowerUpdatedUserInput === palindrome ? "is" : "is not"} a palindrome`
  console.log(result);

  resultElement.innerText = result;

  resultElement.classList.remove("hidden");
} catch(err){
  console.log(err)
}
}
  
try{
checkBtn.addEventListener("click", () => {
  checkBtnFunction(textInput.value);
  textInput.value = '';
});
} catch(err){
  console.log(err)
}

try{
checkBtn.addEventListener("keydown", key => {
  if(key.key === 'Enter'){
    checkBtnFunction(textInput.value);
    textInput.value = '';
  }
})
} catch(err){
  console.log(err)
}

debugger;