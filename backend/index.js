const express = require('express');
const bodyParse = require('body-parser');
const cors = require ('cors');

const api = require('./controllers/api');
const {mongoose } = require('./db.js');
var productcontroller = require('./controllers/productcontroller');
var bookcontroller = require('./controllers/bookcontroller') ;
var paymentcontroller = require('./controllers/paymentcontroller') ;
var admin = require('./controllers/admincontroller');
var app = express();
app.use(bodyParse.json());

app.use(cors({origin: 'http://localhost:4200'}));

app.listen(3000, () => console.log('server started at prot : 3000'));

app.use('/product', productcontroller);
app.use('/admin', admin);
app.use('/api', api);

app.use('/booking' , bookcontroller) ;
app.use('/payment' , paymentcontroller) ;
