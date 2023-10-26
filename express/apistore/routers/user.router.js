//delegamos la accion de rutas en este archivo

const express = require('express');
const router = express.Router();
const{getAll ,createUser,deleteUser,findFilter} = require('../controllers/users.controller')
const validateUser = require('../request/user.request');

router.get('/',getAll);

router.post('/',validateUser,createUser);

router.delete('/',deleteUser);

//url dinamica '/':id son los (: +variable)
router.get('/:id/:name/:y',findFilter)

module.exports = router; 
