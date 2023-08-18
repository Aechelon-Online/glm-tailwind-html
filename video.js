
const videos = [
    { link:'https://youtu.be/E5Ah_hqbzIg', thumbnail: 'https://img.youtube.com/vi/E5Ah_hqbzIg/mqdefault.jpg', title: 'Greg Luce Music - Promo Video'},
    { link:'https://youtu.be/C0FUuuClppY', thumbnail: 'https://img.youtube.com/vi/C0FUuuClppY/mqdefault.jpg', title: 'Greg Luce Music - Short Live Promo'},
    { link:'https://youtu.be/-TO08B3AVlM', thumbnail: 'https://img.youtube.com/vi/b7fEKZ8TE1E/mqdefault.jpg', title:'Private Party - Listen To The Music'},
    { link:'https://youtu.be/qVtODE5EDXQ', thumbnail: 'https://img.youtube.com/vi/n60Pm7AsEB0/mqdefault.jpg', title:'Rocket Man - Prestonwood CC'},
    { link:'https://youtu.be/AlJo1GmbsLc', thumbnail: 'https://img.youtube.com/vi/AlJo1GmbsLc/mqdefault.jpg', title:'Fancy Like - Wedding Groove'}
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


               