function addEventClick($element){
    $element.addEventListener("click", ()=>{
        showModal()
    })
}

$0.classList.toggle("search-active");

const $form = document.getElementById("form")
const $home = document.getElementById("home")

$form.addEventListener("submit",(e)=>{
    e.preventDefault()
    $home.classList.add("search-active")
})

const $modal = document.getElementById("modal")
const $overlay = document.getElementById("overlay")
const $hideModal = document.getElementById("hide-modal")

const $modalImg = $modal.querySelector("img")
const $modalTitle = $modal.querySelector("h1")
const $modalDescriotion = $modal.querySelector("p")

function showModal(){
    $overlay.classList.add("active")
    $modal.style.animation = 'modalIn .8s forwards'
}

$hideModal.addEventListener("click", ()=>{
    $overlay.classList.remove("active")
    $modal.style.animation = 'modalOut .8s forwards'
})
