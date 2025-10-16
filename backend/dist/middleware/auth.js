import jwt from 'jsonwebtoken';
export const protect = (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
        res.status(401).json({ error: 'Not authorized to access this route' });
        return;
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
        req.user = {
            id: decoded.id,
            userType: decoded.userType,
        };
        next();
    }
    catch (error) {
        res.status(401).json({ error: 'Not authorized to access this route' });
    }
};
export const authorize = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            res.status(401).json({ error: 'Not authorized' });
            return;
        }
        if (!roles.includes(req.user.userType)) {
            res.status(403).json({ error: 'User role not authorized to access this route' });
            return;
        }
        next();
    };
};
//# sourceMappingURL=auth.js.map