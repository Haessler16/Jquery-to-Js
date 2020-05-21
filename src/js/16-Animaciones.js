function renderMovieList(list, $container, category){
    $container.children[0].remove()
    list.forEach((movie)=>{
      const HTMLString = videoItemTemplate(movie, category)
      const movieElement = createTemplate(HTMLString)
      $container.append(movieElement)
      const image = movieElement.querySelector("img")
      image.addEventListener("load", (e)=>{
          e.srcElement.classList.add("fadeIn")
      })
      addEventClick(movieElement)
    })
}