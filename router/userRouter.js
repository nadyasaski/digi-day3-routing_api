const express = require('express');
const userHandler = require('../handler/userHandler');

const router = express.Router();

router.get('/', userHandler.getAllUsers); // Get all
router.get('/:id', userHandler.getUserById); // Get one by ID
router.post('/', userHandler.createUser); // Create
router.put('/:id', userHandler.updateUser); // Update
router.delete('/:id', userHandler.deleteUser); // Delete
router.get('/name/search', userHandler.searchUsers); // Search by name

module.exports = router;
