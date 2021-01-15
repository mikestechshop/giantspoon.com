var mysql = require('mysql')
var connection = mysql.createConnection({
    user: 'gsuser',
    password: 'geu7eez2oik6kf5t',
    host: 'dev-mysql-nyc3-81389-do-user-95982-0.b.db.ondigitalocean.com',
    database: 'gs',
})

module.exports = connection.connect((err) => {
    if (err) {
        return 'error connecting: ' + err.stack
    }
    return 'connected as id ' + connection.threadId
})
