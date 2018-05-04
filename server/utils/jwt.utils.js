var jwt = require('jsonwebtoken');

const JWT_SIGN_SERCRET = 'jhsfhjfhsdfbsdfbjhvgzv3543534534523FF345344FVvdfgdg'
module.exports = {
    

    generateTokenForUser: function(userData) {
        return jwt.sign({
            userId: userData.id,
        }, 
        JWT_SIGN_SERCRET, {
            expiresIn: '1h'
        })
    }
}