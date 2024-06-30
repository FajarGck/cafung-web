const loggRequest = (req, res, next) => {
    console.log('Ada request ' + req.method + ' ke path ' + req.path)
    next();
}

module.exports = loggRequest;