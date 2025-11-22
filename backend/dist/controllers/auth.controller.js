"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.updateProfile = exports.getProfile = exports.login = exports.register = void 0;
const client_1 = __importDefault(require("../prisma/client"));
const auth_utils_1 = require("../utils/auth.utils");
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Name, email, and password are required' });
        }
        const existingUser = await client_1.default.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }
        const hashedPassword = await (0, auth_utils_1.hashPassword)(password);
        const user = await client_1.default.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: 'USER'
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                avatarUrl: true,
                bio: true,
                createdAt: true
            }
        });
        const token = (0, auth_utils_1.generateToken)(user.id);
        return res.status(201).json({
            message: 'User registered successfully',
            user,
            token
        });
    }
    catch (error) {
        console.error('Registration error:', error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
        const user = await client_1.default.user.findUnique({
            where: { email },
            select: {
                id: true,
                name: true,
                email: true,
                password: true,
                role: true,
                avatarUrl: true,
                bio: true
            }
        });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const isPasswordValid = await (0, auth_utils_1.comparePassword)(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const { password: _, ...userWithoutPassword } = user;
        const token = (0, auth_utils_1.generateToken)(user.id);
        return res.json({
            message: 'Login successful',
            user: userWithoutPassword,
            token
        });
    }
    catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};
exports.login = login;
const getProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await client_1.default.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                avatarUrl: true,
                bio: true,
                createdAt: true
            }
        });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.json({ user });
    }
    catch (error) {
        console.error('Get profile error:', error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};
exports.getProfile = getProfile;
const updateProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        const { name, bio, avatarUrl } = req.body;
        const user = await client_1.default.user.update({
            where: { id: userId },
            data: {
                name,
                bio,
                avatarUrl
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                avatarUrl: true,
                bio: true,
                createdAt: true
            }
        });
        return res.json({
            message: 'Profile updated successfully',
            user
        });
    }
    catch (error) {
        console.error('Update profile error:', error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};
exports.updateProfile = updateProfile;
const logout = async (req, res) => {
    try {
        return res.json({ message: 'Logout successful' });
    }
    catch (error) {
        console.error('Logout error:', error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};
exports.logout = logout;
//# sourceMappingURL=auth.controller.js.map