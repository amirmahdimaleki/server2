const express = require("express");

const {
    getTheList,
    createTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/controller')

const router = express.Router();

router.get('/', getTheList);
router.get('/', createTodo);
router.get('/:id', updateTodo);
router.get('/:id', deleteTodo);

module.exports = router;