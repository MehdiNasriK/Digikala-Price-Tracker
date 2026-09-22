export default (error, req, res, next) => {
  const err = { ...error };
  const statusCode = err.statusCode || 500;

  console.log(error.message)
  res.status(statusCode).json({
    message: err.message,
  });
};
