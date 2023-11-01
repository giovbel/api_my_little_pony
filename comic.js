'use strict'


async function getComics(){
    const endPoint = "http://ponyapi.net/v1/comics-story/all"
    const response = await fetch(endPoint)
    const comics = await response.json()

    console.log(comics)
    return comics.data


}

// const mostrarInfoComics = function(comic){

//     console.log("aooosaso")

//     const infoComic = document.getElementById('storysComic')

//     const sumir = document.createElement('div')
//     sumir.classList.remove("sumir")

//     const imageId = document.createElement('div')
//     imageId.classList.add("imgEid")
    

//     const imageCapa = document.createElement('img')
//     imageCapa.src = comic.image

//     const idStory = document.createElement('h4')
//     idStory.textContent = comic.id

//     const infoCard = document.createElement('div')
//     infoCard.classList.add("info")

//     const nameComic = document.createElement('h1')
//     nameComic.textContent = comic.name

//     const serieComic = document.createElement('p')
//     serieComic.textContent = comic.series

//     const infoStory = document.createElement('p')
//     infoStory.textContent = `author: ${comic.writer}  artist: ${comic.artist} colorist: ${comic.colorist} letterer: ${comic.letterer} editor: ${comic.editor} issue: ${comic.issue}`
    

//     imageId.replaceChildren(imageCapa, idStory)
//     infoCard.replaceChildren(nameComic, serieComic, infoStory)
//     infoComic.replaceChildren(imageId, infoCard)

// }


const criarCards = function(comic){
    const comicsContainer = document.getElementById('comics')

    

    const card = document.createElement("div")
    card.classList.add("storys")
    

    const cardStory = document.createElement('div')
    cardStory.classList.add("card-story")

    const imgCapa = document.createElement('img')
    cardStory.appendChild(imgCapa)
    imgCapa.src = comic.image


    const titleComic = document.createElement('p')
    titleComic.textContent = comic.name


    const idComic = document.createElement('h3')
    idComic.textContent = comic.id
    
    
    card.replaceChildren(cardStory, titleComic, idComic)
    comicsContainer.appendChild(card)

    cardStory.addEventListener ('click', function(){

        console.log(comic.name)

        const comicsContainer = document.getElementById('comics')
        comicsContainer.classList.add("sumir")
    
        const infoComic = document.getElementById('storysComic')

        infoComic.classList.remove("sumir")
    
        const imageId = document.createElement('div')
        imageId.classList.add("imgEid")
        
    
        const imageCapa = document.createElement('img')
        imageCapa.src = comic.image
    
        const idStory = document.createElement('h4')
        idStory.textContent = comic.id
    
        const infoCard = document.createElement('div')
        infoCard.classList.add("info")
    
        const nameComic = document.createElement('h1')
        nameComic.textContent = comic.name
    
        const serieComic = document.createElement('p')
        serieComic.textContent = comic.series
    
        const infoStory = document.createElement('p')
        infoStory.textContent = `author: ${comic.writer}  artist: ${comic.artist} colorist: ${comic.colorist} letterer: ${comic.letterer} editor: ${comic.editor} issue: ${comic.issue}`
        
    
        imageId.replaceChildren(imageCapa, idStory)
        infoCard.replaceChildren(nameComic, serieComic, infoStory)
        infoComic.replaceChildren(imageId, infoCard)
    
    })
}


async function loadComics(){

    const comics = await getComics()
    comics.forEach(criarCards)

    console.log(comics)


}
loadComics()

//------------------------------------------------------------------

