const express = require('express');
const router = express.Router();

const ctrlHome =require('../controller/index');
const ctrlLogin =require('../controller/login');
const ctrlAdmin =require('../controller/admin');

router.get('/', ctrlHome.getHome);
router.get('/login', ctrlLogin.get);
router.get('/admin', ctrlAdmin.get);

module.exports = router;
