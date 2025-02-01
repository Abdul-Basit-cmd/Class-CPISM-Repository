// Array of student details
let std_details = [
    ['Abdul Basit', 'HDSE', '3 to 5', 8650],
    ['Yusha Mirza', 'HDSE', '3 to 5', 8650],
    ['Musab Bin Umair', 'HDSE', '3 to 5', 8650],
    ['Mansoor Khan', 'HDSE', '3 to 5', 8650],
    ['Haider Sultan', 'HDSE', '3 to 5', 8650],
    ['Asad Aziz', 'HDSE', '3 to 5', 8650],
    ['Abdul Haq', 'HDSE', '3 to 5', 8650],
    ['zohaib', 'HDSE', '3 to 5', 8650],
    ['Ali', 'HDSE', '3 to 5', 8650],
    ['Owais', 'HDSE', '3 to 5', 8650],
    ['Afifa Zia', 'HDSE', '3 to 5', 8650],
    ['Yumna', 'HDSE', '3 to 5', 8650],
    ['Amal Amir', 'HDSE', '3 to 5', 8650],
    ['Zainab', 'HDSE', '3 to 5', 8650],
    ['Hala', 'HDSE', '3 to 5', 8650],
    ['Rija Babar', 'HDSE', '3 to 5', 8650]
];

let tableHTML = "<table>";
tableHTML += "<tr><th>Name</th><th>Course</th><th>Duration</th><th>Fees</th></tr>";

for (let i = 0; i < std_details.length; i++) {
   
    if (i % 2 === 0) {
        tableHTML += "<tr style='background-color: #f2f2f2'>";
    } else {  
        tableHTML += "<tr style='background-color: #d9d9d9'>";
    }

    tableHTML += `<td>${std_details[i][0]}</td>`;  
    tableHTML += `<td>${std_details[i][1]}</td>`;  
    tableHTML += `<td>${std_details[i][2]}</td>`;  
    tableHTML += `<td>${std_details[i][3]}</td>`;  

    tableHTML += "</tr>";
}

tableHTML += "</table>";

document.getElementById("table-container").innerHTML = tableHTML;
