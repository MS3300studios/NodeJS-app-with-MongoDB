var express = require('express')
var bodyParser = require('body-parser')
const PORT = 3000

var app = express()
app.use(bodyParser.json())

var Post = require('./models/post')

app.listen(PORT, function(){
    console.log("server started on port: "+PORT);
})

app.get('/api/posts', function(req,res){
    res.json([
        {
            username: 'Dickeyxxx',
            body: 'NodeJS wymiata!'
        }
    ])
})
//nadprogramowo z Kubą
app.get('/', function(req,res){
    res.sendFile(__dirname+'/posts.html')
})

app.post('/api/posts', function(res,req,next){
    var post = new Post({
        username: req.body.username,
        body: req.body.body
    })
    post.save(function (err, post) {
        if(err) { return next(err) }
        res.json(201, post)
    })
})


