import jwt from 'jsonwebtoken';
import { userService } from '../services/userService.js';
const generateToken = (id, userType) => {
    const secret = (process.env.JWT_SECRET || 'secret');
    const options = {
        expiresIn: '7d',
    };
    return jwt.sign({ id, userType }, secret, options);
};
export const register = async (req, res) => {
    try {
        const { name, email, password, userType } = req.body;
        // Validate input
        if (!name || !email || !password) {
            res.status(400).json({ error: 'Please provide all required fields' });
            return;
        }
        // Create user
        const user = await userService.create({
            name,
            email,
            password,
            userType: userType || 'user',
        });
        // Generate token
        const token = generateToken(user._id, user.userType);
        res.status(201).json({
            success: true,
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                userType: user.userType,
            },
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Validate input
        if (!email || !password) {
            res.status(400).json({ error: 'Please provide email and password' });
            return;
        }
        // Check for user
        const user = await userService.findByEmail(email);
        if (!user) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }
        // Check password
        const isMatch = await userService.comparePassword(password, user.password);
        if (!isMatch) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }
        // Generate token
        const token = generateToken(user._id, user.userType);
        res.status(200).json({
            success: true,
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                userType: user.userType,
            },
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const getMe = async (req, res) => {
    try {
        const user = await userService.findById(req.user.id);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.status(200).json({
            success: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                userType: user.userType,
            },
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
//# sourceMappingURL=authController.js.map