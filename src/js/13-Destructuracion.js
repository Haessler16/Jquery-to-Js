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
    const {
        data: {
            movies: pelis
        }
    } = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`)

    const HTMLString = featuringTemplate(pelis[0])

    const $featuringContainer.innerHTML = HTMLString
})