window.localStorage
window.localStorage.clear()
window.localStorage.setItem("nombre", "haessler")
window.localStorage.getItem("nombre")

// Solo objectos.

window.localStorage.setItem("nombre", JSON.stringify({"peli":"Wonder Woman"}))

JSON.parse(window.localStorage.getItem("nombre"))

//Codigo

const {data: {movies: actionList} } = await getData(`${BASE_API}Action-list_movies.json`)
window.localStorage.setItem("actionList", JSON.stringify(actionList))
const $actionContainer = document.getElementById("action")
renderMovieList(actionList, $actionContainer, "action")

const {data:{ movies: dramaList} } = await getData(`${BASE_API}Drama-list_movies.json`)
window.localStorage.setItem("dramaList", JSON.stringify(dramaList))
const $dramaContainer = document.getElementById('drama')
renderMovieList(dramaList, $dramaContainer, "drama")

const {data:{ movies: animationList} } = await getData(`${BASE_API}Animation-list_movies.json`)
window.localStorage.setItem("animationList", JSON.stringify(animationList))
const $animationContainer = document.getElementById("animation")
renderMovieList(animationList, $animationContainer, "animation")