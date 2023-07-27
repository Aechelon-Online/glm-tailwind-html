const dropDown = document.querySelector(".menu")
const toggleIcon = document.querySelector(".toggle-icon")
const eventSelect = document.querySelector(".event-select")
const eventArrow = document.querySelector(".event-arrow")
const serviceSelect = document.querySelector(".service-select")
const selectArrow = document.querySelector(".select-arrow")
const radios = document.querySelector(".event-select")
const list = document.querySelector(".list")
const dots = document.querySelector(".selections")
const checkboxes = document.querySelector(".entertainment-checkboxes")
const arrowEvent = document.querySelector(".arrow-click")

let isOpen = false

function handleNav() {
    dropDown.classList.toggle("hidden")
    isOpen = !isOpen
    toggleIcon.src = isOpen ?  "/images/cancel.png" : "/images/menu.png" 
}

let isDropped = true

radios.addEventListener('click', () => {
  dots.classList.toggle("hidden")
  isDropped = !isDropped
  eventArrow.innerText = isDropped ? "▼" : "✕"
  if(eventSelect.innerText === "✕"){
      eventSelect.style.margin = "-2px 1px"
  } else {
      eventSelect.style.margin = "0"
  }
})

checkboxes.addEventListener('click', () => {
    list.classList.toggle("hidden")
    console.log("clicked")
    isDropped = !isDropped
    selectArrow.innerText = isDropped ? "▼" : "✕"
    if(serviceSelect.innerText === "✕"){
        serviceSelect.style.margin = "-2px 1px"
    } else {
        serviceSelect.style.margin = "0"
    }
})



arrowEvent.addEventListener('click', () => {
  dots.classList.toggle("hidden")
  isDropped = !isDropped
  eventArrow.innerText = isDropped ? "▼" : "✕"
  if(eventSelect.innerText === "✕"){
      eventSelect.style.margin = "-2px 1px"
  } else {
      eventSelect.style.margin = "0"
  }
})