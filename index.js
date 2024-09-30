const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const ejs = require('ejs')
const axios = require('axios')
const con = require('./app/config/database.js')
var mysql2 = require('mysql2')
const adSoyadMaasRoutes = require('./app/routes/auth.js')
const model = require('./app/models/auth.js')
const path = require('path')
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:'30mb', extended:true}))
app.use(express.urlencoded({limit:'30mb', extended:true}))
app.use(express.static('public'))
app.use('/api', adSoyadMaasRoutes)
app.set('view engine', 'ejs');
app.get('/', (req,res) => res.render('index',  { apiUrl: '/api/ad-soyad-maas' }))

const port = process.env.port || 5000;
app.listen(port, () => console.log("server ayakta"))
