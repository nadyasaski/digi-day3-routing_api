const User = require('../model/userModel');
const userRepo = require('../repo/userRepo');

const getAllUsers = () => userRepo.getAllUsers();

const getUserById = (id) => userRepo.getUserById(id);

const createUser = ({ name, password }) => {
    if (!name || !password) {
        throw new Error('User must have a name and password');
    }
    const newUser = new User(name, password);
    return userRepo.addUser(newUser);
};

const updateUser = (id, userData) => {
    const existingUser = userRepo.getUserById(id);
    if (!existingUser) {
        throw new Error('User not found');
    }
    return userRepo.updateUser(id, userData);
};

const deleteUser = (id) => {
    const existingUser = userRepo.getUserById(id);
    if (!existingUser) {
        throw new Error('User not found');
    }
    userRepo.deleteUser(id);
};

const searchUsers = (name) => {
    if (!name) {
        throw new Error('Name query parameter is required');
    }
    return userRepo.searchUsersByName(name);
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    searchUsers
};
