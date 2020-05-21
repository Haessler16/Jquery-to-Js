`<div></div>`

function videoItemTemplate(src, title) {
    return(
        `
        <div class="primaryPlaylist-list" id="drama">
            <div class="primaryPlaylistItem">
                <div class="primaryPlaylistItem-image">
                  <img src=${src}>
                </div>
            <h4 class="primaryPlaylistItem-title">
                  ${title}
            </h4>
        </div>
        `
    )
}
console.log(videoItemTemplate("src/images/covers/midnight.jpg", "Holap"));
