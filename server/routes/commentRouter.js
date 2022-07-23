const Router = require('express')
const router = new Router()

const authMiddleware = require('../middleware/authMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')

const commentController = require('../controller/commentController')

router.post('/', authMiddleware, commentController.create)
router.get('/:id', commentController.getComment)
router.delete('/:id', adminMiddleware(true), commentController.deleteComment)

module.exports = router;