function showweatherDetails(event) {
    event.preventDefault();
    // const city = document.getElementById('city').value;
    const lon = document.getElementById('lon').value;
    const lat = document.getElementById('lat').value;
    const apiKey = 'c4f86ece00bc8aa272652ac9065af12d'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(apiUrl)
    // .then(response => response.json())
    // .then(data => {
    //   const weatherInfo = document.getElementById('weatherInfo');
    //   weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
    //                           <p>Temperature: ${data.main.temp} &#8451;</p>
    //                           <p>Weather: ${data.weather[0].description}</p>`;
    // })
    .then( reponse => reponse.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2> longitude : ${data.coord.lon} </h2>
                                <h2> latitude : ${data.coord.lat} </h2> 
                                <h2> weather : ${data.weather[0].main} </h2>
                                <h2> City ${data.name} </h2>   `
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
      });
}
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );

// function showweatherDetails(event) {
//     event.preventDefault();

//     const lon = document.getElementById('lon').value;
//     const lat = document.getElementById('lat').value;
//     const apiKey = 'c4f86ece00bc8aa272652ac9065af12d';

//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             const weatherInfo = document.getElementById('weatherInfo');
//             weatherInfo.innerHTML = `
//                 <h2>City: ${data.name}</h2>
//                 <p>Latitude: ${data.coord.lat}</p>
//                 <p>Longitude: ${data.coord.lon}</p>
//                 <p>Weather: ${data.weather[0].main} (${data.weather[0].description})</p>
//                 <p>Temperature: ${data.main.temp} &#8451;</p>
//             `;
//         })
//         .catch(error => {
//             console.error('Error fetching weather:', error);
//             const weatherInfo = document.getElementById('weatherInfo');
//             weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
//         });
// }

// document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
