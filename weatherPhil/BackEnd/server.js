const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');;
const routesTest = require('./routes/routes')

//lance le projet en mode développeur (mpn run dev)
// récupère les informations passées en variables d'environnements
dotenv.config()

const app = express()

//j'utilise cors
app.use(cors());

app.use(bodyParser.json());
const port = 5000

//connexion à la base de donnée(MongoDB Atlas)
mongoose.connect(process.env.MONGO_URI,  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB est connectée'))
           .catch(err => console.log(err));

const logger = (req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} - ${req.url}`);
  next(); // Passe au middleware suivant ou au gestionnaire de route
};
//test
app.use('/routes',logger,routesTest)
//routes
app.get('/',(req,res)=>{
    res.send('hello world')
    }
  )
app.post ('', (req,res)=>{
    res.send('goodby world')
    }
)
app.listen(port, ()=> {
    console.log("le serveur écoute au port",port)

    }
 )