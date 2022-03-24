async function returnAPI(url){
    const pl = await fetch(url)
    const data = await pl.json()
    return data
}

fetch('https://stats.oecd.org/SDMX-JSON/data/DEC_I/AUS+AUT+BEL+CAN+CHL+COL+CRI+CZE+DNK+EST+FIN+FRA+DEU+GRC+HUN+ISL+IRL+ISR+ITA+JPN+KOR+LVA+LTU+LUX+MEX+NLD+NZL+NOR+POL+PRT+SVK+SVN+ESP+SWE+CHE+TUR+GBR+USA+OECD+BGR+HRV+CYP+MLT+ROU.MEN+WOMEN+MW.GWG1+GWG5+GWG9/all?startTime=2005&endTime=2020&dimensionAtObservation=allDimensions')
.then( (data) => {
    if(data.ok){
        return data.json()
        
    } 
})
.then( gendergap => generateHtml(gendergap))
.catch( error => console.error('Error:', error))

const generateHtml = (data) => {
    console.log(data)
    const html = `
        <div class="name">${data}</div>
    `
    const gendergapDiv = document.querySelector('.gendergap')
    gendergapDiv.innerHTML = html

}


function countryObservation(d){
    let z = Object.keys(d.dataSets[0].observations)
    let defList = []
    for(let i = 0; i<z.length; i++){
        defList.push(d.dataSets[0].observations[z[i]][0])}
    return defList
}