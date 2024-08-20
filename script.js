let saveEl = document.getElementById("save-el") 
let peopleCount = document.getElementById("people-count")
let resetbtn = document.getElementById("reset-btn")

let count = 0
function increment(){
    count+=1
    peopleCount.innerText=count //will show the incremeneted text on the scrren when the button is clicked. 
}

function save() {
    let saveDash = count + " - "
    saveEl.textContent += saveDash
    count = 0
    peopleCount.innerText=count
}

function restart() {
    let saveText = "Previous entries: "
    saveEl.textContent=saveText
}