var express = require('express')
var mysql = require('mysql')

var app = express()

app.get('/',(req,res)=>{
    res.send(" RUTA PRINCIPAL  http://localhost:3000")

})

const port= process.env.port || 3000;
app.listen(port,()=>{
    console.log(" SERVER UP")
    console.log(" RUTA PRINCIPAL  http://localhost:"+port)
})