var parser = require('fast-xml-parser')
var mysql = require('mysql')
var axios = require('axios')
var connection = mysql.createConnection({
    user: 'gsuser',
    password: 'y7s0fh4tjvggpmg8',
    host: 'dev-mysql-nyc3-81389-do-user-95982-0.b.db.ondigitalocean.com',
    database: 'gs',
    port: '25060',
})
var options = {
    // attributeNamePrefix: '@_',
    // // attrNodeName: 'attr', //default is 'false'
    // textNodeName: '#text',
    // ignoreAttributes: true,
    // ignoreNameSpace: false,
    // allowBooleanAttributes: false,
    // parseNodeValue: true,
    // parseAttributeValue: false,
    // trimValues: true,
    // // cdataTagName: '__cdata', //default is 'false'
    // cdataPositionChar: '\\c',
    // parseTrueNumberOnly: false,
    // arrayMode: false, //"strict"
    // // attrValueProcessor: (val, attrName) =>
    // //     he.decode(val, { isAttributeValue: true }), //default is a=>a
    // // tagValueProcessor: (val, tagName) => he.decode(val), //default is a=>a
    // stopNodes: ['parse-me-as-string'],
}

module.exports = (req, res) => {
    var xmlData
    axios
        .get(
            'https://www.linkedin.com/talent/thirdPartyJobBoards/098a49c8-8343-4091-8d52-17d131f20187',
            {
                'Content-Type': 'application/xml; charset=utf-8',
                Accept: 'application/xml',
            }
        )
        .then(function (response) {
            console.log(response.data)
            xmlData = response.data
            // var jsonObj = parser.parse(xmlData, options)
            // res.send('response: ' + jsonObj.city)
            // if (parser.validate(xmlData) === 1) {
            //     //optional (it'll return an object in case it's not valid)
            //     var jsonObj = parser.parse(xmlData)
            //     console.log(jsonObj.city)
            //     console.log('valid xml')
            // } else {
            //     console.log('invalid xml')
            // }
            try {
                var jsonObj = parser.parse(xmlData, options, true)
            } catch (error) {
                console.log(error.message)
            }
            console.log(jsonObj)

            var values = {
                job_title: jsonObj.source.job.title,
                location: jsonObj.source.job.city,
            }
            var insert = connection.query(
                `INSERT INTO jobs (job_title, location) VALUES ?`,
                values
            )
            res.send('complete?')
            insert
                .on('error', function (err) {
                    res.send(err + ' error connect')
                })
                .on('fields', function (fields) {
                    res.send(fields)
                    connection.end()
                })
                .on('end', function () {
                    console.log('closed connection')
                    // res.send('done')
                })
        })
        .catch(function (error) {
            console.log(error)
        })

    // connection.query(insert, function (err, result) {
    //     if (err) throw err
    //     console.log('inerted')
    //     res.send('should be written')
    // })
}
