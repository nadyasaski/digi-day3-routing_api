const userRepo = require('../domain/repo/userRepo'); // Make sure the path is correct
const User = require('../domain/model/userModel');

const getAllUsers = (req, res) => {
    try {
        const users = userRepo.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error: error.message });
    }
};

const getUserById = (req, res) => {
    const { id } = req.params;
    try {
        const user = userRepo.getUserById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving user', error: error.message });
    }
};

const createUser = (req, res) => {
    const { name, password, email } = req.body;

    if (!name || !password || !email) {
        return res.status(400).json({ message: 'User must have a name, password, and email' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    const newUser = new User(name, password, email);

    try {
        const createdUser = userRepo.addUser(newUser);
        res.status(201).json(createdUser);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};

const updateUser = (req, res) => {
    const { id } = req.params;
    const user = req.body;
    try {
        const updatedUser = userRepo.updateUser(id, user);
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error: error.message });
    }
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    try {
        userRepo.deleteUser(id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
};

const searchUsers = (req, res) => {
    const { name } = req.query;
    try {
        const users = userRepo.searchUsersByName(name);
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error searching users', error: error.message });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    searchUsers
};
