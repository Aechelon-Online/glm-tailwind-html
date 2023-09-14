const blogs = [
    {title: 'Elevating Private Events', link:'https://greglucemusic.com/blog/index.html'},
    {title: 'Event DJ Services', link:'https://greglucemusic.com/blog/event-dj-services-expert-entertainment/index.html'},
    {title: 'Emerging Trends in 2023', link:'https://greglucemusic.com/blog/emerging-party-dj-trends-in-2023/index.html'},
    {title: 'Setting The Beat', link:'https://greglucemusic.com/blog/current-party-dj-industry-trends/index.html'},
    {title: 'Elevating The Beat', link:'https://greglucemusic.com/blog/advanced-mixing-tips-for-party-djs/index.html'},
    {title: 'Mixing Techniques', link:'https://greglucemusic.com/blog/mastering-transitions-for-party-djs/index.html'},
    {title: 'Blending Methods', link:'https://greglucemusic.com/blog/smooth-party-dj-blending-methods/index.html'}
]

let page = ""

blogs.forEach(function(blog) {
    page += `
    <div class="flex items-center px-2 mx-2">
        <h2 class="text-[0.75rem] tablet:text-[1rem] desktop:text-[1.25rem] text-center px-2"><a href="${blog.link}">${blog.title}</a></h2>
    </div>
    `
})

document.querySelector(".blogs").innerHTML = page