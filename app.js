const API_KEY = data.key;


//DOm manipulation
let temperature_element = document.querySelector('.temperature h1');
let summary_element = document.querySelector('.summary h1');
// console.log(temperature_element.innerHTML);

// let s,temp;
fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY}/42.3601,-71.0589`)
    .then(res => res.json())
    .then( data => {
        console.log(data);
        // let temp = data.hourly.data[1].temperature;
        temperature_element.innerHTML = data.currently.temperature;
        summary_element.innerHTML = data.currently.summary;
        // console.log(summary);
        
    });





