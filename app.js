const API_KEY = data.key;




// let s,temp;
fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY}/42.3601,-71.0589`)
    .then(res => res.json())
    .then( data => {
        console.log(data);
        let temp = data.hourly.data[1].temperature;
        let summary = data.currently.summary;
        // console.log(summary);
        
    });





