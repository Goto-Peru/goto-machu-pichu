const { Router }= require('express');
const router = Router();
const userRouter = require("./user")
const turisticRouter = require("./turistic")
const cotizationRouter = require("./cotization")
const cantactUsnRouter = require("./contactUs")




router.use('/api', userRouter, cotizationRouter, turisticRouter, cantactUsnRouter)


module.exports = router