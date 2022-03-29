/* ------ CODE SETUP ------ */

async function returnAPI(url){
    const pl = await fetch(url)
    const data = await pl.json()
    return data
}

function urlPays(){
    
    let nowList =[]
    
    let promesse = Pays.forEach(pays => pays.promesse = returnAPI(`https://stats.oecd.org/SDMX-JSON/data/DEC_I/${pays.id}.MEN+WOMEN+MW.GWG5/all?startTime=2005&endTime=2020&dimensionAtObservation=allDimensions`))
    nowList.push(promesse)
    return(nowList)


    //let promise = await returnAPI(`https://stats.oecd.org/SDMX-JSON/data/DEC_I/${id}.MEN+WOMEN+MW.GWG5/all?startTime=2005&endTime=2020&dimensionAtObservation=allDimensions`)

}

function totalInfoPays(){

    let datapays = {
        //object. assign()
        //const array = ['foo', 'boo', 'zoo'];
        //const obj = Object.assign({}, array);
        //console.log(obj)




    }
}

 


const Pays = [
        {
            "id": "BGR",
            "name": "Bulgarie"
        },
        {
            "id": "OECD",
            "name": "Pays OCDE"
        },
        {
            "id": "ISL",
            "name": "Islande"
        },
        {
            "id": "MEX",
            "name": "Mexique"
        },
        {
            "id": "CAN",
            "name": "Canada"
        },
        {
            "id": "ITA",
            "name": "Italie"
        },
        {
            "id": "FIN",
            "name": "Finlande"
        },
        {
            "id": "SWE",
            "name": "Suède"
        },
        {
            "id": "SVN",
            "name": "Slovenie"
        },
        {
            "id": "FRA",
            "name": "France"
        },
        {
            "id": "EST",
            "name": "Estonie"
        },
        {
            "id": "CHL",
            "name": "Chili"
        },
        {
            "id": "COL",
            "name": "Colombie"
        },
        {
            "id": "ROU",
            "name": "Roumanie"
        },
        {
            "id": "LTU",
            "name": "Lithuanie"
        },
        {
            "id": "ESP",
            "name": "Espagne"
        },
        {
            "id": "LUX",
            "name": "Luxembourg"
        },
        {
            "id": "POL",
            "name": "Pologne"
        },
        {
            "id": "JPN",
            "name": "Japon"
        },
        {
            "id": "GBR",
            "name": "Royaume-Uni"
        },
        {
            "id": "BEL",
            "name": "Belgique"
        },
        {
            "id": "HUN",
            "name": "Hongrie"
        },
        {
            "id": "NOR",
            "name": "Norvège"
        },
        {
            "id": "MLT",
            "name": "Malte"
        },
        {
            "id": "HRV",
            "name": "Croatie"
        },
        {
            "id": "SVK",
            "name": "République slovaque"
        },
        {
            "id": "IRL",
            "name": "Irlande"
        },
        {
            "id": "LVA",
            "name": "Lettonie"
        },
        {
            "id": "KOR",
            "name": "Corée"
        },
        {
            "id": "TUR",
            "name": "Turquie"
        },
        {
            "id": "AUT",
            "name": "Autriche"
        },
        {
            "id": "PRT",
            "name": "Portugal"
        },
        {
            "id": "NZL",
            "name": "Nouvelle-Zélande"
        },
        {
            "id": "GRC",
            "name": "Grèce"        },
        {
            "id": "USA",
            "name": "États-Unis"        },
        {
            "id": "CRI",
            "name": "Costa Rica"        },
        {
            "id": "CYP",
            "name": "Chypre"        },
        {
            "id": "ISR",
            "name": "Israel"        },
        {
            "id": "NLD",
            "name": "Pays-Bas"        },
        {
            "id": "CHE",
            "name": "Suisse"        },
        {
            "id": "CZE",
            "name": "République tchèque"        },
        {
            "id": "DNK",
            "name": "Danemark"        },
        {
            "id": "DEU",
            "name": "Allemagne"        },
        {
            "id": "AUS",
            "name": "Australie"        }
    ]


// fetch('https://stats.oecd.org/SDMX-JSON/data/DEC_I/AUS+AUT+BEL+CAN+CHL+COL+CRI+CZE+DNK+EST+FIN+FRA+DEU+GRC+HUN+ISL+IRL+ISR+ITA+JPN+KOR+LVA+LTU+LUX+MEX+NLD+NZL+NOR+POL+PRT+SVK+SVN+ESP+SWE+CHE+TUR+GBR+USA+OECD+BGR+HRV+CYP+MLT+ROU.MEN+WOMEN+MW.GWG5/all?startTime=2005&endTime=2020&dimensionAtObservation=allDimensions')
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


<<<<<<< HEAD
=======
const pays = [
    {
        "id": "BGR",
        "name": "Bulgarie"
    },
    {
        "id": "OECD",
        "name": "Pays OCDE"
    },
    {
        "id": "ISL",
        "name": "Islande"
    },
    {
        "id": "MEX",
        "name": "Mexique"
    },
    {
        "id": "CAN",
        "name": "Canada"
    },
    {
        "id": "ITA",
        "name": "Italie"
    },
    {
        "id": "FIN",
        "name": "Finlande"
    },
    {
        "id": "SWE",
        "name": "Suède"
    },
    {
        "id": "SVN",
        "name": "Slovenie"
    },
    {
        "id": "FRA",
        "name": "France"
    },
    {
        "id": "EST",
        "name": "Estonie"
    },
    {
        "id": "CHL",
        "name": "Chili"
    },
    {
        "id": "COL",
        "name": "Colombie"
    },
    {
        "id": "ROU",
        "name": "Roumanie"
    },
    {
        "id": "LTU",
        "name": "Lithuanie"
    },
    {
        "id": "ESP",
        "name": "Espagne"
    },
    {
        "id": "LUX",
        "name": "Luxembourg"
    },
    {
        "id": "POL",
        "name": "Pologne"
    },
    {
        "id": "JPN",
        "name": "Japon"
    },
    {
        "id": "GBR",
        "name": "Royaume-Uni"
    },
    {
        "id": "BEL",
        "name": "Belgique"
    },
    {
        "id": "HUN",
        "name": "Hongrie"
    },
    {
        "id": "NOR",
        "name": "Norvège"
    },
    {
        "id": "MLT",
        "name": "Malte"
    },
    {
        "id": "HRV",
        "name": "Croatie"
    },
    {
        "id": "SVK",
        "name": "République slovaque"
    },
    {
        "id": "IRL",
        "name": "Irlande"
    },
    {
        "id": "LVA",
        "name": "Lettonie"
    },
    {
        "id": "KOR",
        "name": "Corée"
    },
    {
        "id": "TUR",
        "name": "Turquie"
    },
    {
        "id": "AUT",
        "name": "Autriche"
    },
    {
        "id": "PRT",
        "name": "Portugal"
    },
    {
        "id": "NZL",
        "name": "Nouvelle-Zélande"
    },
    {
        "id": "GRC",
        "name": "Grèce"
    },
    {
        "id": "USA",
        "name": "États-Unis"
    },
    {
        "id": "CRI",
        "name": "Costa Rica"
    },
    {
        "id": "CYP",
        "name": "Chypre"
    },
    {
        "id": "ISR",
        "name": "Israel"
    },
    {
        "id": "NLD",
        "name": "Pays-Bas"
    },
    {
        "id": "CHE",
        "name": "Suisse"
    },
    {
        "id": "CZE",
        "name": "République tchèque"
    },
    {
        "id": "DNK",
        "name": "Danemark"
    },
    {
        "id": "DEU",
        "name": "Allemagne"
    },
    {
        "id": "AUS",
        "name": "Australie"
    }
]
>>>>>>> ce44dbf9100edfb13270436992d6f82cd1d18af8


function countries(b){
   let c = b.structure.dimensions.observation[0].values
   let list = []
   for (let i = 0; i<c.length; i++){
       list.push(c[i])
   }
return list
}

<<<<<<< HEAD
=======
//https://stats.oecd.org/SDMX-JSON/data/DEC_I/AUS+AUT+BEL+CAN+CHL+COL+CRI+CZE+DNK+EST+FIN+FRA+DEU+GRC+HUN+ISL+IRL+ISR+ITA+JPN+KOR+LVA+LTU+LUX+MEX+NLD+NZL+NOR+POL+PRT+SVK+SVN+ESP+SWE+CHE+TUR+GBR+USA+OECD+BGR+HRV+CYP+MLT+ROU.MEN+WOMEN+MW.GWG5/all?startTime=2005&endTime=2020&dimensionAtObservation=allDimensions

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

Jesus(bnfem, 50)
Jesus(bnmal, 50)
>>>>>>> ce44dbf9100edfb13270436992d6f82cd1d18af8
