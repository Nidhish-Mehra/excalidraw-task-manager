const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Todo = mongoose.model("Todo")

router.post('/createTodo',async(req,res)=>{
    const todo = new Todo(req.body);
    try {
        await todo.save();
        res.status(201).json({message:"Task added"})
    } catch (error) {
        res.status(409).json({error:error.message})
    }
    
})
router.get('/readTodos',async(req,res)=>{
    try {
        const todos = await Todo.find();
        res.status(200).json(todos)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
    
})
router.get('/incompleteTodos',async(req,res)=>{
    try {
        const todos = await Todo.find({status:false});
        res.status(200).json(todos)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
    
})

router.put('/markCompleted',(req,res)=>{
    Todo.findByIdAndUpdate(req.body._id,{
        status:true,
        completedOn:Date.now()
    },{
        new:true
    }).exec((error,result)=>{
        if(error){
            return res.status(422).json({error:error})
        }else{
            res.json({message:"Marked Completed"})
        }
    })
})
router.put('/deleteTask',(req,res)=>{
    Todo.deleteOne({_id:req.body._id}).then(function(){
        res.json({message:"Marked Completed"})
    }).catch(function(error){
        res.status(422).json({error:error})
    });
})


module.exports = router