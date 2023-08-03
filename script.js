const operate = () => {
  let temp;
  number1 = parseFloat(number1);
  number2 = parseFloat(number2);
  switch (operand) {
    case "+":
      return parseFloat(add(number1, number2).toFixed(2));
      break;
    case "-":
      return parseFloat(subtract(number1, number2).toFixed(2));
      break;
    case "*":
      return parseFloat(multiply(number1, number2).toFixed(2));
      break;
    case "/":
      if (number2 == 0) {
        return "ERROR: Divide by 0";
      }
      return parseFloat(divide(number1, number2).toFixed(2));
      break;
    default:
      break;
  }
};

const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

let number1, number2, operand;

const inputs = document.querySelector(".inputs");
const display = document.querySelector(".display");

inputs.addEventListener("click", (event) => {
    userInput(event);
  }
);

window.addEventListener('keydown', (event) => {

    userInput(event);


});


const userInput = (event)=>{
    let type, output;
    if (!event.key) {
        type = event.target.getAttribute("class");
        output = event.target.innerHTML;
    } else {
        if (event.keyCode >47 && event.keyCode < 58 || event.key == "."){
            output=event.key;
            type = "numberInputs";
        } else if (event.key == "+" || event.key == "-" || event.key == "*" ||event.key == "/"){
            output=event.key;
            type = "operaterInputs";
        } else if (event.key == "=" || event.key == "Backspace" || event.key == "Enter" || event.key == "c"){
            output=event.key;
            type = "displayInputs";
        }
    }


    switch (type) {
      case "numberInputs":
        if (display.innerHTML === "0" || isNaN(parseFloat(display.innerHTML))) {
          if (output == ".") {
            display.innerHTML += output;
          } else {
            display.innerHTML = output;
          }
        } else if (display.innerHTML.includes(".")) {
          if (output == ".") {
            break;
          } else if (display.innerHTML.length - display.innerHTML.indexOf(".") == 2) {
            break;
          } else {
              display.innerHTML += output;
          }
        } else {
          display.innerHTML += output;
        }
        break;
      case "operaterInputs":
        if (number1 == undefined) {
          number1 = parseFloat(display.innerHTML);
          operand = output;
          display.innerHTML = operand;
        } else if (!isNaN(display.innerHTML) && number2==undefined) {
          number2 = parseFloat(display.innerHTML);
          number1 = operate();
          if (isNaN(number1)){
            display.innerHTML = "ERROR: Divide by 0"
          }
          operand = output;
          display.innerHTML = operand;
        } else {
          number1 = parseFloat(display.innerHTML);
          number2 = undefined;
          operand = output;
          display.innerHTML = operand;
        }
  
        break;
      case "displayInputs":
        if (output == "Clr" || output == "c") {
          number1 = number2 = operand = undefined;
          display.innerHTML = 0;
        } else if (output == "Del" || output == "Backspace") {
          
          display.innerHTML = display.innerHTML.slice(
            0,
            display.innerHTML.length - 1
          );
          if (display.innerHTML == ""){
              display.innerHTML = "0";
          }
        } else if (output == "=" || output == "Enter") {
          number2 = parseFloat(display.innerHTML);
          display.innerHTML = operate();
          number1 = display.innerHTML;
          
        }
        break;
      default:
        break;
}};