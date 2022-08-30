var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});

router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuarios;
    var password = req.body.password;

    var data = await usuariosModel.validarUsuario (usuario, password);

    if (data != undefined) {
      res.redirect('/admin/novedades');
    } else {
      req.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;

