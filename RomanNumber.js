const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputElement = document.getElementById("output");

console.log(numberInput);
console.log(convertBtn);
console.log(outputElement);

function convertToRoman(num) {
  const romanNumbers = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ]

  const userRomanNumbers = [];
  

  romanNumbers.forEach(arr => {
    while(num >= arr[1]){
      userRomanNumbers.push(arr[0]);
      num -= arr[1];
    }
  })

  console.log(userRomanNumbers.join(""));

  return userRomanNumbers.join('')
}

function isValid(str, num){
  let msg = '';

  if(!str){
    msg = "Please enter a valid number";
  } else if(num < 1){
    msg = "Please enter a number greater than or equal to 1";
  } else if(num >= 4000){
    msg = "Please enter a number less than or equal to 3999";
  } else{
    return true;
  }

  outputElement.textContent = msg;

  return false;
}

function update(){
  const str = numberInput.value;
  const num = parseInt(str);

  console.log(str);
  console.log(num);

  outputElement.classList.remove("hidden");

  if(isValid(str, num)){
    outputElement.textContent = convertToRoman(num);
  }
  
}

convertBtn.addEventListener("click", () => {
  update()
});
