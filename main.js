function getAnime(name, i){
    
    const url = "https://kitsu.io/api/edge/anime?filter[text]=" + name
    fetch(url)
    .then(res => res.json())
    .then(data => {
        i.src = data["data"][0]["attributes"]["posterImage"]["original"]
        console.log(data["data"][0]["attributes"]["posterImage"]["original"])
        i.parentNode.style.backgroundColor = "none";
    })
}

function onData(data){

    let imageURL = data["data"][0]["attributes"]["posterImage"]["original"]

}

function whatever(){
    let variables = document.getElementsByTagName("img")
    for(let i = 0 ; i < variables.length; i++){
        variables[i].addEventListener("click", function(){
            let name = prompt("Enter anime here: ")
            console.log(variables[i])
            getAnime(name, variables[i])
        })
    }
}

whatever()


