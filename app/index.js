const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const _AuthMiddleWare = require('./common/_AuthMiddleWare');
 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan('combined'));

require('./Routers/home.router')(app);
app.use(_AuthMiddleWare.isAuth);
require('./Routers/book.router')(app);
require('./Routers/partner.router')(app);
require('./Routers/product.router')(app);
require('./Routers/literature.router')(app);




app.listen(port, ()=> console.log('Listening at http://localhost: ' + port))