const { Router }= require('express');
const router = Router();

const { Cotization } = require("../controllers/Cotization");





router.post('/cotization', Cotization);




module.exports = router