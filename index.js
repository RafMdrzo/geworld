const express = require('express');
const port = process.env.PORT || 9090;
const hbs = require('hbs');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');

const routes = require(__dirname + '/routes/routes.js');



app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static('public'));

app.use('/', routes);


app.listen(port, function()
{
    console.log('listening at port ' + port);
});

module.exports = app;
