async function getData(url){
        const response = await fetch(url)
        const data = await response.json();
        if(data.data.movie_count > 0){
            return data
        }else{
            throw new Error("No se encontro ningun resultado")
        }
  }


  $featuringContainer.append($loader)
  const data = new FormData($form)
  //const peli = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`)
  try {
    const {data: { movies: pelis }} = await getData(`${BASE_API}Drama-list_movies.json?limit=1&query_term=${data.get('name')}`)
    const HTMLString = featuringTemplate(pelis[0])
    $featuringContainer.innerHTML = HTMLString
  } catch (error) {
    //debugger
    alert(error.message)
    $loader.remove()
    $home.classList.remove("search-active")
  }