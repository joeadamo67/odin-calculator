
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
                return "Error: Divide by 0"
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
    let input = event.target.getAttribute('id'); 
    

  

    switch (event.target.getAttribute("class")) {
        case "numberInputs":
            if (display.innerHTML=="0" || isNaN(parseFloat(display.innerHTML))){
                if (input == "."){
                    display.innerHTML+=event.target.innerHTML;
                }else {

                    display.innerHTML = event.target.innerHTML;
                }
            } else if (input == "." && display.innerHTML.includes(".") || 
            display.innerHTML.length-display.innerHTML.indexOf(".") == 2){
                break;
            }else {
                display.innerHTML+=event.target.innerHTML;
            }
      break;
        case "operaterInputs":


            if (number1 == undefined){
                number1=parseFloat(display.innerHTML);
                operand=input;
                display.innerHTML = operand;

            } else if (!isNaN(display.innerHTML)) {
                number2 = parseFloat(display.innerHTML);
                number1 = operate();
                operand = input;
                display.innerHTML = operand;
              }
                
                
            
        break;
        case "displayInputs":

            if (input == "clear"){
                number1 = number2 = operand = undefined;
                display.innerHTML = 0;
            } else if (input == "equals"){
            
                number2=parseFloat(display.innerHTML);
                display.innerHTML=operate();

            }
        break;
        default:
      break;
    }

});
