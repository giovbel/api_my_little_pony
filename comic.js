'use strict'


async function getComics(){
    const endPoint = "http://ponyapi.net/v1/comics-story/all"
    const response = await fetch(endPoint)
    const comics = await response.json()

    console.log(comics)
    return comics.data


}

async function loadComics(){

    const comics = await getComics()
    console.log(comics)
}
loadComics()
getComics()