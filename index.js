// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

var data = [
  {"Status":"Good", "count": 6245},
  {"Status":"Moderate", "count": 4793},
  {"Status":"Unhealthy for Sensitive Groups", "count": 1246},
  {"Status":"Unhealthy", "count": 569},
  {"Status":"Very Unhealthy", "count": 82},
  {"Status":"Hazardous", "count": 51},
]

//Gráfico de columnas. Mi 1º gráfico
var visualization = d3plus.viz()
  .container("#viz1")
  .data(data)
  .order({"value": "count"})
  .type("bar")
  .id("Status")
  .x("Status")
  .y("count")
  .timeline({
    "align":"center",
    "value":true
  })
  .draw()
