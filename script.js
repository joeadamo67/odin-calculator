let number1, number2, operand;

const inputs = document.querySelector(".inputsContainer");
const display = document.querySelector(".display");


const operate = () => {
  let temp;
  number1 = parseFloat(number1);
  number2 = parseFloat(number2);
  switch (operand) {
    case "+":
      return parseFloat(add(number1, number2).toFixed(2));
    case "-":
      return parseFloat(subtract(number1, number2).toFixed(2));
    case "*":
      return parseFloat(multiply(number1, number2).toFixed(2));
    case "/":
      if (number2 === 0) {
        return "ERROR: Divide by 0";
      }
      return parseFloat(divide(number1, number2).toFixed(2));
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
        output = event.target.textContent;
    } else {
        if (event.keyCode >47 && event.keyCode < 58 || event.key === "."){
            output=event.key;
            type = "numberInputs";
        } else if (event.key === "+" || event.key === "-" || event.key === "*" ||event.key === "/"){
            output=event.key;
            type = "operaterInputs";
        } else if (event.key === "=" || event.key === "Backspace" || event.key === "Enter" || event.key === "c"){
            output=event.key;
            type = "displayInputs";
        }
    }


    switch (type) {
      case "numberInputs":
      numberInput(output);
      break;
      case "operaterInputs":
        operatorInput(output);
        break;
      case "displayInputs":
        displayInput(output);
        break;
      default:
        break;
}};


const numberInput = (output)=>{
  if (display.textContent === "0" || isNaN(parseFloat(display.textContent))) {
    if (output === ".") {
      display.textContent += output;
    } else {
      display.textContent = output;
    }
  } else if (display.textContent.includes(".")) {
    if (output === ".") {
      return "Error: Cant add two decimals"
    } else if (display.textContent.length - display.textContent.indexOf(".") === 2) {
      return "Error: Cant add two decimals"
    } else {
        display.textContent += output;
    }
  } else {
    display.textContent += output;
  }
}


  const operatorInput = (output)=>{
    if (number1 === undefined) {
      number1 = parseFloat(display.textContent);
      operand = output;
      display.textContent = operand;
    } else if (!isNaN(display.textContent) && number2===undefined) {
      number2 = parseFloat(display.textContent);
      number1 = operate();
      if (isNaN(number1)){
        display.textContent = "ERROR: Divide by 0"
      }
      operand = output;
      display.textContent = operand;
    } else {
      number1 = parseFloat(display.textContent);
      number2 = undefined;
      operand = output;
      display.textContent = operand;
    }
  }



    const displayInput = (output)=>{
      if (output === "Clr" || output === "c") {
        number1 = number2 = operand = undefined;
        display.textContent = 0;
      } else if (output === "Del" || output === "Backspace") {
        
        display.textContent = display.textContent.slice(
          0,
          display.textContent.length - 1
        );
        if (display.textContent === ""){
            display.textContent = "0";
        }
      } else if (output === "=" || output === "Enter") {
        number2 = parseFloat(display.textContent);
        display.textContent = operate();
        number1 = display.textContent;
        
      }
    }
