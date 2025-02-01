// Get user input
let endNumber = parseInt(prompt("Enter the number to end the Fibonacci series:"));

let first = 0, second = 1; 

console.log("Fibonacci Series:");

while (first <= endNumber) {
  console.log(first); 
  let next = first + second; 
  first = second; 
  second = next;
}
