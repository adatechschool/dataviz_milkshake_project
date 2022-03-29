/* ------ CODE SETUP ------ */

//CALL API
async function returnAPI(url){
    const pl = await fetch(url);
    const data = await pl.json();
    return data
}

// DATA
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

function countries(b){
   let c = b.structure.dimensions.observation[0].values
   let list = []
   for (let i = 0; i<c.length; i++){
       list.push(c[i])
   }
return list
}

// ANIMATION
function currentbnY(){
    return `${bgPic.y+0.9*bgPic.height}px`
}

let bgPic = document.querySelector('#illustration_bg').getBoundingClientRect()
let bnY = currentbnY()
const bnfemX = "60%"
const bnmalX = '76.5%'

const bnfem = document.querySelector(".fem")
const bnmal = document.querySelector(".mal")

function stickToPicture(obj){
    bnY = initbnY()
    obj.style.top = bnY
}

function Jesus(obj, number){
    final_list = [obj]
    for (let i=1; i<number; i++){
        let clone = obj.cloneNode()
        final_list.push(clone)
        document.querySelector('body').appendChild(clone)
    }
    return final_list
}

function createExtendedDOMProto(obj){
    let primer = Object.getPrototypeOf(obj)
}

function defineTrajectory(obj, targetX, targetY){
    coor = obj.getBoundingClientRect()
    moveX = targetX - coor.x
    moveY = targetY - coor.y
    return [moveX, moveY]
}

function moneyRain(list, initialX, initialY){

    for (const item in list){

    } 
}

let bnfem_list=[]
let bnmal_list=[]
let bn_list = bnfem_list.concat(bnmal_list)

/* ------ BACK ------ */

/* ------ FRONT ------ */
window.addEventListener('resize', () => {
    bn_list.forEach(bn => stickToPicture(bn))
})

