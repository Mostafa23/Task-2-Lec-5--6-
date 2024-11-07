const request = require("request")

const weatherAPI = (Latitude , Longitude , callback) => {
    
    const weatherAPI_api = "b01ba0257ca249e7b8013945240711"
    const url = `https://api.weatherapi.com/v1/current.json?key=${weatherAPI_api}&q=${Latitude},${Longitude}&aqi=yes`
    
    request ({url , json : true  } , (er , res) => {
    
        if (er) {
            callback ( "unable to connect weather api service" , undefined )
        } else if (res.body.error){
             callback (res.body.error.message , undefined )
        }else {
             callback (undefined , {
                name: res.body.location.name,
                region: res.body.location.region,
                country: res.body.location.country,
                weather: res.body.current.condition.text,
                temp: res.body.current.temp_c,
                new_date: res.rawHeaders[1],
                last: res.body.current.last_updated,
                res
            })
        }
    })
}

module.exports = weatherAPI