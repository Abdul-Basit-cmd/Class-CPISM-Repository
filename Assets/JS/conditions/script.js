
let Name = prompt("Enter your name:");
let fatherName = prompt("Enter your father's name:");
let age = prompt("Enter your age:");
let qualification = prompt("Enter your qualification:");

document.write("Name:" + Name + "<br>")
document.write("Father Name:" + fatherName + "<br>")
if (age >= 0 <= 18 ) {
    alert("you are under age")
}else{
    document.write("Age:" + age + "<br>")
}

document.write("Qualification:" + qualification + "<br>")

