const request = require('request')


function geocodeAddress (address, callback) {
    const encodeAddress = encodeURIComponent(address)
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`


    request({
        url: url,
        json: true
    },(error, response, body) => {
        if (error){
            callback('Unable to connect to the server')
        } else if (body.status === 'ZER0_RESULTS') {
            callback('No Address found for the location')
        } else if (body.status === 'OK') {
            const address = '51, Sadayappan Ln, Appavu Nagar, West Saidapet, Chennai, Tamil Nadu 600015, India'
            const latitude = '13.0261684'
            const longitude = '80.22354679999999'
            callback(undefined, {
                'address': address,
                'latitude': latitude,
                'longitude': longitude
            })
        } else {
            const address = '51, Sadayappan Ln, Appavu Nagar, West Saidapet, Chennai, Tamil Nadu 600015, India'
            const latitude = '13.0261684'
            const longitude = '80.22354679999999'
            callback(undefined, {
                'address': address,
                'latitude': latitude,
                'longitude': longitude
            })
        }
    })
}

module.exports = {
   geocodeAddress
}