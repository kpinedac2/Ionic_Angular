var express = require ('express'); 
var path = require ('https://ionicpuntoventa.herokuapp.com') 
var app = express (); 

app.use (express.static (path.resolve (__dirname, "www"))); 
app.set ('port', process.env.PORT || 3000); 
app.listen (app.get ('port'), function () { 
console.log ("escuchando Puerto", app.get ("port")); 
}); 
