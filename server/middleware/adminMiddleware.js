const jwt = require('jsonwebtoken');
const ApiError = require('../error/apierror');

module.exports = (admin, next) => {
    return (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if (token == undefined) {
            return next(ApiError.unauthorized('not found'))
        }
        decoded = jwt.verify(token, process.env.codeSecret)
        if (decoded.admin !== admin) {
            return next(ApiError.forbidden('dont permission'))
        }
        req.user = decoded
        next()
    }
};





