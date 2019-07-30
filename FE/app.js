addEventListener('DOMContentLoaded', (event)=> console.log("Dom Fully Loaded and Parsed"))


const container = document.querySelector(".card")
const searchbutton = document.querySelector(".searchButton")
const searchTerm = document.querySelector(".searchTerm")

searchbutton.addEventListener('click',event =>{
    const searchItem = searchTerm.value
    searchApi(searchItem)
})

function searchApi(searchItem){
   // console.log(searchItem)
    stringApi = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${searchItem}`
    fetch(stringApi)
    .then(parseJSON)
    .then(iterateAPI)
}
function parseJSON(artAPI){
    return artAPI.json()
    }

    function CreateAPICalls(artAPI){
        artAPI.forEach(element => {createAPIString(element)
        });  
    }

    function createAPIString(element){
        artAPI = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${element}`
        console.log(artAPI)
        APIcall(artAPI)
    }

    function APIcall(artAPI){
    fetch(artAPI)
    .then(parseJSON)
    .then(CreateCard)
    }

    function iterateAPI(result){
        console.log(result)
        const idArray = result.objectIDs.map(x => {createAPIString(x)
    }
    )}
    function CreateCard(artAPI){

        container1 = document.createElement("div")
        container.appendChild(container1)

        img = document.createElement("img")
        img.src = artAPI.primaryImage
        container1.appendChild(img)

        h3 = document.createElement("h3")
        h3.innerText = artAPI.title
        container1.appendChild(h3)

        h4 = document.createElement("h4")
        h4.innerText = artAPI.artistDisplayName
        container1.appendChild(h4)

        p = document.createElement("p")
        p.innerText = artAPI.artistDisplayName
        container1.appendChild(p)
}


