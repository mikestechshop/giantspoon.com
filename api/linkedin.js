var mysql = require('mysql')
var connection = mysql.createConnection({
    user: 'gsuser',
    password: 'geu7eez2oik6kf5t',
    //TODO: change this password and put in env before going to prod
    host: 'dev-mysql-nyc3-81389-do-user-95982-0.b.db.ondigitalocean.com',
    database: 'gs',
})

module.exports = () => {
    connection.query('SELECT * from test', function (err, results, fields) {
        if (err) {
            console.error('error connecting: ' + err.stack)
            return
        }
        console.log('connected as id ' + connection.threadId)
        const thread = connection.threadId
        res.send(fields)
    })
}
