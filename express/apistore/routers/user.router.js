//delegamos la accion de rutas en este archivo

const express = require('express');
const router = express.Router();
const{getAll ,createUser,deleteUser,findFilter} = require('../controllers/users.controller')

router.get('/',getAll);

router.post('/',createUser);

router.delete('/',deleteUser);

//url dinamica '/':id son los (: +variable)
router.get('/:id/:name/:y',findFilter)

module.exports = router; 
