const express = require('express');
const port = process.env.PORT || 9090;
const hbs = require('hbs');
const app = express();
const path = require('path');

app.set('view engine', 'hbs');

app.listen(port, function()
{
    console.log('listening at port ' + port);
});
