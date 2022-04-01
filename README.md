# Tennis Ranking Tracker - 24 hour challenge

## Goal of Project

The goal of the project is to use RapidAPI to connect with Tennis Live Data to get the current top 10 players in ATP and WTA.

## Steps taken

1. Setup up project environment with the necessary dependencies by npm install express, cors, body-parser.
2. Required express, cors, body-parser in server.js
3. Got API Credentials from Tennis Live Data using RapidAPI.
4. Created functions to fetch data from api and display as a list.
5. Updated UI dynamically with a function.

## Choices between ATP and WTA

Two buttons are provided to the user to click on. Based on their selection one of two functions will be run
1. chooseATPURL
2. chooseWTAURL
```Javascript
const wtaBtn  = document.getElementById('WTA')
const atpBtn  = document.getElementById('ATP')
atpBtn.addEventListener('click', chooseATPURL)
wtaBtn.addEventListener('click', chooseWTAURL)
```
## Consuming API

After struggling with this for a few days, I understand a bit about consuming API. There are essentially 4 parts.
1. URLs
```Javascript
const options = {
    urlA: 'https://tennis-live-data.p.rapidapi.com/rankings/ATP',
    urlB: 'https://tennis-live-data.p.rapidapi.com/rankings/WTA'
}
```
2. API Key
```Javascript
const headers = {
    'X-RapidAPI-Host': 'tennis-live-data.p.rapidapi.com',
    'X-RapidAPI-Key': '63d227f56cp1a4e4cjsnd5',
    'Content-Type': 'application/json'
}
```
3. Fetch URL and Key to Receive a Response object.
>The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and does not directly return the JSON response body but instead returns a promise that resolves with a Response object. [Read more](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

```Javascript
    fetch(options.urlA, {headers, body: JSON.stringify()})
    .then(response => response.json())
```
4. Extract JSON body content from Response Object and Parse the data.
>The Response object, in turn, does not directly contain the actual JSON response body but is instead a representation of the entire HTTP response. So, to extract the JSON body content from the Response object, we use the json() method, which returns a second promise that resolves with the result of parsing the response body text as JSON. [Read more](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

Shown below is how I consumed the API to gather top 10 ATP and WTA professionals:

```Javascript
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
 ```
 *API Key will not work. The code has been modified so that key can't be used. A free subscription with RapidAPI will allow for use of APIs.
