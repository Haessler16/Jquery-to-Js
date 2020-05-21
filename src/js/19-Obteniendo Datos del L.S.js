async function cacheExist(category){
    const listName = `${category}-list`
    const cacheList = window.localStorage.getItem(listName)
    if(cacheList){
        return JSON.parse(cacheList)
    }else{
        const { data:{ movies: data}}= await getData(`${BASE_API}${listName}_movies.json`)
        window.localStorage.setItem(listName, JSON.stringify(data))
        return data
    }
}

const actionList= cacheExist("Action")
const $actionContainer = document.getElementById("action")
renderMovieList(actionList, $actionContainer, "action")

const dramaList= cacheExist("Drama")
const $dramaContainer = document.getElementById('drama')
renderMovieList(dramaList, $dramaContainer, "drama")

const animationList= cacheExist("Animation")
const $animationContainer = document.getElementById("animation")
renderMovieList(animationList, $animationContainer, "animation")