const dropDown = document.querySelector(".menu")
const toggleIcon = document.querySelector(".toggle-icon")
const eventSelect = document.querySelector(".event-select")
const eventArrow = document.querySelector(".event-arrow")
const serviceSelect = document.querySelector(".service-select")
const selectArrow = document.querySelector(".select-arrow")
const list = document.querySelector(".list")
const checkboxDropDown = document.querySelector(".checkboxes")

let isOpen = false

function handleNav() {
    dropDown.classList.toggle("hidden")
    isOpen = !isOpen
    toggleIcon.src = isOpen ?  "/images/cancel.png" : "/images/menu.png" 
}




