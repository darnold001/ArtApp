addEventListener('DOMContentLoaded', (event)=> console.log("Dom Fully Loaded and Parsed"))

const cardTitle = document.querySelector(".card-title")
const imageSrc = document.querySelector(".card-img-top")
const cardSubtitle = document.querySelector(".card-subtitle")
const cardText = document.querySelector(".card-text")

artAPI = "https://collectionapi.metmuseum.org/public/collection/v1/objects/436535"

fetch(artAPI)
.then(parseJSON)
.then(createCards)

function parseJSON(artAPI){
    return artAPI.json()
}
function createCards(artAPI){
    cardTitle.innerText = artAPI.title
    imageSrc.src = artAPI.primaryImage
    cardSubtitle.innerText = artAPI.artistDisplayName
    cardText.innerText = artAPI.artistDisplayBio

    console.log(artAPI)
}