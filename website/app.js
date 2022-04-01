const options = {
    method: 'GET',
    urlA: 'https://tennis-live-data.p.rapidapi.com/rankings/ATP',
    urlB: 'https://tennis-live-data.p.rapidapi.com/rankings/WTA'
  };
const headers = {
    'X-RapidAPI-Host': 'tennis-live-data.p.rapidapi.com',
    'X-RapidAPI-Key': '74e4e99ed3mshbde6c63d227f56cp1a4e4cjsnd58dde35db71',
    'Content-Type': 'application/json'
  }

const wtaBtn  = document.getElementById('WTA');
const atpBtn  = document.getElementById('ATP');

atpBtn.addEventListener('click', chooseATPURL);
wtaBtn.addEventListener('click', chooseWTAURL);

function chooseATPURL(){
   //fetch with promise
    fetch(options.urlA, {headers, body: JSON.stringify()})
    .then(response => response.json())
    .then(data => updateUI(data))
}

function chooseWTAURL(){
    //fetch with promise
     fetch(options.urlB, {headers, body: JSON.stringify()})
     .then(response => response.json())
     .then(data => updateUI(data))
 }


function updateUI(data){
    topRankers(10,data);
}

function topRankers(number,data){
    var i=0;
    // var node = document.createElement('li');
    // var appendValue = node
    while (i<number){
        document.getElementById(`number${i}`).innerHTML = `${data.results.rankings[i].first_name} ${data.results.rankings[i].last_name}`
        // node.appendChild(document.createTextNode(`${data.results.rankings[i].first_name} ${data.results.rankings[i].last_name}`))
        // document.querySelector('ol').appendChild(node)
        i++
    }
}