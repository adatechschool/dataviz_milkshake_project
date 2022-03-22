const apiDataPokemon = {
    url: 'https://pokeapi.co/api/v2/', //url API
    type: 'pokemon',
    id: Math.floor(Math.random()*151)+1,
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
        <img src=../pkmn_sprites/${id}.svg>
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
    <div class="weatherdescription">Paris: ${dataMeteo.weather[0].description}</div>
`
const meteoDiv = document.querySelector('.meteo')
meteoDiv.innerHTML = html

if (dataMeteo.weather[0].description=="clear sky")
{
const photoMeteo =
`<img src="sun2.jpg"></img>
`
document.querySelector('.meteo').innerHTML += photoMeteo
}
}



/*fetch('https://wttr.in/Paris?format=j1')
.then( (dataMeteoDeux) => {
    if(dataMeteoDeux.ok){
        return dataMeteoDeux.json()
    } 
})
.then( meteo => generateHtmlMeteoDeux(meteo))
.catch( error => console.error('Error:', error))


const generateHtmlMeteoDeux = (dataMeteoDeux) => {
console.log(dataMeteoDeux)
const html = `
    <div class="name">Paris: ${dataMeteoDeux}</div>
`
const meteoDivDeux = document.querySelector('.meteoDeux')
meteoDivDeux.innerHTML = html
}*/