export default (error, req, res, next) => {
  const err = { ...error };
  const statusCode = error.statusCode || 500;

  console.log(error)
  res.status(statusCode).json({
    message: err.message,
  });
};
