const dropDown=document.querySelector(".menu"),toggleIcon=document.querySelector(".toggle-icon"),eventSelect=document.querySelector(".event-select"),eventArrow=document.querySelector(".event-arrow"),serviceSelect=document.querySelector(".service-select"),selectArrow=document.querySelector(".select-arrow"),radios=document.querySelector(".event-select"),list=document.querySelector(".list"),dots=document.querySelector(".selections"),checkboxes=document.querySelector(".entertainment-checkboxes"),arrowEvent=document.querySelector(".arrow-click"),cards=document.querySelectorAll(".fadeIn"),observer=new IntersectionObserver((e=>{e.forEach(((e,t)=>{setTimeout((()=>{e.target.classList.toggle("show",e.isIntersecting)}),250*t)}))}),{threshold:.5});cards.forEach((e=>{observer.observe(e)}));let isOpen=!1;function handleNav(){dropDown.classList.toggle("hidden"),isOpen=!isOpen,toggleIcon.src=isOpen?"/images/cancel.png":"/images/menu.png"}async function getData(){const e=moment().toISOString();let t=new URL("https://www.googleapis.com/calendar/v3/calendars/greglucemusic@gmail.com/events");t.search=new URLSearchParams({key:"AIzaSyAHgEiHBOLjLHixU-ptMhF_3hdimwT55ro",singleEvents:!0,timeMin:e,maxResults:10,orderBy:"starttime"});let o=await fetch(t);const n=await o.json();for(let e=0;e<n.items.length;e++){const t=n.items[e].summary,o=n.items[e].location,s=o.split(",");let c=s[2],r=s[3],a=r.split(" "),l=a[1];const i=n.items[e].start.dateTime,m=moment(i).format("ll"),d=moment(i).format("LT"),u=m.split(",",1).toString().split(" "),g=u[0],p=u[1];"Tommy Bahamas"===t&&(c=s[3],r=s[4],a=r.split(" "),l=a[1]),t.includes("Private")&&(c=s[1],r=s[2],a=r.split(" "),l=a[1]),document.querySelector(".calendar-api").innerHTML+=`\n    <div class="date-wrapper flex justify-center items-center">\n      <div class="big-date text-center">\n        <p class="year font-bold">${g}</p>\n        <p class="day font-bold">${p}</p>\n      </div>\n      <div class="date-loc">\n        <p class="location font-bold"><a class="google-map" target="_blank" href="https://www.google.com/maps/search/?api=1&query=${o}">${t}</a></p>\n        <p class="location">${c+" "+l}</p>\n        <p class="dateTime">${d}</p>\n      </div>\n    </div>\n    `}}getData();