const errorWrapper = (cb) => (req, res, next) => {
  return cb(req, res, next).catch((err) => next(err));
};

export default errorWrapper;