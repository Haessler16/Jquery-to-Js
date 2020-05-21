function videoItemTemplate(movie){
    return(
        `<div class="primaryPlaylistItem">
            <div class="primaryPlaylistItem-image">
                <img src=${movie.medium_cover_image}>
            </div>
            <h4 class="primaryPlaylistItem-title">
                ${movie.title}
            </h4>
        </div>`
    )
}
const $actionContainer = document.querySelector("#action")

actionList.data.movies.forEach((movie)=>{
    const HTMLString= videoItemTemplate(movie)
    const html = document.implementation.createHTMLDocument()
    html.body.innerHTML = HTMLString
    $actionContainer.append(html.body.children[0])
})

