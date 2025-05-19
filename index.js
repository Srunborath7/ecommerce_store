const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const path = require('path');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts)
app.set('layout', './layouts/layout')
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('adminPage/dashboard',{title: 'Dashboard', headerPage: "Dashboard", activePage: 'dashboard', layout: './layouts/layout'});
});
app.get('/categories',(req, res)=>{
  res.render('adminPage/categories',{title: 'Categories', headerPage: "Categories", activePage: 'categories', layout: './layouts/layout'});
});
app.get('/products',(req, res)=>{
  res.render('adminPage/products',{title: 'Products', headerPage: "Products", activePage: 'products', layout: './layouts/layout'});
});
app.get('/setting',(req, res)=>{
  res.render('adminPage/setting',{title: 'Setting', headerPage: "Setting", activePage: 'settings', layout: './layouts/layout'});
});
//login view
app.get('/login', (req, res) => {
  res.render('loginForm/login', {title: 'LoginForm', layout: false});
});