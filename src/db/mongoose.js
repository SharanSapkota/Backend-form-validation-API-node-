
// const validator = require('validator')
const mongoose = require('mongoose')
mongoose.set('useUnifiedTopology', true);// same thing as the srt object holds 

const srt = {
    useNewUrlParser: true,
    useCreateIndex: true,
    //useUnifiedTopology: true  //line:2
    useFindAndModify: false
    }
mongoose.connect('mongodb://127.0.0.1:27017/task_manger_api',srt)

// const User = mongoose.model('user',{
//     name:{
//         type: String,
//         required: true,
//         trim: true
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         //minlength: 6,
//         validate(value){
//             if (value.length<6){
//                 throw new Error("Passwords must be more than 6 characters")
//         }
//     }, 

//     validate(value){
//         if (value.toLowerCase().includes('password')){
//             throw new Error('Password cannot contain the word password')
//         }
//     }
//     },
//     email:{
//         type:String,
//         required: true,
        
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error("Email not valid")
//             }
//         }
//     },
//     age:{
//         type: Number,
//         validate(value){
//             if(value<0){
//                 throw new Error('Age must be positive')
//             }
//         }
//     }

// })

// const me = new User({
//     name: 'Sharan2',
//     age: 26,
//     email: 'sapkotarambbo@gmail.com',
//     password: 'sapkota'
// })

// me.save().then((me)=>{
//     console.log(me)

// }).catch((error)=>{

//     console.log(error)
// })

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Task = mongoose.model('tasks',{
    description: {
       required: true,
        type: String,
           trim: true
    },
    completed: {
        default: false,
        type: Boolean
    }

})

module.exports = Task

// const my = new Task ({
//     description: 'Cleaning the bed',
//     completed: false
// })
// my.save().then((my)=>{
//     console.log(my)
// }).catch((error)=>{
//     console.log(error)
// })