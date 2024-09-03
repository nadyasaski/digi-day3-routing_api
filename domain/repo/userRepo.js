let users = [];

const getAllUsers = () => users;

const getUserById = (id) => users.find(user => user.id === id);

const addUser = (user) => {
    users.push(user);
    return user;
};

const updateUser = (id, updatedUser) => {
    users = users.map(user => (user.id === id ? { ...updatedUser, id } : user));
    return getUserById(id);
};

const deleteUser = (id) => {
    users = users.filter(user => user.id !== id);
};

const searchUsersByName = (name) => {
    return users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
};

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
    searchUsersByName
};
