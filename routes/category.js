const express = require('express')
const router = express.Router()

const CategoryController = require('../controllers/category')
const categoryController = new CategoryController()
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth')
const { userById } = require('../controllers/user')

router.get('/category/:categoryId', categoryController.read)
router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, categoryController.create)
router.put('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, categoryController.update)
router.delete('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, categoryController.remove)
router.get('/categories', categoryController.list)

router.param('categoryId', categoryController.categoryById)
router.param('userId', userById)

module.exports = router