fetch("https://randomuser.me/api")
.then(function(response){
    return response.json() 
})
.then(function(user){
    console.log("user", user.result[0].name.first);
})
.catch(function(){
    console.log("algo fallo");
})