const { Router }= require('express');
const router = Router();
const { Register } = require("../controllers/Register")
const { Login } = require("../controllers/Login")
const { Datapersonal } = require("../controllers/Datapersonal")





router.post('/register', Register)
router.post('/login', Login)
router.get('/datapersonal', Datapersonal)





module.exports = router