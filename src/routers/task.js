const express = require('express')
const router = new express.Router()
const Task = require('../db/mongoose')

router.get('/tasks', async (req,res) => {
    try {
        const task = await Task.find({})
        res.status(201).send(task)
    } catch(e){
        res.status(400).send(e)
    }
    



    // Task.find({}).then((tasks) => {
    //     res.status(200).send(tasks)

    // }).catch((e) => {
    //     res.status(500).send(e)
    // })

})

router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description','completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
        
        if(!isValidOperation) {
           return  res.status(404).send({Error: "cannot find the property"})
        }
   

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if(!task){
            return res.status(400).send()
        }
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }

    

})

router.post('/tasks', async (req,res) => {

    const task = await new Task(req.body)
    try{
         task.save()
        res.status(201).send(task)
    }catch(e) {
        res.status(400).send(e)
    }


    // const task = new Task(req.body)
    // task.save().then(() => {
    //     res.send(task)
    // }).catch((e) => {
    //     res.send("Error")
    // })
    



    //user.save().then(()=> {
        //         res.send(user)
        //    }).catch((e) => {
        //        res.status(400)
        //         res.send(e)
        //    })
    
})

router.get('/tasks/:id', async (req,res) => {
    const _id = req.params.id
   
   
    try{
        const task = await Task.findById(_id)
            if (!task) {
                return ("no task was found")
            }
            else{  
         res.status(201).send(task)
            }

    }catch(e) {
        res.status(400).send(e)
    }

    // Task.findById(_id).then((tasks) => {
    //         if(!tasks){
    //             return res.status(404).send(tasks)
    //         }


    //         res.send(tasks)

    // }).catch((e) => {
    //     res.status(500).send(e)
    // })


})

router.delete('/tasks/:id', async (req,res) => {
    

    try{
        const task = await Task.findByIdAndDelete(req.params.id)
         if(!task){
             res.send("no taks found")
         }
         res.status(201).send(task)
    } catch(e){
        res.send(e)
    }
})

module.exports = router