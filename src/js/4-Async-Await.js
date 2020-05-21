async function load() {
    try{
        const response = await fetch("http://127.0.0.1:5500/src/data/Action-list_movies.json");
        const data = await response.json()
        console.log(data.data.movies);
    }catch(error){
        console.log(error.message);
    }
}

load()