(async function load() {

async function getData(url){
      const response = await fetch(url)
      const data = await response.json();
      if(data.data.movie_count > 0){
        return data
      }else{
          throw new Error("No se encontro ningun resultado")
      }
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
function createTemplate(HTMLString){
  const html = document.implementation.createHTMLDocument()
  html.body.innerHTML = HTMLString
  return html.body.children[0]
}
function renderMovieList(list, $container, category){
  $container.children[0].remove()

  list.forEach((movie)=>{
    const HTMLString = videoItemTemplate(movie, category)
    const movieElement = createTemplate(HTMLString)
    $container.append(movieElement)
    const img = movieElement.querySelector("img")
    img.addEventListener("load", (e)=>{
      e.srcElement.classList.add("fadeIn")
    })
    addEventClick(movieElement)
  })
}
function addEventClick($element){
  $element.addEventListener("click", ()=>{
    showModal($element)
  })
}
function showModal($element){
    $overlay.classList.add("active")
    $modal.style.animation = "modalIn .8s forwards"
    const id = $element.dataset.id
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

      default: return findById(animationList, id)
  }
}
function findById(list, id){
  return list.find(movie=> movie.id === parseInt(id, 10))
}
function setAttributes($element, attributes){
  for(const key in attributes){
    $element.setAttribute(key, attributes[key])
  }
}
function featuringTemplate(peli){
  return(`
  <div class="featuring">
    <div class="featuring-image">
      <img src='${peli.medium_cover_image}' width="70" height="100" alt="">
    </div>
    <div class="featuring-content">
      <p class="featuring-title">Pelicula encontrada</p>
      <p class="featuring-album">${peli.title}</p>
    </div>
</div>`)
}
async function cacheExist(category){
  const listName = `${category}-list`
  const cacheList = window.localStorage.getItem(listName)

  if(cacheList){
    return JSON.parse(cacheList)
  }else{
    const {data:{movies: data}} = await getData(`${BASE_API}${listName}_movies.json`)
    window.localStorage.setItem(listName, JSON.stringify(data))
    return data
  }
}

// const actionList = await getData('https://yts.am/api/v2/list_movies.json?genre=action')
// const dramaList = await getData('https://yts.am/api/v2/list_movies.json?genre=drama')
// const animationList = await getData('https://yts.am/api/v2/list_movies.json?genre=animation')
//const BASE_API2 = "https://yts.am/api/v2/"
const BASE_API = "http://127.0.0.1:5500/src/data/"

const actionList = await cacheExist("Action");
const $actionContainer = document.getElementById("action")
renderMovieList(actionList, $actionContainer, "action")

const dramaList = await cacheExist("Drama");
const $dramaContainer = document.getElementById('drama')
renderMovieList(dramaList, $dramaContainer, "drama")

const animationList = await cacheExist("Animation");
const $animationContainer = document.getElementById("animation")
renderMovieList(animationList, $animationContainer, "animation")

const $featuringContainer = document.getElementById("featuring")
const $home = document.getElementById("home")
const $form = document.getElementById("form")

$form.addEventListener("submit", async(e)=>{
  e.preventDefault()
  $home.classList.add("search-active")
  const $loader = document.createElement("img")
  setAttributes($loader, {
    src:"src/images/loader.gif",
    height: 50,
    width: 50,
  })

  $featuringContainer.append($loader)
  const data = new FormData($form)
  //const peli = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`)
  try {
    const {data: { movies: pelis }} = await getData(`${BASE_API}Drama-list_movies.json?limit=1&query_term=${data.get('name')}`)
    const HTMLString = featuringTemplate(pelis[0])
    $featuringContainer.innerHTML = HTMLString
  } catch (error) {
    alert(error.message)
    $loader.remove()
    $home.classList.remove("search-active")
  }
})

const $modal = document.getElementById("modal")
const $overlay = document.getElementById("overlay")
const $hideModal = document.getElementById("hide-modal")

$hideModal.addEventListener("click",()=>{
  $modal.style.animation = "modalOut .8s forwards"
  $overlay.classList.remove("active")
})

const $modalImg = $modal.querySelector("img")
const $modalTitle = $modal.querySelector("h1")
const $modalDescription = $modal.querySelector("p")

})()