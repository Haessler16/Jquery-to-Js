function addEventClick($element){
    $element.addEventListener("click", ()=>{
        showModal($element)
    })
}

function showModal($element){
    $overlay.classList.add("active")
    $modal.style.animation = "modalIn .8s forwards"
    const id = $element.dataset.id;
    const category = $element.dataset.category
}

function videoItemTemplate(movie, category) {
    return(
        `<div class="primaryPlaylistItem" data-id=${movie.id} data-category=${category}>
                <div class="primaryPlaylistItem-image">
                  <img src=${movie.medium_cover_image}>
                </div>
            <h4 class="primaryPlaylistItem-title">
                  ${movie.title}
            </h4>
          </div>
        `
    )
}

function renderMovieList(list, $container, category){
    $container.children[0].remove()
    list.forEach((movie)=>{
      const HTMLString = videoItemTemplate(movie, category)
      const movieElement = createTemplate(HTMLString)
      $container.append(movieElement)
      addEventClick(movieElement)
    })
}

const actionList = await getData(`${BASE_API}Action-list_movies.json`)
const $actionContainer = document.getElementById("action")
renderMovieList(actionList.data.movies, $actionContainer, "action")

const dramaList = await getData(`${BASE_API}Drama-list_movies.json`)
const $dramaContainer = document.getElementById('drama')
renderMovieList(dramaList.data.movies, $dramaContainer, "drama")

const animationList = await getData(`${BASE_API}Animation-list_movies.json`)
const $animationContainer = document.getElementById("animation")
renderMovieList(animationList.data.movies, $animationContainer, "animation")