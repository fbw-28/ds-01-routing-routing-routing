const {port} = require("./settings");

module.exports = app =>{
    app.listen(port,(err)=>{
        if (err){
            console.log(err.message)
        }
        console.log(`Server listening on port: ${port}`)
    })
}