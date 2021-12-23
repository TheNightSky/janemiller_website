let port = process.env.PORT;
const express = require('express');
const app = express();
const path = require('path')
const ejsMate = require('ejs-mate');





app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'views')));




app.get('/', (req, res) => {
  res.render('index')
});

app.get("/srp",(req, res) => {
  res.render('srp');
});

app.get("/downloadCv", (req, res) => {
  res.download("views/styles/uploads/CV-2021-September.pdf");
});


if (port == null || port == "") {
  port = 8000;
};
app.listen(port);



