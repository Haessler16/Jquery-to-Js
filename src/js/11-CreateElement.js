const $featuringContainer = document.getElementById("featuring")

function setAttributes($element, attributes){
    for(const key in attributes){
        $element.setAttribute(key,attributes[key])
    }
}

$form.addEventListener("submit",(e)=>{
    e.preventDefault()
    $home.classList.add("search-active")
    const $loader = document.createElement("img")
    setAttributes($loader, {
        src: "src/images/loader.gif",
        height: 50,
        width: 50,
    })

    $featuringContainer.append($loader)
})

