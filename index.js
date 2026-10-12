const express = require('express')
const app = express()

app.get('/',(req,res) => {
    return res.json({message: "Hello from express server"})
})

app.listen(9000,()=>{
    console.log('server is running on port 9000')
})