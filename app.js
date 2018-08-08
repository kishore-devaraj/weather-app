const request = require('request')
const yargs = require('yargs')

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

console.log(argv.a)
const address = argv.a
const encodeAddress = encodeURIComponent(address)

const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=51/24%20Sadayappan%20street,%20saidapet'


// request({
//     url: url,
//     json: true
// },(error, response, body) => {
//     console.log(body)
// })