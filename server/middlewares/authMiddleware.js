const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];

        const decodedToken = jwt.verify(token, process.env.SECRET_KEY); //{userId: user._id}

        req.body.userId = decodedToken.userId;

        next();
    }catch(error){
        res.send({
            message: error.message,
            success: false
        });
    }
}