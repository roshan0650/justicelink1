import bcryptjs from 'bcryptjs';
import mongoose from 'mongoose';

interface StoredUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  userType: 'user' | 'lawyer';
  createdAt: Date;
}

// In-memory user store for demo mode
let users: StoredUser[] = [];

export const userService = {
  // Create a new user
  create: async (userData: {
    name: string;
    email: string;
    password: string;
    userType: 'user' | 'lawyer';
  }): Promise<StoredUser> => {
    // Check if user already exists
    const existingUser = users.find(u => u.email === userData.email);
    if (existingUser) {
      throw new Error('Email already registered');
    }

    // Hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(userData.password, salt);

    // Create new user
    const newUser: StoredUser = {
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
  findByEmail: async (email: string): Promise<StoredUser | null> => {
    return users.find(u => u.email === email) || null;
  },

  // Find user by ID
  findById: async (id: string): Promise<StoredUser | null> => {
    return users.find(u => u._id === id) || null;
  },

  // Compare password
  comparePassword: async (plainPassword: string, hashedPassword: string): Promise<boolean> => {
    return await bcryptjs.compare(plainPassword, hashedPassword);
  },

  // Get all users (for debugging)
  getAll: async (): Promise<StoredUser[]> => {
    return users;
  },

  // Clear all users (for testing)
  clear: async (): Promise<void> => {
    users = [];
  },
};

