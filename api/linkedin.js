var mysql = require('mysql')
var connection = mysql.createConnection({
    user: 'gsuser',
    password: 'akr2clmmgky44sre',
    //TODO: [ISC-190] change this password and put in env before going to prod
    host: 'dev-mysql-nyc3-81389-do-user-95982-0.b.db.ondigitalocean.com',
    database: 'gs',
    port: '25060',
})

// module.exports = (req, res) => {
//     const { name = 'World' } = req.query
//     res.status(200).send(`Hello ${name}`)
connection.connect((err) => {
    if (err) {
        console.log('Error connecting to Db')
        return
    }
    console.log('Connection established')
})

// connection.query('SELECT * from test', function (error, results, fields) {
//     if (error) {
//         console.error('error connecting: ' + error.stack)
//         error.status(500).json({ stuff: 'here' })
//     }
//     console.log('connected as id ' + connection.threadId)
//     const thread = connection.threadId
//     fields.status(200).json({ morestuff: 'here' })
// })
// }
