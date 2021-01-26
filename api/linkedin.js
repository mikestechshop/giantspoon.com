var mysql = require('mysql')
var connection = mysql.createConnection({
    user: 'gsuser',
    password: 'akr2clmmgky44sre',
    host: 'dev-mysql-nyc3-81389-do-user-95982-0.b.db.ondigitalocean.com',
    database: 'gs',
    port: '25060',
})
//TODO: [ISC-190] change this password and put in env before going to prod
module.exports = (req, res) => {
    connection.connect((err) => {
        if (err) {
            console.log('Error connecting to Db')
            res.send('error')
        }
        res.send('connected')
    })
}
