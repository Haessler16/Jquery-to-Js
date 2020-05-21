console.log("Hola mundo");

const nombre = "Hae"
let apellido = "Leon"

function cambiarNombre(nuevoNombre){
    return  cambia = nuevoNombre
}
cambiarNombre("hae")
console.log(cambia);

const getUserAll = new Promise(function(todoBien, todoMal){
    setTimeout(function(){
        todoBien("Nada fine")
    },2000)
})

const getUser = new Promise(function(todoBien, todoMal){
    setTimeout(function(){
        todoBien("Nada okay")
    },5000)
})

Promise.race([
    getUserAll,
    getUser,
])
.then(function(sms){
    console.log(sms)
})
.catch(function(error){
    console.log(error)
})