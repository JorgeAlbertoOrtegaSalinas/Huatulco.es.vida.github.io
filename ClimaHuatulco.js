
const apiKey = '78f2e013c3444ae0a7021137243010';

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("weatherButton");
    button.addEventListener('click', getWeather);
});

function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        document.getElementById('weatherResult').innerHTML = "<p>Por favor, ingresa una ciudad.</p>";
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=es`;

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Ciudad no encontrada o problema con la API');
            return response.json();
        })
        .then(data => {
            const weatherInfo = `
                <h3>Clima en ${data.location.name}, ${data.location.region}</h3>
                <p>Temperatura: ${data.current.temp_c} °C</p>
                <p>Condiciones: ${data.current.condition.text}</p>
                <p>Humedad: ${data.current.humidity}%</p>
                <p>Viento: ${data.current.wind_kph} km/h</p>
            `;
            document.getElementById('weatherResult').innerHTML = weatherInfo;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `<p>Error: ${error.message}</p>`;
        });
}
