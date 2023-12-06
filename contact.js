const dropDown = document.querySelector(".menu")
const toggleIcon = document.querySelector(".toggle-icon")
const checkSelect = document.querySelector("#checkSelect")
const elements = document.querySelector("#picks")
const list = document.querySelector(".list")
const saveSelections = document.querySelector("#saveSelections")
        


let isOpen = false

function handleNav() {
    dropDown.classList.toggle("hidden")
    isOpen = !isOpen
    toggleIcon.src = isOpen ?  "/images/cancel.png" : "/images/menu.png" 
}

// New Contact From JS through EmailJS

let values = []
        checkSelect.addEventListener('click', () => {
           
          list.classList.remove("hidden")
            
        })

        saveSelections.addEventListener('click', () =>{
            const checkboxes = document.getElementsByName('selection')
            for(let i=0; i < checkboxes.length; i++){
                if(checkboxes[i].checked == true){
                    values.push(checkboxes[i].value)
                } else {
                    values = values.filter(id => id !== checkboxes[i].value)
                }
            }
            elements.innerText = (Array.from(new Set(values)).join(", "))
            list.classList.add("hidden")
            console.log(elements.innerText)
        })


        function sendEmail() {
            (function(){
                emailjs.init("LHeYpvIwHtASL6MtL")
            }
            )();

            var params = {
                name: document.querySelector("#name").value,
                phone: document.querySelector("#phone").value,
                email: document.querySelector("#email").value,
                date: document.querySelector("#date").value,
                event: document.querySelector("#event").value,
                location: document.querySelector("#location").value,
                selections: document.querySelector("#picks").innerText,
                eventFeel: document.querySelector("#eventFeel").value,
                searchType: document.querySelector("#searchType").value
            };

            var serviceID="service_irxad4n"
            var templateID="template_s5bx08r"

            emailjs.send(serviceID, templateID, params)
            .then( res => {
                alert("Thanks for your info! We will be in touch soon.")
            })
            .catch()
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