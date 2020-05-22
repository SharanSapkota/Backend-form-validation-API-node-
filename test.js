const dowork = (callback)=>{
    setTimeout(()=>{
        callback("heyyyiii! it worked")

    },2000)
    

}

dowork((error,result)=>{
    if (error){
        console.log(error)
    }
 
console.log(result)

})