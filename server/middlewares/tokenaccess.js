const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken");

module.exports = asyncHandler(async(req, res, next)  => {
    
    let token;
    const authHeader = req.headers.authorization || req.headers.authorization

    if(authHeader && authHeader.startsWith('Bearer ')){
        token = authHeader.split(' ')[1]
        jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
            if(err){
                res.status(401)
                throw new Error("User not authenticated")
            }

            req.user = decoded.user;

            next()
        })

        if(!token){
            res.status(401)
            throw new Error("User not authenticated or invalid token")
        }
       


    }
})