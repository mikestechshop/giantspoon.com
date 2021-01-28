var parser = require('fast-xml-parser')
var mysql = require('mysql')
var connection = mysql.createConnection({
    user: 'gsuser',
    password: 'y7s0fh4tjvggpmg8',
    host: 'dev-mysql-nyc3-81389-do-user-95982-0.b.db.ondigitalocean.com',
    database: 'gs',
    port: '25060',
})
var options = {
    attributeNamePrefix: '@_',
    attrNodeName: 'attr', //default is 'false'
    textNodeName: '#text',
    ignoreAttributes: true,
    ignoreNameSpace: false,
    allowBooleanAttributes: false,
    parseNodeValue: true,
    parseAttributeValue: false,
    trimValues: true,
    cdataTagName: '__cdata', //default is 'false'
    cdataPositionChar: '\\c',
    parseTrueNumberOnly: false,
    arrayMode: false, //"strict"
    attrValueProcessor: (val, attrName) =>
        he.decode(val, { isAttributeValue: true }), //default is a=>a
    tagValueProcessor: (val, tagName) => he.decode(val), //default is a=>a
    stopNodes: ['parse-me-as-string'],
}
var insert = "INSERT INTO test (username) VALUES ('insert_worked')"
module.exports = () => {
    var xmlData = fetch(
        'https://www.linkedin.com/talent/thirdPartyJobBoards/098a49c8-8343-4091-8d52-17d131f20187'
    )

    if (parser.validate(xmlData) === true) {
        //optional (it'll return an object in case it's not valid)
        var jsonObj = parser.parse(xmlData, options)
        res.sent('valid')
    }
    connection.connect(function (err) {
        if (err) {
            res.sent('db error')
        }
        console.log('connected')
        connection.query(insert, function (err, result) {
            if (err) throw err
            console.log('inerted')
            res.send('should be written')
        })
    })
}
