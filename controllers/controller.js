const TodoList = require('../model/model');

const getTheList = async (req, res)=>{
    try {
        const todos = await TodoList.find({});
        res.status(200).json({todos})
    } catch (error) {
        res.status(500).json({msg:error})
    }
};

const createTodo = async (req, res)=>{
    try {
        const newTodo = req.body;
        const todos = await TodoList.create(newTodo);
        res.status(200).json({todos})
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};


const updateTodo = async (req, res)=>{
    const { id: _id } = req.params;
    const todo = req.body;
    try {
        const updatedTodo = await TodoList.findByIdAndUpdate(
        { _id },
        { ...todo, _id },
        { new: true }
        );
        res.status(200).json({updatedTodo});
    } catch (err) {
        res.status(500).json({ msg: error });
    }
};


const deleteTodo = async (req, res)=>{
    const {id:todoId} = req.params;
    try {
        const todos = await TodoList.findByIdAndDelete({_id:todoId})

        res.status(200).json({todos})
    } catch (error) {
        res.status(500).json({msg:error})
    }
};


module.exports ={
    getTheList,
    createTodo,
    updateTodo,
    deleteTodo
}