const router = require('express').Router()
const image = require('../controllers/imageC')
// const upload = require('../middlewares/upload');


router.get('/getImagesByIdUser/:userId', image.getImagesByIdUser)
router.patch('/updateImage/:id', image.updateImage)
router.post('/createImage', image.createImage)
router.delete('/deleteImage/:id', image.deleteImage)
router.post('/createMyImage', image.createMyImage)
// router.post('/upload', upload.single('image'), image.uploadImge)

module.exports = router