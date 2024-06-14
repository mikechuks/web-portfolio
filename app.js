const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
// const { body, validationResult } = require('express-validator');
const mysql = require('mysql2');
// const mysql = require('mysql');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//parse middleware
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}))

//Parse application/json
app.use(bodyParser.json());

//Static Files
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

//Templating Engines
app.engine('hbs', exphbs.engine({extname: '.hbs',layoutsDir:__dirname+'/views/layouts' }));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

//Connection Pool
const pool = mysql.createPool({
    connectionLimit: 100,
    host           : process.env.DB_HOST,
    user           : process.env.DB_USER,
    // password       : process.env.DB_PASS,
    database       : process.env.DB_NAME,
})

// Connect to DB
pool.getConnection((err, connection) => {
    if(err) throw err; //not connected!
    console.log('Connected as ID' + connection.threadId);
})



// Router
const routes = require('./sever/routes/user');
app.use('/', routes);
// app.get('', (req, res) => {
//     res.render('home');
// })
// app.get('/', (req, res) => {
//     const userRole = 'admin2';

//     if(userRole === 'admin'){
//         res.render('home', {layout:'client-layout'});
//     }else{
//         res.render('home', {layout:'admin-layout'})
//     }
// })

app.listen(port, ()=>console.log(`Listening on port ${port}`));