const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 2000;

var app = express({defaultErrorHandler:false}); 

app.use(cors());
app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json());
app.use(express.static('public')); 

app.get('/', (req,res) => {
    res.send('<h1>Selamat Datang di API kenyanginAja.com</h1>');
});

const {
    authRouter
} = require('./routers');

app.use('/auth', authRouter);

app.listen(PORT, () => console.log('API aktif di port : ' + PORT));