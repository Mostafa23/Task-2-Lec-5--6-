const GeocodingAPI = require("./api/GeocodingAPI");
const weatherAPI = require("./api/weatherAPI");

const country = process.argv[2];

GeocodingAPI(country, (error, locationData) => {
    if (error) {
        console.log(`\nGeocoding Error:\n\n\t${error}\n\n`);
    } else {
        const { Latitude, Longitude } = locationData;

        weatherAPI(Latitude, Longitude, (error, weatherData) => {
            if (error) {
                console.log(`\nWeather API Error:\n\n\t${error}\n\n`);
            } else {
                console.log(`\nWeather Information for ${country}:`);

                console.log(`\n\t- Time: ${weatherData.new_date}\n`);

                console.log(`\t- City: ${weatherData.name}/${weatherData.region}/${weatherData.country} `);
                console.log(`\t- Latitude: ${Latitude}`);
                console.log(`\t- Longitude: ${Longitude}`);

                console.log(`\n\t- Weather: ${weatherData.weather}`);
                console.log(`\t- Temperature: ${weatherData.temp}°C`);
                console.log(`\n\t- Last Updated: : ${weatherData.last}\n\n`);
                // console.log(weatherData.res);
            }
        });
    }
});
