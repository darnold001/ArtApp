addEventListener('DOMContentLoaded', (event)=> console.log("Dom Fully Loaded and Parsed"))



artAPI = "https://collectionapi.metmuseum.org/public/collection/v1/objects/436535"

fetch(artAPI)
.then(parseJSON)
.then(createCards)

function parseJSON(artAPI){
    return artAPI.json()
}

function createCards(response){
    console.log(response)
}