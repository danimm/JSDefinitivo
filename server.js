var express = require ('express');
var app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Platzigram'});
})
app.get('/signup', function (req, res) {
  res.render('index',  { title: 'Platzigram - Signup'});
})
app.get('/signin', function (req, res) {
  res.render('index', { title: 'Platzigram - Signin'});
})

app.listen(3100, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);

  console.log('platzigram escuchando en el puerto 3100');
})

// app.get(['/','/signup', '/signin'], (req, res)
// res.render('index')
