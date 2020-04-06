const {todoList} = require('../todoList');

exports.index = (req,res) => {
    console.log(todoList);
    res.render('index',
        {
            title: 'Todo App',
            todoList: todoList
        }
    )
};

exports.addTodo = async (req,res) => {
    const {todo} = req.body;
    const todoItem = { todo };
    await todoList.push(todoItem);
    res.redirect('/');
};

exports.deleteTodo = async (req,res) => {
    todoList.splice(req.params.id,1);
    res.redirect('/');
};
