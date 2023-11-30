const dropDown = document.querySelector(".menu")
const toggleIcon = document.querySelector(".toggle-icon")
const eventSelect = document.querySelector(".event-select")
const eventArrow = document.querySelector(".event-arrow")
const serviceSelect = document.querySelector(".service-select")
const selectArrow = document.querySelector(".select-arrow")
const list = document.querySelector(".list")
const dots = document.querySelector(".selections")
const checkboxes = document.querySelector(".entertainment-checkboxes")

let isOpen = false

function handleNav() {
    dropDown.classList.toggle("hidden")
    isOpen = !isOpen
    toggleIcon.src = isOpen ?  "/images/cancel.png" : "/images/menu.png" 
}

// let isDropped = true

// radios.addEventListener('click', () => {
//   dots.classList.toggle("hidden")
//   isDropped = !isDropped
//   eventArrow.innerText = isDropped ? "▼" : "click here to save"
//   if(eventSelect.innerText === "click here to save"){
//       eventSelect.style.margin = "-2px 1px"
//   } else {
//       eventSelect.style.margin = "0"
//   }
// })

checkboxes.addEventListener('click', () => {
    list.classList.toggle("hidden")
})



