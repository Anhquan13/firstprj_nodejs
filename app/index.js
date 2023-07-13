const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3001;
const _AuthMiddleWare = require('./common/_AuthMiddleWare');
 
const bodyParser = require('body-parser');
app.use(function (req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
})
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan('combined'));

require('./Routers/home.router')(app);
require('./Routers/account.router')(app);
app.use(_AuthMiddleWare.isAuth);
require('./Routers/partner.router')(app);
require('./Routers/product.router')(app);
require('./Routers/literature.router')(app);




app.listen(port, ()=> console.log('Listening at http://localhost: ' + port))