const { Router } = require('express');
const router = Router();

const { AllTuristic } = require("../controllers/AllTuristic");
const { PostTuristic } = require("../controllers/PostTuristic");
const { DetailsTuristic } = require("../controllers/DetailsTuristic");
const { UpdateTuristic } = require("../controllers/UpdateTuristic");
const { Payment } = require("../controllers/Payment");
const { AllReservations } = require("../controllers/AllReservations");
const { DetailsReservation } = require("../controllers/DetailsReservation");
const { DeletePostTuristic } = require("../controllers/DeletePostTuristic");






const path = require('path');

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads')); // Usa path.join para obtener la ruta absoluta
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });


router.post('/post-turistic', upload.array('imageFile', 1000) , PostTuristic )
router.get('/turistics', AllTuristic)
router.get('/turistic/:turisticId', DetailsTuristic)
router.put('/turistic/:turisticId', UpdateTuristic)
router.delete('/turistic/:turisticId', DeletePostTuristic)

router.post('/payment/:turisticId', Payment)

router.get('/reservations', AllReservations)
router.get('/reservation/:reservationId', DetailsReservation)










module.exports = router