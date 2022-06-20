const express = require("express");

const {
    getTheList,
    createTodo,
    updateTodo,
    deleteTodo,
    getUsers,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/controller')

const router = express.Router();

router.route('/')
  .get(getTheList, getUsers)
  .post(createTodo, createUser);
router.route('/:id')
  .put(updateTodo, updateUser)
  .delete(deleteTodo, deleteUser);

module.exports = router;