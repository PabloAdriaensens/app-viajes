var express = require('express');
var router = express.Router();
const users = require('../models/users');
const RegisterController = require('../Controlers/auth/registerController');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express', layout: 'layout'});
});

router.get('/inicio', (req, res, next) => {
    res.render('vista.hbs',
        {
            title: '1ª Vista',
            page: 'Mi primera página',
            layout: 'layout.hbs'
        })
});

router.get('/prueba', (req, res, next) => {
    res.render('prueba.hbs',
        {
            usuarios: [
                {id: 1, name: ' Pablo'},
                {id: 2, name: ' Eugenio'},
                {id: 3, name: ' Lia'}],
            administrador:
                {
                    nombre: 'Pablo',
                    apellidos: 'Adriaensens'
                },
            appName: 'App Viajes',
            layout: 'layout'
        })
});
/*
router.get('/login', (req, res, next) => {
    res.render('login.hbs',
        {
            title: 'Vista Login',
            page: 'Mi página de login',
            layout: 'layout.hbs'
        })
});
router.get('/register', (req, res, next) => {
    res.render('register.hbs',
        {
            title: 'Vista Register',
            page: 'Mi página de registro',
            layout: 'layout.hbs'
        })
});
*/
// RUTA LOGIN

router.get('/login', (req, res, next) => {
    res.render('login.hbs',
        {
            title: 'Vista Login',
            page: 'Mi página de login',
            layout: 'layout.hbs'
        })
});

// RUTA REGISTER

router.get('/register', (req, res, next) => {
    let registerController = new RegisterController(req, res, next);
    registerController.index();
})

router.post('/register', (req, res, next) => {
    let registerController = new RegisterController(req, res, next);
    registerController.register();

});


/*
router.get('/usuarios', (req, res, next) => {
    let userController = new USERCONTROLLER(req, res, next);
    userController.getUsuarios();
});
*/
module.exports = router;