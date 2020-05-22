const Task = require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5ebd26c4335a83417831477a',{
//     age: 31
// }).then((user)=> {
//     console.log(user)
//     return User.countDocuments({ age: 31})
// }).then ((result)=> {
//     console.log(result)

// }).catch((e) => {
//     console.log(e)
// })


////////////---------- find and remove and check the remaining data-------------//////////////

// User.findByIdAndDelete('5ebd2649d026bf0650a3863e').then((user)=> {
//     console.log(user)
//     return User.countDocuments({age: 26})
// }).then((result)=> {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// const updateAgeAndCount = async (id, age) => {
//     const user = await User.findByIdAndUpdate(id, { age})
//     const count = await User.countDocuments({age})
//     return count
// }

// updateAgeAndCount('5eba601cc261063754797c35', 2).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {  
const task = await Task.findByIdAndDelete(id)
const count = await ( Task.countDocuments({completed: false}))
return count
}

deleteTaskAndCount('5eb77b00a27d0c3d70ced744').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})