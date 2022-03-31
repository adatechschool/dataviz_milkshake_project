fetch('https://stats.oecd.org/SDMX-JSON/data/DEC_I/AUS.MEN+WOMEN+MW.GWG5/all?startTime=2005&endTime=2020&dimensionAtObservation=allDimensions')
.then( (data) => {
if(data.ok){
return data.json()
} 
})
.then( gendergap => generateHtml(gendergap))
.catch( error => console.error('Error:', error))

const generateHtml = (data) => {
    let annee2019 = data.dataSets[0].observations["0:14:0:0"];
console.log(annee2019[0])
}