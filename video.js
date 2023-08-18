
const videos = [
    { link:'https://youtu.be/E5Ah_hqbzIg', thumbnail: 'https://img.youtube.com/vi/E5Ah_hqbzIg/mqdefault.jpg', title: 'Greg Luce Music - Promo Video'},
    { link:'https://youtu.be/C0FUuuClppY', thumbnail: 'https://img.youtube.com/vi/C0FUuuClppY/mqdefault.jpg', title: 'Greg Luce Music - Short Live Promo'},
    { link:'https://youtu.be/-TO08B3AVlM', thumbnail: 'https://img.youtube.com/vi/b7fEKZ8TE1E/mqdefault.jpg', title:'Private Party - Listen To The Music'},
    { link:'https://youtu.be/qVtODE5EDXQ', thumbnail: 'https://img.youtube.com/vi/n60Pm7AsEB0/mqdefault.jpg', title:'Rocket Man - Prestonwood CC'},
    { link:'https://youtu.be/AlJo1GmbsLc', thumbnail: 'https://img.youtube.com/vi/AlJo1GmbsLc/mqdefault.jpg', title:'Fancy Like - Wedding Groove'},
    { link:'https://youtu.be/aifT0B_-YmE', thumbnail: 'https://img.youtube.com/vi/aifT0B_-YmE/mqdefault.jpg', title:'Country Roads - Greg Luce Music'},
    { link:'https://youtu.be/JK4-KuTJF1A', thumbnail: 'https://img.youtube.com/vi/JK4-KuTJF1A/mqdefault.jpg', title:'Dock Of The Bay - Greg Luce Music'},
    { link:'https://youtu.be/U6ok9nhBydM', thumbnail: 'https://img.youtube.com/vi/U6ok9nhBydM/mqdefault.jpg', title:'Every Breath You Take - Greg Luce Music'},
    { link:'https://youtu.be/7Bfv9C15WCo', thumbnail: 'https://img.youtube.com/vi/7Bfv9C15WCo/mqdefault.jpg', title:'Free Fallin - Greg Luce Music'},
    { link:'https://youtu.be/FTaKbhlXLkc', thumbnail: 'https://img.youtube.com/vi/FTaKbhlXLkc/mqdefault.jpg', title:'Superstition - Greg Luce Music'},
    { link:'https://youtu.be/rffcNo1dDpc', thumbnail: 'https://img.youtube.com/vi/rffcNo1dDpc/mqdefault.jpg', title:'Take It Easy - Greg Luce Music'},
    { link:'https://youtu.be/gGYr5zs7sJM', thumbnail: 'https://img.youtube.com/vi/gGYr5zs7sJM/mqdefault.jpg', title:'Time Of Your Life - Greg Luce Music'},
    { link:'https://youtu.be/PCARdM_Ds9E', thumbnail: 'https://img.youtube.com/vi/PCARdM_Ds9E/mqdefault.jpg', title:'Why Georgia - Greg Luce Music'}
]

let videoPlayer = ""

videos.forEach(function(item) {

videoPlayer += `
    <div class="video-player">
            <div class="w-[250px] p-2 mx-2 tablet:w-[350px] flex justify-center items-center bg-no-repeat bg-center" style="background-image: url(${item.thumbnail})">
                <a href="${item.link}">
                    <img src="../images/yt-logo-tp.webp" class="w-[150px]"></img>
                </a>  
            </div>  
            <h4 class="text-md p-2 text-white text-center">${item.title}</h4>
    </div>
    `
})

document.querySelector('.video-wrapper').innerHTML = videoPlayer


               