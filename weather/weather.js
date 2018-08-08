const request = require('request')

const secretKey = 'dc02cdf8af9a6aaee632631d47f76199'

function getWeather(lat, long, callback) {
    request({
        url: `https://api.darksky.net/forecast/${secretKey}/${lat},${long}`,
        json: true
    },(error, response, body) => {
        if(!error && response.statusCode === 200){
            const weather = {
                'temperature': body.currently.temperature,
                'apparentTemperature': body.currently.apparentTemperature 
            }
            callback(undefined, weather)
        } else {
            callback('Unable to fetch weather data')
        }
    })
}

module.exports = {
    getWeather
}

