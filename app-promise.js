const yargs = require('yargs')
const axios = require('axios')

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address for which weather needs to displayed',
        string: true
    }
})
.help()
.alias('help','h')
.argv

const encodeAddress = encodeURIComponent(argv.address)
const geoCodeUrl =  `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`

axios.get(geoCodeUrl)
.then(response => {
    const address = '51, Sadayappan Ln, Appavu Nagar, West Saidapet, Chennai, Tamil Nadu 600015, India'
    const latitude = '13.0261684'
    const longitude = '80.22354679999999'  
    const secretKey = 'dc02cdf8af9a6aaee632631d47f76199'
    const weatherUrl = `https://api.darksky.net/forecast/${secretKey}/${latitude},${longitude}`
    console.log(address)
    
    return axios.get(weatherUrl)    
}).then( response => {
    const temperature = response.data.currently.temperature
    const realTemperature = response.data.currently.apparentTemperature
    console.log(`The Temperature is ${temperature}. But it feels like ${realTemperature}`)
}).catch( error => {
    if (error.errno == 'ENOTFOUND') {
        console.log('URL NOT FOUND')
    } else {
        console.log(error)
    }
})