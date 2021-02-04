var mysql = require('mysql')
var connection = mysql.createConnection({
    user: 'gsuser',
    password: 'y7s0fh4tjvggpmg8',
    host: 'dev-mysql-nyc3-81389-do-user-95982-0.b.db.ondigitalocean.com',
    database: 'gs',
    port: '25060',
})
//TODO: [ISC-190] change this password and put in env before going to prod
module.exports = (req, res) => {
    processRow = (row) => {
        res.send(row)
    }
    // connection.connect((err) => {
    //     if (err) {
    //         console.log('Error connecting to Db')
    //         res.send('error')
    //     }
    //     res.send('connected')
    // })
    var query = connection.query('SELECT * from test')
    query
        .on('error', function (err) {
            res.send(err + 'error connect')
        })
        .on('fields', function (fields) {
            console.log(fields)
        })
        .on('result', function (row) {
            connection.pause()
            processRow(row, function () {
                connection.resume()
            })
        })
        // .on('result', function (row) {
        //     connection.pause()
        //     processRow(row, function () {
        //         connection.resume()
        //     })
        // })
        .on('end', function () {
            console.log('done')
        })
}
