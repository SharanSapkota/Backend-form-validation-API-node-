const express = require ('express')
require('./db/mongoose')
// const Task = require('./db/mongoose')
// const User = require('./models/user')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json()) //taking the database documents 
app.use(userRouter)
app.use(taskRouter)

////////////------------------- This all file is included in task_manager/src/routers  ---------------------/////////////////

// app.post('/users', async (req,res)=> {
//    const user = new User(req.body)

//    try{
       
//    await user.save()
//    res.status(201).send(user)

//    } catch(e) {
//        res.status(400).send(e)

//    }


// //    user.save().then(()=> {
// //         res.send(user)
// //    }).catch((e) => {
// //        res.status(400)
// //         res.send(e)
// //    })

// })


// app.get('/users', async (req,res) => {
//     try{
//         const users = await User.find({})
//         res.send(users)
//     } catch (e){
//         res.status(500).send()
//     }

// // ---------------- Without using async-----------------//
   

// // User.find({}).then((users) => {
//     //     res.send(users)
//     // }).catch((e) => {

//     // })

// })

// app.get('/users/:id', async (req,res) => {
//     const _id = req.params.id
//     try {
//         const user = await User.findById(_id)
//         if(!user){
//             return res.status(404).send
//         }
        
//         res.status(201).send(user)

//     }  catch(e){
//         res.status(500).send(e)
//     }
// })

// app.patch('/users/:id', async (req,res) => {
    
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['name','email', 'password', 'age']
//     const isValidOperation = updates.every((update) =>  allowedUpdates.includes(update))

//     if(!isValidOperation) {
//         return res.status(404) .send ({error: 'Invalide operation'})
//     }
   

//     try{

//         const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

//         if(!user) {
//             return res.status(404).send()
//         }
//         res.send(user)

//     }catch(e) {

//         res.status(400)

//     }

// })

// app.delete('/users/:id', async (req,res) => {

//     try{
//         const user = await User.findByIdAndDelete(req.params.id)
//         if(!user){
//             res.status(404).send("No user found")
//         }
//         res.status(201).send(user)

//     }catch(e){
//         res.status(400).send(e)
//     }



// })
    

//     // User.findById(_id).then((user) => {
//     //         if(!user){
//     //             return res.status(404).send()
//     //         }


//     //         res.send(user)

//     // }).catch((e) => {
//     //     res.status(500).send()
//     // })

////////////////////////------------------------------ TILL HERE -------------------------////////////////////////////



///////////////////////------------------------------- This file goes to task_manager/src/routers/task.js ----------------------//////////////////////////////////////////////////////

// app.get('/tasks', async (req,res) => {
//     try {
//         const task = await Task.find({})
//         res.status(201).send(task)
//     } catch(e){
//         res.status(400).send(e)
//     }
    



//     // Task.find({}).then((tasks) => {
//     //     res.status(200).send(tasks)

//     // }).catch((e) => {
//     //     res.status(500).send(e)
//     // })

// })

// app.patch('/tasks/:id', async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['description','completed']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
        
//         if(!isValidOperation) {
//            return  res.status(404).send({Error: "cannot find the property"})
//         }
   

//     try {
//         const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

//         if(!task){
//             return res.status(400).send()
//         }
//         res.send(task)
//     } catch (e) {
//         res.status(400).send(e)
//     }

    

// })


// app.post('/tasks', async (req,res) => {

//     const task = await new Task(req.body)
//     try{
//          task.save()
//         res.status(201).send(task)
//     }catch(e) {
//         res.status(400).send(e)
//     }


//     // const task = new Task(req.body)
//     // task.save().then(() => {
//     //     res.send(task)
//     // }).catch((e) => {
//     //     res.send("Error")
//     // })
    



//     //user.save().then(()=> {
//         //         res.send(user)
//         //    }).catch((e) => {
//         //        res.status(400)
//         //         res.send(e)
//         //    })
    
// })

// app.get('/tasks/:id', async (req,res) => {
//     const _id = req.params.id
   
   
//     try{
//         const task = await Task.findById(_id)
//             if (!task) {
//                 return ("no task was found")
//             }
//             else{  
//          res.status(201).send(task)
//             }

//     }catch(e) {
//         res.status(400).send(e)
//     }

//     // Task.findById(_id).then((tasks) => {
//     //         if(!tasks){
//     //             return res.status(404).send(tasks)
//     //         }


//     //         res.send(tasks)

//     // }).catch((e) => {
//     //     res.status(500).send(e)
//     // })


// })

// app.delete('/tasks/:id', async (req,res) => {
    

//     try{
//         const task = await Task.findByIdAndDelete(req.params.id)
//          if(!task){
//              res.send("no taks found")
//          }
//          res.status(201).send(task)
//     } catch(e){
//         res.send(e)
//     }
// })


app.listen (port,()=>{
    console.log("server is started in:  "+ port)
})