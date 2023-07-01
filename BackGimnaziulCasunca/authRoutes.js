const Router = require('express')
const router = new Router()
const controller = require('./authController')
const authMiddleware = require('./Midleware/authMidleware')


router.post('/registration', controller.registration)
router.post('/login', controller.login)
router.get('/users', controller.getUsers)
router.post('/newstud', controller.addstudent)
router.get('/newmed', controller.addMed)
// router.post('/modstud/:idnp', controller.modifystudent)
router.get('/elevi', controller.getElevi)
router.get('/elev/:idnp', controller.getElev)
router.get('/getclass', controller.getClass)
router.get('/getclassmed1', controller.getClassMed1)
// router.get('/elev/:class', controller.getClass)
router.put('/modstud/:idnp', controller.postElev)
router.delete('/delstud/:idnp', controller.deleteElev)


module.exports = router