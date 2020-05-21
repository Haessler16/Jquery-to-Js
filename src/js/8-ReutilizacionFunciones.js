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

function createTemplate(HTMLString){
    const html = document.implementation.createHTMLDocument()
    html.body.innerHTML = HTMLString
    return html.body.children[0]
}

function renderMovieList(list, $container){
    $container.children[0].remove();
    list.forEach((movie)=>{
        const HTMLString= videoItemTemplate(movie)
        const movieElement = createTemplate(HTMLString)
        $container.append(movieElement)
    })
}

const $actionContainer = document.querySelector("#action")
renderMovieList(actionList.data.movies,$actionContainer)
