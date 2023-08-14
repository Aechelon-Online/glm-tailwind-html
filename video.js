
const videos = {

    
    'https://www.youtube.com/embed/E5Ah_hqbzIg': 'Greg Luce Music - Promo Video',
    'https://www.youtube.com/embed/C0FUuuClppY': 'Greg Luce Music - Short Live Promo',
    'https://www.youtube.com/embed/b7fEKZ8TE1E': 'Private Party - Listen To The Music',
    'https://www.youtube.com/embed/n60Pm7AsEB0': 'Rocket Man - Prestonwood CC',
    'https://www.youtube.com/embed/AlJo1GmbsLc': 'Fancy Like - Wedding Groove'
    }

let videoPlayer = ""
for (let [url, title] of Object.entries(videos)) {

videoPlayer += `
    <div class="video-player">
        <iframe src="${url}" allowfullscreen class="vid-frame p-2"></iframe>
        <h4 class="text-md p-2 text-white">${title}</h4>
    </div>
    `
}

document.querySelector('.video-wrapper').innerHTML = videoPlayer