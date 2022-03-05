var data;
let myDate = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var Days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 var day = document.getElementById("day");
var date = document.getElementById("date");
var date2 = document.getElementById("date2");
var city = document.getElementById("city");
var city2 = document.getElementById("city2");
 var search = document.getElementById("search");
var temp = document.getElementById("temp");
var temp2 = document.getElementById("temp2");
var condition = document.getElementById("condition");
var condition2 = document.getElementById("condition2");
var icon = document.getElementById("icon");
var icon2 = document.getElementById("icon2");
 var tomorrow= document.getElementById("tomorrow");
 
 var icon_t = document.getElementById("icon-t");
 var temp_t = document.getElementById("icon-t");

var umbrella = document.getElementById("umbrella")
var umbrella2 = document.getElementById("umbrella2")

 function search2(x){

  let http = new XMLHttpRequest();
  http.open("GET",`http://api.weatherapi.com/v1/forecast.json?key=feb1133c4b1e438eaf730057210905&q=${x}&days=3`);
  http.send();
  http.addEventListener("readystatechange",function(){
   
  if(http.readyState == 4 && http.status == 200)
  {
     data = JSON.parse( http.response );
     day.innerHTML = Days[myDate.getDay()];
     date.innerHTML =((data.forecast).forecastday)[0].date;
     
     temp.innerHTML = data.current.temp_c + `<sup>o</sup>C`;
     condition.innerHTML = data.current.condition.text;
     icon.innerHTML =`<img src ="https:${data.current.condition.icon}">` 

     city.innerHTML = data.location.name;
     umbrella.innerHTML = `<i class="fas fa-umbrella"></i> <small> 20% </small>` +`<i class="fas fa-wind"></i><small> 18Km </small>` + `<i class="far fa-compass"></i> <small>East</small>`

    tomorrow.innerHTML = Days[myDate.getDay()+1];
    date2.innerHTML =((data.forecast).forecastday)[1].date;
    city2.innerHTML = data.location.name;
    temp2.innerHTML = ((data.forecast).forecastday)[1].day.avgtemp_c + `<sup>o</sup>C`;
    condition2.innerHTML = (((data.forecast).forecastday)[1]).day.condition.text;
    icon2.innerHTML = `<img src ="https:${(((data.forecast).forecastday)[1]).day.condition.icon}">`
    umbrella2.innerHTML = `<i class="fas fa-umbrella"></i> <small> 20% </small>` +`<i class="fas fa-wind"></i><small> 18Km </small>` + `<i class="far fa-compass"></i> <small>East</small>`
    console.log(data);
  }
  })
}




