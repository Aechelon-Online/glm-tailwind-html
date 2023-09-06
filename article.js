const articles = [
    { title: 'Elevating Private Events: The Perfect Blend of a Solo-Acoustic Guitar Player/Singer and DJ', link:'https://greglucemusic.com/blog/index.html', pic:'/images/dj-solo-musician.png'},
    { title: 'Event DJ Services: Elevate Your Occasion with Expert Entertainment', link:'https://greglucemusic.com/blog/event-dj-services-expert-entertainment/index.html', pic:'/images/event-dj-back.png'},
    { title: 'Emerging Party DJ Trends in 2023: Shaping the Sound of the Next Generation', link:'https://greglucemusic.com/blog/emerging-party-dj-trends-in-2023/index.html', pic:'/images/turntable-wavier-lights.png'},
    { title: 'Setting the Beat: Current Party DJ Industry Trends', link:'https://greglucemusic.com/blog/current-party-dj-industry-trends/index.html', pic:'/images/dj-mixing-at-party.png'},
    { title: 'Elevating the Beat: Advanced Mixing Tips for High-Energy Party DJs', link:'https://greglucemusic.com/blog/advanced-mixing-tips-for-party-djs/index.html', pic:'/images/back-of-dj-hands-up.webp'},
    { title: 'Using Mixing Techniques for Party DJs: Mastering Transitions', link:'https://greglucemusic.com/blog/mastering-transitions-for-party-djs/index.html', pic:'/images/mastering-transitions-party-dj.webp'},
    { title: 'Smooth Party DJ Blending Methods', link:'https://greglucemusic.com/blog/smooth-party-dj-blending-methods/index.html', pic:'/images/dj-mixing-board.webp'}
]

let blog = ""

articles.forEach(function(article) {
    blog += `
    <div class="flex items-center px-2 mx-2 border-2 border-black">
        <div class="w-[280px] h-[100px] tablet:w-[320px] tablet:h-[120px] desktop:w-[400px] desktop:h-[150px] overflow-y-hidden">
            <img src="${article.pic}" class="object-fit" alt="event dj services" />
        </div>
        <div>
        <h2 class="text-[0.75rem] tablet:text-[1rem] desktop:text-[1.25rem] text-center px-2"><a href="${article.link}">${article.title.slice(0,30) + "..."}</a></h2>
        </div>
    </div>
    `
    
})

document.querySelector(".blog-posts").innerHTML = blog

