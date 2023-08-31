const express = require('express');
const app =express();
const path = require('path');
const hbs = require('hbs');


const static_path = (path.join(__dirname, './public'));
const container_path=(path.join(__dirname, './container/views'));
const partials_path =(path.join(__dirname, './container/partials'));

// Paths
app.set('view engine', 'hbs');
app.set('views', container_path);
app.use(express.static(static_path));
hbs.registerPartials(partials_path)

// Routing 
app.get("/",(req , res)=>{
    res.render('index')
})
app.get("/about",(req , res)=>{
    res.render('about')
})
app.get("/weather",(req , res)=>{
    res.render('weather')
})
app.get("/*",(req , res)=>{
    res.render('404error')
})
app.listen(8000, ()=>{
    console.log("Welcome to port 8000");
})