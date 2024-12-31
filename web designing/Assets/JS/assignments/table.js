// Ask the user for the number and the range
let number = prompt("Enter the number you want the multiplication of:");
let length = prompt("Enter how many times you want to multiply:");

// Convert the input to numbers
number = parseInt(number);
length = parseInt(length);

// Start creating the table HTML
let tableHTML = "<table border='1'>"; // Simple table with borders
tableHTML += "<tr><th>Number</th><th>Operator</th><th>Multiplier</th><th>Equals</th><th>Result</th></tr>";

// Loop to create the rows for the table
for (let i = 1; i <= length; i++) {
    tableHTML += "<tr>";
    tableHTML += `<td>${number}</td>`; // Number column
    tableHTML += "<td>*</td>";         // Operator column
    tableHTML += `<td>${i}</td>`;      // Multiplier column
    tableHTML += "<td>=</td>";         // Equals column
    tableHTML += `<td>${number * i}</td>`; // Result column
    tableHTML += "</tr>";
}

// Close the table
tableHTML += "</table>";

// Show the table inside the page
document.getElementById("table-container").innerHTML = tableHTML;
