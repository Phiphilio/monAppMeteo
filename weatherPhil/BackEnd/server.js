const express = require ('express')
const app = express()
const port = 5000

app.get('/',(req,res)=>{
    res.send('hello world')
    }
  )

app.listen(port, ()=> {
    console.log("le serveur écoute au port 5000")
    console.log("et il écoute très bien même")
    }
 )