
var page = require('page');
var empty = require ('empty-element');
var template = require ('./template');
var title = require ('title');

page('/', function (ctx, next) {
  title('Platzigram');
  var main = document.getElementById('main-container');

  var pictures = [
    {
      user:{
        username: 'Dani',
        avatar: 'http://www.danimm.com/images/daniel.jpg'
      },
      url: 'office.jpg',
      likes: 0,
      liked: false,
      createAt: new Date().getTime()
    },
    {
      user:{
        username: 'Dani',
        avatar: 'http://www.danimm.com/images/daniel.jpg'
      },
      url: 'office.jpg',
      likes: 1,
      liked: true,
      createAt: new Date().setDate(new Date().getDate() - 10)
    },
  ];

  empty(main).appendChild(template(pictures));
})
