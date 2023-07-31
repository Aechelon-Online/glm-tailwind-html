
const videos = {

    
    'https://www.youtube.com/embed/E5Ah_hqbzIg': 'Greg Luce Music - Promo Video',
    'https://www.youtube.com/embed/C0FUuuClppY': 'Greg Luce Music - Short Live Promo',
    'https://www.youtube.com/embed/b7fEKZ8TE1E': 'Private Party - Listen To The Music',
    'https://www.youtube.com/embed/n60Pm7AsEB0': 'Rocket Man - Prestonwood CC'
    }

let videoPlayer = ""
for (let [url, title] of Object.entries(videos)) {

videoPlayer += `
    <div class="video-player mx-4">
        <iframe width="560" height="315" src="${url}" frameborder="0" allowfullscreen class="video"></iframe>
        <h4 class="text-3xl text-white">${title}</h4>
    </div>
    `
}

document.querySelector('.video-wrapper').innerHTML = videoPlayer