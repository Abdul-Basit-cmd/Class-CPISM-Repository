function userInfo() {
let color = document.querySelector("#color").value
let bgcolor = document.querySelector("#bgcolor").value
let uName = document.querySelector("#uname").value
let fName = document.querySelector("#fname").value
let age = document.querySelector("#age").value

let NameData = document.querySelector(".Name")
let FatherNameData = document.querySelector(".FName")
let AgeData = document.querySelector(".Age")

NameData.innerHTML=uName
FatherNameData.innerHTML=fName
AgeData.innerHTML=age

NameData.style.color=color
FatherNameData.style.color=color
AgeData.style.color=color


NameData.style.backgroundcolor=bgcolor
FatherNameData.style.backgroundcolor=bgcolor
AgeData.style.backgroundcolor=bgcolor
}