import jwt from 'jsonwebtoken';


const authenticateJWT = (req, res, next) => {
    // require the client to place the token in the authorization header
    const authHeader = req.headers.authorization;
    console.log('Auth header: ', authHeader);
    if (authHeader) {
        // const token = authHeader.split(' ')[1];
        const token = authHeader
        console.log('Token: ', token);

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403); // Forbidden if token is invalid
            }

            req.user = user;
            console.log('User authenticated: ', user);
            next();
        });
    } else {
        res.sendStatus(401); // Unauthorized if no token is present
    }
};

export default authenticateJWT;