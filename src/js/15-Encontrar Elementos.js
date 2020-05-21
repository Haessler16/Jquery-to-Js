function showModal($element){
    $overlay.classList.add("active")
    $modal.style.animation = "modalIn .8s forwards"
    const id = $element.dataset.id;
    const category = $element.dataset.category
    const data = findMovie(id, category)

    $modalTitle.textContent = data.title
    $modalImg.setAttribute("src", data.medium_cover_image)
    $modalDescription.textContent = data.description_full

}

function findMovie(id, category){
    switch(category){
        case "action":{
            return findById(actionList, id)
        }
        case "drama":{
            return findById(dramaList, id)
        }
        default:{
            return findById(animationList, id)
        } 
    }
}

function findById(list, id){
    return list.find(movie => movie.id === parseInt(id, 10))
}

const {data: {movies: actionList} } = await getData(`${BASE_API}Action-list_movies.json`)
const $actionContainer = document.getElementById("action")
renderMovieList(actionList, $actionContainer, "action")

const {data:{ movies: dramaList } } = await getData(`${BASE_API}Drama-list_movies.json`)
const $dramaContainer = document.getElementById('drama')
renderMovieList(dramaList, $dramaContainer, "drama")

const {data:{ movies: animationList } } = await getData(`${BASE_API}Animation-list_movies.json`)
const $animationContainer = document.getElementById("animation")
renderMovieList(animationList, $animationContainer, "animation")

const $modalImg = $modal.querySelector("img")
const $modalTitle = $modal.querySelector("h1")
const $modalDescription = $modal.querySelector("p")