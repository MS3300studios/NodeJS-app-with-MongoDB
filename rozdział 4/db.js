var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/social', ()=>{
    console.log("nawiązano połączenie z MongoDB");
})
module.exports = mongoose







