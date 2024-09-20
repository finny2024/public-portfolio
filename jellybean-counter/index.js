let counterEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
console.log(count)

function incrementfxn() {
    count += 1
    counterEl.textContent = count
    console.log(count)
}

function savefxn() {
    let saveCount = count + " - ";
    saveEl.textContent += saveCount
    counterEl.textContent = 0
    count = 0
}





