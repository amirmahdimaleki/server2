const TodoList = require('../model/model');

const getTheList = async (req, res)=>{
    try {
        const todos = await TodoList.find({});
        res.status(200).json({todos})
    } catch (error) {
        res.status(404).json({msg:"NOT FOUND"})
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


// ! ============================================= user ===============================================

const User = require('../model/userModel');


const getUsers = async (req, res)=>{
    try {
        const users = await User.find({});
        res.status(200).json({users})
    } catch (error) {
        res.status(500).json({msg:error})
    }
};


const createUser = async (req, res)=>{
    try {
        
        // const users = await User.create({
        //     name: req.body.name,
        //     age: req.body.age,
        //     linkedIn: req.body.linkedIn,
        //     github: req.body.github,
        //     image: req.body.image,
        //     languages: req.body.languages,
        //     skills: req.body.skills
        // });
        const users = new User(req.body)
        const result = await users.save()
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};


const updateUser = async (req, res)=>{
    const { id: _id } = req.params;
    const user = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(
        { _id },
        { ...user, _id },
        { new: true }
        );
        res.status(201).json({updatedUser, massage:`Updated user ${_id}`});
    } catch (err) {
        res.status(500).json({ msg: error });
    }
};


const deleteUser = async (req, res)=>{
    const {id:userId} = req.params;
    try {
        const users = await User.findByIdAndDelete({_id:userId})

        res.status(200).json({users,  massage:`Deleted user ${_id}`})
    } catch (error) {
        res.status(500).json({msg:error})
    }
};



module.exports ={
    getTheList,
    createTodo,
    updateTodo,
    deleteTodo,
    getUsers,
    createUser,
    updateUser,
    deleteUser
}