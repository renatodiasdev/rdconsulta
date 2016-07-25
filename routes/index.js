var express = require('express');
var App = express.Router();
var usuarios = getmodule('/usuario/usuario.js');

/* GET home page. */
App.get('/') 
   .index(usuarios.index);

App.route('/usuario')
	.get(usuarios.read)
	.post(usuarios.create);


App.route('/usuario/:id')
	.get(usuarios.profile)
	.put(usuarios.update)
	.delete(usuarios.delete);

module.exports = App;
