/* ------ CODE SETUP ------ */

//CALL API
async function returnAPI(url){
    const pl = await fetch(url);
    const data = await pl.json();
    return data
}

function urlPays(list){       
    list.forEach(pays => pays.promesse = returnAPI(`https://stats.oecd.org/SDMX-JSON/data/DEC_I/${pays.id}.MEN+WOMEN+MW.GWG5/all?startTime=2005&endTime=2020&dimensionAtObservation=allDimensions`))
    return list
}

function fulfillPromises(list){
    list.forEach(async pays => {
        pays.data = await pays.promesse;
    })
    return list
}

function pays_Objet(list){
    const dList = list
    let fObjet = {}
    dList.forEach(element => {
        fObjet[element.id] = element
    });
    return fObjet    
}

function translate(number){
    let n = number.toFixed(1)
    t = n.toString()
    return t.replace('.', ',')
}

function lastObservation(pays){
    const l = countryObservation(pays.data)
    return translate(l[l.length - 1])
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


function countries(b){
   let c = b.structure.dimensions.observation[0].values
   let list = []
   for (let i = 0; i<c.length; i++){
       list.push(c[i])
   }
return list
}

// ANIMATION
let bgPic = document.querySelector('#illustration_bg').getBoundingClientRect()
let bnY = currentbnY()
const bnfemX = "60%"
const bnmalX = '76.5%'

const bnfem = document.querySelector(".fem")
const bnmal = document.querySelector(".mal")

const bnXRelPadding = 0.05
const coeff1_fem = 0.22
const coeff_fem = [coeff1_fem, coeff1_fem + bnXRelPadding, coeff1_fem + 2*bnXRelPadding]
const coeff1_mal = 0.58
const coeff_mal = [coeff1_mal, coeff1_mal + bnXRelPadding, coeff1_mal + 2*bnXRelPadding]

let bnfem_list
let rev_bnfem_list
let bnmal_list
let rev_bnmal_list

function currentbnY(){
    bgPic = document.querySelector('#illustration_bg').getBoundingClientRect()
    return `${bgPic.y+0.72*bgPic.height}px`
}

function currentbnX(coeff){
    bgPic = document.querySelector('#illustration_bg').getBoundingClientRect()
    return `${bgPic.x+coeff*bgPic.width}px`
}

function init_anime(){
    bnfem.style.top = currentbnY()
    bnmal.style.top = currentbnY()
    bnfem_list=Jesus(bnfem,33)
    bnmal_list=Jesus(bnmal,33)
    rev_bnfem_list=bnfem_list.slice().reverse()
    rev_bnmal_list=bnmal_list.slice().reverse()
    bnSetPosition(bnfem_list, coeff_fem)
    bnSetPosition(bnmal_list, coeff_mal)
}

function stickToPicture(obj){
    obj.style.top = currentbnY()
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

function bnSetPosition(list, ref){
    let j = 0
    for (let i = 1; i < list.length; i++) {
        if(i%11==0){
            j++
            list[i].style.top = currentbnY()
            list[i].style.left = currentbnX(ref[j])
        }else{
            list[i].style.top = `${list[i-1].getBoundingClientRect().y + 15}px`
            list[i].style.left = currentbnX(ref[j])
        }
    }
}


function defineTrajectory(obj, targetX, targetY){
    coor = obj.getBoundingClientRect()
    moveX = targetX - coor.x
    moveY = targetY - coor.y
    return [moveX, moveY]
}


// /* ------ BACK ------ */
const listPaysURL = urlPays(Pays)
const fulfilledList = fulfillPromises(listPaysURL)
const objPays = pays_Objet(fulfilledList)

// countryObservation(j)

/* ------ FRONT ------ */
/*init_anime()*/



// window.addEventListener('resize', () => {
//     stickToPicture(bnfem); stickToPicture(bnmal);
//     bn_list.forEach(bn => stickToPicture(bn))
// })

function getCountry(id) {
    document.getElementById("textecountry").innerHTML = `<h5>${objPays[id].name} : le salaire médian des femmes est inférieur de ${lastObservation(objPays[id])}% par rapport à celui des hommes  </h5>`;
    document.getElementById("flagcountry").src=`css/flags/${id}flag.svg`;
    
    $( ".test3" ).fadeOut();
    $( ".test3" ).fadeIn();
    setInterval(function() {
        $( ".test3" ).fadeOut();
        $( ".test3" ).fadeIn();
        }, 2000);
}



/*for(b in bnfem_list) {
    setInterval(function() {
        b.fadeIn();
        b.fadeOut();
        }, 2000)
}*/

/*setInterval(function() {
$( ".test" ).css( "opacity", "0" )
}, 1000)
setInterval(function() {
$( ".test" ).css( "opacity", "1" )
}, 2000)*/

