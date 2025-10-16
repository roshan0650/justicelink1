import bcryptjs from 'bcryptjs';
import mongoose from 'mongoose';
// In-memory user store for demo mode
let users = [];
export const userService = {
    // Create a new user
    create: async (userData) => {
        // Check if user already exists
        const existingUser = users.find(u => u.email === userData.email);
        if (existingUser) {
            throw new Error('Email already registered');
        }
        // Hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(userData.password, salt);
        // Create new user
        const newUser = {
            _id: new mongoose.Types.ObjectId().toString(),
            name: userData.name,
            email: userData.email,
            password: hashedPassword,
            userType: userData.userType,
            createdAt: new Date(),
        };
        users.push(newUser);
        return newUser;
    },
    // Find user by email
    findByEmail: async (email) => {
        return users.find(u => u.email === email) || null;
    },
    // Find user by ID
    findById: async (id) => {
        return users.find(u => u._id === id) || null;
    },
    // Compare password
    comparePassword: async (plainPassword, hashedPassword) => {
        return await bcryptjs.compare(plainPassword, hashedPassword);
    },
    // Get all users (for debugging)
    getAll: async () => {
        return users;
    },
    // Clear all users (for testing)
    clear: async () => {
        users = [];
    },
};
//# sourceMappingURL=userService.js.map