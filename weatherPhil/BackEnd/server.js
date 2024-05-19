const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// récupère les informations passées en variables d'environements
dotenv.config()

const app = express()
app.use(bodyParser.json());
const port = 5000

//connexion à la base de donnée(MongoDB Atlas)
mongoose.connect(process.env.MONGO_URI,  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB est connectée'))
           .catch(err => console.log(err));

//routes
app.get('/',(req,res)=>{
    res.send('hello world')
    }
  )
app.post ('', (req,res)=>{
    res.send('hello world')
    }
)
app.listen(port, ()=> {
    console.log("le serveur écoute au port 5000")

    }
 )