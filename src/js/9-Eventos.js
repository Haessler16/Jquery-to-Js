function addEventClick($element){
    $element.addEventListener("click", ()=>{

    })
}

function renderMovieList(list, $container){
    $container.children[0].remove();
    list.forEach((movie)=>{
        const HTMLString= videoItemTemplate(movie)
        const movieElement = createTemplate(HTMLString)
        $container.append(movieElement)
        addEventClick(movieElement)
    })
} 

const $form = document.getElementById("form")
$form.addEventListener("submit", e=>{
        e.preventDefault()
})