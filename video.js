
const videos = [
    { link:'https://www.youtube.com/embed/E5Ah_hqbzIg?si=yMwqOfsVgzrRInTr', thumbnail: 'https://img.youtube.com/vi/E5Ah_hqbzIg/mqdefault.jpg', title: 'Greg Luce Music - Promo Video'},
    { link:'https://www.youtube.com/embed/C0FUuuClppY?si=NVKBVl7AUbxJ6bLd', thumbnail: 'https://img.youtube.com/vi/C0FUuuClppY/mqdefault.jpg', title: 'Greg Luce Music - Short Live Promo'},
    { link:'https://www.youtube.com/embed/-TO08B3AVlM?si=rX-9lSipKnY_xNat', thumbnail: 'https://img.youtube.com/vi/b7fEKZ8TE1E/mqdefault.jpg', title:'Private Party - Listen To The Music'},
    { link:'https://www.youtube.com/embed/qVtODE5EDXQ?si=fQ-KoaYPTgp2rdIa', thumbnail: 'https://img.youtube.com/vi/n60Pm7AsEB0/mqdefault.jpg', title:'Rocket Man - Prestonwood CC'},
    { link:'https://www.youtube.com/embed/AlJo1GmbsLc?si=AFBISxOvfHYzUB4P', thumbnail: 'https://img.youtube.com/vi/AlJo1GmbsLc/mqdefault.jpg', title:'Fancy Like - Wedding Groove'},
    { link:'https://www.youtube.com/embed/aifT0B_-YmE?si=YVykoV_YxLoqK3wj', thumbnail: 'https://img.youtube.com/vi/aifT0B_-YmE/mqdefault.jpg', title:'Country Roads - Greg Luce Music'},
    { link:'https://www.youtube.com/embed/JK4-KuTJF1A?si=Bk2pPtbzCnfnlNKg', thumbnail: 'https://img.youtube.com/vi/JK4-KuTJF1A/mqdefault.jpg', title:'Dock Of The Bay - Greg Luce Music'},
    { link:'https://www.youtube.com/embed/U6ok9nhBydM?si=-LuAtMGGwfezmyhn', thumbnail: 'https://img.youtube.com/vi/U6ok9nhBydM/mqdefault.jpg', title:'Every Breath You Take - Greg Luce Music'},
    { link:'https://www.youtube.com/embed/7Bfv9C15WCo?si=X5nxd439FsXWauZt', thumbnail: 'https://img.youtube.com/vi/7Bfv9C15WCo/mqdefault.jpg', title:'Free Fallin - Greg Luce Music'},
    { link:'https://www.youtube.com/embed/FTaKbhlXLkc?si=I7wF8Xy0Q7z7nPD9', thumbnail: 'https://img.youtube.com/vi/FTaKbhlXLkc/mqdefault.jpg', title:'Superstition - Greg Luce Music'},
    { link:'https://www.youtube.com/embed/rffcNo1dDpc?si=D7iW20uj1LOusNio', thumbnail: 'https://img.youtube.com/vi/rffcNo1dDpc/mqdefault.jpg', title:'Take It Easy - Greg Luce Music'},
    { link:'https://www.youtube.com/embed/gGYr5zs7sJM?si=oV_jjDRHVVIYMlJQ', thumbnail: 'https://img.youtube.com/vi/gGYr5zs7sJM/mqdefault.jpg', title:'Time Of Your Life - Greg Luce Music'},
    { link:'https://www.youtube.com/embed/PCARdM_Ds9E?si=FJk-QZwsjdGRSpET', thumbnail: 'https://img.youtube.com/vi/PCARdM_Ds9E/mqdefault.jpg', title:'Why Georgia - Greg Luce Music'}
]

let videoPlayer = ""

videos.forEach(function(item) {

videoPlayer += `
    <div class="video-player">
            <div class="w-[250px] p-2 mx-2 tablet:w-[350px] flex justify-center items-center bg-no-repeat bg-center" style="background-image: url(${item.thumbnail})">
                <a href="${item.link}">
                    <img src="/images/yt-logo-tp.webp" alt="youtube logo" class="w-[150px]"></img>
                </a>  
            </div>  
            <h4 class="text-md p-2 text-white text-center">${item.title}</h4>
    </div>
    `
})

document.querySelector('.video-wrapper').innerHTML = videoPlayer


               