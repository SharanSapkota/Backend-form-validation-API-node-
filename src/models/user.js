
const validator = require('validator')
const mongoose = require('mongoose')

const User = mongoose.model('user',{
    name:{
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
    //     validate(value){
    //         if (value.length<6){
    //             throw new Error("Passwords must be more than 6 characters")
    //     }
    // },
    

    validate(value){
        if (value.toLowerCase().includes('password')){
            throw new Error('Password cannot contain the word password')
        }
    }
    },
    email:{
        type:String,
        required: true,
        
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email not valid")
            }
        }
    },
    age:{
        type: Number,
        validate(value){
            if(value<0){
                throw new Error('Age must be positive')
            }
        }
    }

})


module.exports = User
