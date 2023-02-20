const dropDown = document.querySelector(".menu")
const toggleIcon = document.querySelector(".toggle-icon")

let isOpen = false

function handleNav() {
    dropDown.classList.toggle("hidden")
    isOpen = !isOpen
    toggleIcon.src = isOpen ?  "/images/cancel.png" : "/images/menu.png" 
}