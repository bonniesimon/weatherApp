const API_KEY = 'd4147e3145a4260e7ce1db47ab0679ee';



// let s,temp;
fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/d4147e3145a4260e7ce1db47ab0679ee/42.3601,-71.0589')
    .then(res => res.json())
    .then( data => {
        console.log(data);
        let temp = data.hourly.data[1].temperature;
        let summary = data.currently.summary;
        // console.log(summary);
        
    });





