export default (error, req, res, next) => {
    res.status(error.statusCode).json({
        message: error.message
    })
}