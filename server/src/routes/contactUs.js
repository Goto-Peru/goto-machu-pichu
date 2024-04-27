const { Router }= require('express');
const router = Router();

const { ContactUs } = require("../controllers/ContactUs");





router.post('/contact-us', ContactUs);




module.exports = router