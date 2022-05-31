
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    if (token == undefined) {
        res.status(401).json({ message: "not found" })
    }
    req.user = jwt.verify(token, process.env.codeSecret)
    next()
}