const express = require('express');
const router = express.Router();

const {index, addTodo,deleteTodo} = require('../controllers/TodoController');

/* GET home page. */
router.get('/', index);
router.post('/todo',addTodo);
router.post('/todo/:id', deleteTodo);
module.exports = router;
