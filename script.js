const dropDown = document.querySelector(".menu")
const cards = document.querySelectorAll(".fadeIn")

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    setTimeout(() => {
      entry.target.classList.toggle("show", entry.isIntersecting)
    }, i * 250)
  })
}, {
  threshold: 0.5,
})

cards.forEach(card => {
  observer.observe(card)
})


let isOpen = false

function handleNav() {
    dropDown.classList.toggle("hidden")
    isOpen = !isOpen
    toggleIcon.src = isOpen ?  "/images/cancel.png" : "/images/menu.png" 
}


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
    

    if (summary === 'Tommy Bahamas') {
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