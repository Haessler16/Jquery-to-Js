function featuringTemplate(peli){
    return(`
    <div class="featuring">
    <div class="featuring-image">
      <img src="src/images/covers/solar-sailer.jpg" width="70" height="100" alt="">
    </div>
    <div class="featuring-content">
      <p class="featuring-title">Pelicula encontrada</p>
      <p class="featuring-album">${peli.title}</p>
    </div>
  </div>
    `)
}

$form.addEventListener("submit", async(e)=>{
    e.preventDefault()
    $home.classList.add("search-active")
    const $loader = document.createElement("img")
    setAttributes($loader, {
        src: "src/images/loader.gif",
        height: 50,
        width: 50,
    })

    $featuringContainer.append($loader)
    const data = new FormData($form)
    const BASE_API = "https://yts.am/api/v2/"
    const peli = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`)

    const HTMLString = featuringTemplate(peli.data.movies[0])

    const $featuringContainer.innerHTML = HTMLString
})


