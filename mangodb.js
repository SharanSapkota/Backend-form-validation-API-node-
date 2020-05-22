//CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient //gives access to the functions require to connect to database

const chalk = require('chalk')

const {MongoClient, ObjectID} = require('mongodb')
 
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager' 


// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser:true,useUnifiedTopology: true, }, (error, client)=>{
    if(error) {

         return console.log("Unabale to connect to database")
        }

        const db = client.db(databaseName) // mongodb automatically created database named task-manager. With this line of code now we can manipulate database

       db.collection('users').updateOne({
                _id: new ObjectID("5eb3dab41d0be1571c12653e")
        },{
            $set: {
                name:'Chandra'

            }
        }).then((result)=>{
            console.log(result)

        }).catch((error)=>{
            console.log(error)
        })



        // db.collection('users').findOne({name: 'Milan'}, (error,user)=> {
        //     if (error){
        //         console.log("error!")
        //     }

        //     console.log(user)

        // })

        // db.collection('users').find({age:26}).toArray((error,users)=>{
        //     console.log(users)

        
      
    })

        // db.collection('users').insertOne({
        //     _id: 1,
        //     name: 'Milan',
        //     age: 27

        // },(error,result)=>{

        //     if (error){
        //         return console.log("unable to insert")
        //     }
        //     console.log( result.ops)
        // })
    

// db.collection('users').insertMany([{

//     name: 'Andrew',
//     age: 32

// },
// {
//     name: 'Nitehs',
//     age: 36

// }], (error, result)=>{
//     if (error){
//         return console.log("unable to insert document")
//     }

//     console.log(result.ops)

// }
// )

// db.collection('tasks').insertMany([{
//     description: "To clean the house",
//     completed: true

// },{

    
//     description: "To wash the dishes",
//     completed: false
// },{
    
// description: "To serve your maid",
// completed: true
// }
// ],(error,result)=>{
//     if (error){
//         console.log("cannot be inserted!!!")

//     }

//     console.log(result.ops)
// })



