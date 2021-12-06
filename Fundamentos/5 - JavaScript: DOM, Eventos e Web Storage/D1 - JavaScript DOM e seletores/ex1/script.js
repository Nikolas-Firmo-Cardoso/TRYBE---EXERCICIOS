// seleciona o elemento
var header = document.querySelector("#header-container")
// adiciona o estilo
header.style.background = "#2FC18C"


// seleciona o elemento através de uma função e aplica o estilo nela mesma
document.querySelector(".emergency-tasks").style.background = "#ffad84"


// seleciona o elemento
var noEmergencyT = document.querySelector(".no-emergency-tasks")
// adiciona o estilo
noEmergencyT.style.background = "#ffdd57"


// seleciona o elemento
var emergencyTH31 = document.querySelectorAll(".emergency-tasks h3")[0]
var emergencyTH32 = document.querySelectorAll(".emergency-tasks h3")[1]
// adiciona o estilo
emergencyTH31.style.background = "purple"
emergencyTH32.style.background = "purple"


// seleciona o elemento
var noEmergencyTH31 = document.querySelectorAll(".no-emergency-tasks h3")[0]
var noEmergencyTH32 = document.querySelectorAll(".no-emergency-tasks h3")[1]
// adiciona o elemento
noEmergencyTH31.style.background = "black"
noEmergencyTH32.style.background = "black"