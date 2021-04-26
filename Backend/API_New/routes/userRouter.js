const router = require('express').Router();
const user = require('../controllers/userC')

console.log('route');

router.post('/login', user.login)
// router.patch('/getUserById:id', user.updateUser)
router.get('/findUserById/:id', user.findUserById)
router.post('/signUp', user.createUser)
module.exports = router