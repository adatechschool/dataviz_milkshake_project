const apiDataPokemon = {
    url: 'https://pokeapi.co/api/v2/', //url API
    type: 'pokemon',
    id: '33',
}

const {url, type, id} = apiDataPokemon

const apiUrlPokemon = `${url}${type}/${id}`

fetch(apiUrlPokemon) // fetch pour récupérer la date de l'API pokeapi
    .then( (data) => {
        if(data.ok){
            return data.json()
        }
    })
    .then( pokemon => generateHtml(pokemon))
    .catch( error => console.error('Error:', error))


const generateHtml = (data) => {
    console.log(data)
    const html = `
        <div class="name">${data.name}</div>
        <img src=${data.sprites.front_default}>
    `
    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
}

fetch('https://api.openweathermap.org/data/2.5/weather?q=Paris,fr&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric')
.then( (dataMeteo) => {
    if(dataMeteo.ok){
        return dataMeteo.json()
    } 
})
.then( meteo => generateHtmlMeteo(meteo))
.catch( error => console.error('Error:', error))


const generateHtmlMeteo = (dataMeteo) => {
console.log(dataMeteo)
const html = `
    <div class="name">Paris: ${dataMeteo.main.temp}</div>
    <div class="name">Paris: ${dataMeteo.weather[0].description}</div>
`
const meteoDiv = document.querySelector('.meteo')
meteoDiv.innerHTML = html
}
