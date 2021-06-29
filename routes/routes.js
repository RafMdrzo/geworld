
const express = require('express');
const app = express();


app.get("/", function(req, res)
{
       res.render("homepage", {});
});

app.get("/create1", function(req, res)
{
       res.render("output1", {});
});

module.exports = app;
