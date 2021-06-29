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

app.get("/", function(req, res)
{
       res.render("homepage", {});
});

app.listen(port, function()
{
    console.log('listening at port ' + port);
});
