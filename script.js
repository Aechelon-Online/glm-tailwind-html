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

checkboxes.addEventListener('click', () => {
    list.classList.toggle("hidden")
    isDropped = !isDropped
    selectArrow.innerText = isDropped ? "▼" : "✕"
    if(serviceSelect.innerText === "✕"){
        serviceSelect.style.margin = "-2px 1px"
    } else {
        serviceSelect.style.margin = "0"
    }
})

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

// Calendar API JS

async function getData () {
    const now = moment().toISOString()
    let url = new URL("https://www.googleapis.com/calendar/v3/calendars/greglucemusic@gmail.com/events")
    url.search = new URLSearchParams({
    'key': 'AIzaSyAHgEiHBOLjLHixU-ptMhF_3hdimwT55ro',
    'singleEvents': true,
    'timeMin': now,
    'maxResults': 10,
    'orderBy' : 'starttime'
    })
    
    let apiCall = await fetch(url)
    
    const data = await apiCall.json()
    console.log(data)

    
  for (let i = 0; i < data['items'].length; i++) {
    
    const summary = data["items"][i]['summary']
    const location = data['items'][i]['location']
    const locationParts = location.split(",")
    

    let city = locationParts[2]
    let stateAndZip = locationParts[3]
    let stateSplit = stateAndZip.split(" ")
    let state = stateSplit[1]
    
   

    const dateTime = data['items'][i]['start']['dateTime']
    const realDate = moment(dateTime).format('ll')
    const realTime = moment(dateTime).format('LT')
    const dateSplit = realDate.split(",",1).toString()
    const monthDateSplit = dateSplit.split(" ")
    const month = monthDateSplit[0]
    const date = monthDateSplit[1]
    

    if (summary === 'Tommy Bahamas' || summary.includes("Hartt")) {
    city = locationParts[3]
    stateAndZip = locationParts[4]
    stateSplit = stateAndZip.split(" ")
    state = stateSplit[1]
    }

    if (summary.includes("Private")) {
      city = locationParts[1]
      stateAndZip = locationParts[2]
      stateSplit = stateAndZip.split(" ")
      state = stateSplit[1]
    } 

   
    document.querySelector(".calendar-api").innerHTML += 
    `
    <div class="date-wrapper flex justify-center items-center">
      <div class="big-date text-center">
        <p class="year font-bold">${month}</p>
        <p class="day font-bold">${date}</p>
      </div>
      <div class="date-loc">
        <p class="location font-bold"><a class="google-map" target="_blank" href="https://www.google.com/maps/search/?api=1&query=${location}">${summary}</a></p>
        <p class="location">${city + " " + state}</p>
        <p class="dateTime">${realTime}</p>
      </div>
    </div>
    `

  }
}
getData()