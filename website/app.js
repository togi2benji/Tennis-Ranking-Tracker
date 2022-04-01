document.getElementById('top10').style.visibility = 'hidden'
const options = {
    urlA: 'https://tennis-live-data.p.rapidapi.com/rankings/ATP',
    urlB: 'https://tennis-live-data.p.rapidapi.com/rankings/WTA'
}
const headers = {
    'X-RapidAPI-Host': 'tennis-live-data.p.rapidapi.com',
    'X-RapidAPI-Key': '63d227f56cp1a4e4cjsnd5',
    'Content-Type': 'application/json'
}

const wtaBtn  = document.getElementById('WTA')
const atpBtn  = document.getElementById('ATP')
atpBtn.addEventListener('click', chooseATPURL)
wtaBtn.addEventListener('click', chooseWTAURL)

function chooseATPURL(){
    fetch(options.urlA, {headers, body: JSON.stringify()})
    .then(response => response.json())
    .then(data => updateUI(data))
}

function chooseWTAURL(){
     fetch(options.urlB, {headers, body: JSON.stringify()})
     .then(response => response.json())
     .then(data => updateUI(data))
}

function updateUI(data){
    topRankers(10,data)
}

function topRankers(number,data){
    var i=0
    document.getElementById('top10').style.visibility = 'visible'
    while (i<number){
        document.getElementById(`number${i}`).innerHTML = `${data.results.rankings[i].first_name} ${data.results.rankings[i].last_name}`
        i++
    }
}
