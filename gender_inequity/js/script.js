document.getElementById("allemagne").onclick = function() {getAllemagne()};

function getAllemagne () {
    document.getElementById("textecountry").innerHTML =  `<h5>En Allemagne, les femmes gagnent 11.82 de moins que les hommes</h5>`;
    document.getElementById("flagcountry").src="css/flags/allemagneflag.png";
}

document.getElementById("france").onclick = function() {getFrance()};

function getFrance () {
    document.getElementById("textecountry").innerHTML =  `<h5>En France, les femmes gagnent 11.82 de moins que les hommes</h5>`;
    document.getElementById("flagcountry").src="css/flags/fr.svg";
}


document.getElementById("canada").onclick = function() {getCanada()};

function getCanada () {
    document.getElementById("textecountry").innerHTML =  `<h5>Au Canada, les femmes gagnent 11.82 de moins que les hommes</h5>`;
    document.getElementById("flagcountry").src="css/flags/canadaflag.png";
}