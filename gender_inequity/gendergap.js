/* ------ CODE SETUP ------ */

async function returnAPI(url){
    const pl = await fetch(url)
    const data = await pl.json()
    return data
}

// fetch('https://stats.oecd.org/SDMX-JSON/data/DEC_I/AUS+AUT+BEL+CAN+CHL+COL+CRI+CZE+DNK+EST+FIN+FRA+DEU+GRC+HUN+ISL+IRL+ISR+ITA+JPN+KOR+LVA+LTU+LUX+MEX+NLD+NZL+NOR+POL+PRT+SVK+SVN+ESP+SWE+CHE+TUR+GBR+USA+OECD+BGR+HRV+CYP+MLT+ROU.MEN+WOMEN+MW.GWG1+GWG5+GWG9/all?startTime=2005&endTime=2020&dimensionAtObservation=allDimensions')
// .then( (data) => {
//     if(data.ok){
//         return data.json()
        
//     } 
// })
// .then( gendergap => generateHtml(gendergap))
// .catch( error => console.error('Error:', error))

// const generateHtml = (data) => {
//     console.log(data)
//     const html = `
//         <div class="name">${data}</div>
//     `
//     const gendergapDiv = document.querySelector('.gendergap')
//     gendergapDiv.innerHTML = html
// }


function countryObservation(d){
    let z = Object.keys(d.dataSets[0].observations)
    let defList = []
    for(let i = 0; i<z.length; i++){
        defList.push(d.dataSets[0].observations[z[i]][0])}
    return defList
}

function countryYears(a){
    let y = a.structure.dimensions.observation[1].values
    let newList = []
    for (let i = 0; i<y.length; i++){
        newList.push(y[i].id)}
    return newList
}

const pays = ['Australia, Austria, Belgium, Canada, chile, Colombia, Costa Rica, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Israel, Italy, Japan']

const bnfem = document.querySelector(".fem")
const bnmal = document.querySelector(".mal")

function Jesus(obj, number){
    final_list = [obj]
    for (let i=1; i<number; i++){
        let clone = obj.cloneNode()
        final_list.push(clone)
        document.querySelector('body').appendChild(clone)
    }
    return final_list
}

/* ------ BACK ------ */


/* ------ FRONT ------ */
let banknotes_fem = Jesus(bnfem, 50)
let banknotes_mal = Jesus(bnmal, 50)
