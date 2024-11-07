
const request = require("request")

const GeocodingAPI = ( city , callback) => {

    const GeocodingAPI_api = "pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${GeocodingAPI_api}`

  request ({url , json : true} , (er , res) => {
     
    if (er){
        callback ("Unable to connect geocode service" , undefined)
    }else if (res.body.message)  {
        callback (res.body.message , undefined )
    } else if (res.body.features.length == 0) {
         callback("Unable to find location" , undefined)
    } else {
        callback(undefined , {
            Longitude : res.body.features[0].center[0],
            Latitude : res.body.features[0].center[1]
        })
    }
  })
}

module.exports = GeocodingAPI