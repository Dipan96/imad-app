var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
'article-one':{
    title: ' Article one of Dipan',
    heading: 'Article One',
    date: 'August 6,2017',
    content:
       `<p>
                      This is the content for my first article.I am doing my first webapp development.i hope you all gonna like it.
                  </p>
                  <p>
                      I am learning this course from NPTEL.tanmay sir is really giving us the best to cope up easily with the course without having less difficulties.
                  </p>
                  <p>
                      This is the first edited file i am deploying in the webapp development.Hope you all will like it immensely.Thank you!!!
                  </p>`
},
'article-two':{
    title: ' Article Two of Dipan',
    heading: 'Article Two',
    date: 'August 7,2017',
    content:
    ` <p>
                      This is the content for my second article.I am learning IMAD pretty fast.
                      </p>
    `
},
'article-three':{
     title: ' Article Three of Dipan',
    heading: 'Article Three',
    date: 'August 8,2017',
    content:
    ` <p>
                      This is the content for my third article.I almost doing great in IMAD.
                  </p>
    `
}
}
function createTemplate (data) {
    var title=data.title;
    var date= data.date;
    var heading= data.heading;
    var content= data.content;
var htmlTemplate=`<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
        
          </head>
          <body>
              <div class="container">
                  <div>
                  <a href='/'>Home</a>
              </div>
              <hr/>
              <h3>
                  ${heading}
              </h3>
              <div>
                  ${date}
              </div>
              <div>
                 ${content}
              </div>
              </div>
          </body>
 </html>



`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function (req,res) {
   counter=counter+1;
   res.send(counter.toString());
});

app.get('/:articleName', function(req,res){
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
