let inputField = document.querySelector("input[type='text']");  
let answerField = document.querySelectorAll("input[type='text']")[1];  
let button = document.querySelector("button");  
let operationSelect = document.getElementById("operation");  


button.addEventListener("click", function() {
   
    let inputValue = inputField.value;

   
    let numbers = inputValue.split(" ");

   
    if (numbers.length !== 2) {
        alert("Please enter two numbers separated by a space.");
        return;  
    }

    
    let num1 = parseFloat(numbers[0]);
    let num2 = parseFloat(numbers[1]);

    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;  
    }

    
    let operation = operationSelect.value;

    
    let result;
    if (operation === "add") {
        result = add(num1, num2);
    } else if (operation === "subtract") {
        result = subtract(num1, num2);
    } else if (operation === "multiply") {
        result = multiply(num1, num2);
    } else if (operation === "divide") {
        result = divide(num1, num2);
    }

   
    answerField.value = result;
});


function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}

// Multiplication function
function multiply(a, b) {
    return a * b;
}


function divide(a, b) {
    if (b === 0) {
        alert("Cannot divide by zero.");
        return "Error";  
    }
    return a / b;
}

