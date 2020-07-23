var db = require('../db') //bierze wszystkie exportsy z wybranego pliku
var Post = db.model('Post',{
    username: { type: String, required: true },
    body:     { type: String, required: true },
    date:     { type: Date, required: true, default: Date.now }
})
module.exports = Post 