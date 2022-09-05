const { Comment } = require('../models/models')

class CommentController {
    async create(req, res) {
        const { userId } = req.user
        const { productId, text } = req.body

        const comment = await Comment.create({ userId: userId, productId: productId, text: text })

        return res.json(comment)
    }

    async getComment(req, res) {
        const { id } = req.params

        const comment = await Comment.findAll({ where: { productId: id } })

        return res.json(comment)
    }

    async deleteComment(req, res) {
        const { id } = req.params

        const comment = await Comment.findOne({ where: { id } })
        await Comment.destroy({ where: { id } })

        return res.json(comment)
    }
}

const commentController = new CommentController();

module.exports = commentController;