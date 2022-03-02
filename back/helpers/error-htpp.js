const httpError = (res, err) => {
  res.status(500).json({
    message: err,
  });
};

module.exports = { httpError };
