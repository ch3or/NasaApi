let searchButton = document.querySelector('#search')

function listener(){
    console.log('btnpressed')
    sendApiRequest()
}
async function sendApiRequest(){
    let API_KEY = "tnFIo2VinO4dgK1NkRfGxiOUpOVYRKPYcydtR4qP"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}
function useApiData(data){
    document.querySelector("#content").innerHTML += `<img src="${data.url}" class="image"> <br> <br> <br>`
    document.querySelector("#content").innerHTML += `<h1 class="exp">Explanation:</h1><p class="texto">${data.explanation}</p>`
    
    
}