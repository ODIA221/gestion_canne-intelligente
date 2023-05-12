const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
// Express APIs
const api = require('/server/controllers/user.ctrl')



/* connexion bd */
const url = mongoose  
  .connect("mongodb+srv://aissatou7:766021841Fall@cluster0.wayru7i.mongodb.net/test")
  .then((x) => {
    console.log(`Vous êtes connecté à la base de donnée : "${x.connections[0].name}"`)
  })
  .catch((err, client) => {
    console.error('Erreur de connexion à mongo', err.reason)
  })


// Express settings
const app = express()
/* cors */
app.use(cors());


/* encoding urls */
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//formatage datas 
/* app.use(bodyParser.json()) */
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
  
// Serve static resources
app.use('/api', api)

// Error favicon.ico
app.get('/favicon.ico', (req, res) => res.status(204))

// Define PORT
const port = process.env.PORT || 5000

const servers = require('http').createServer(app)
 servers.listen(port, () => {
  console.log('Écoute sur le port : ' + port)
})

// Express error handling
app.use((req, res, next) => {
  setImmediate(() => {
    next(new Error('Veuillez vérifier vos requettes'))
  })
})

app.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)

  io = require('socket.io')(servers,
    {
        cors:
        {
            origin: "*",
            methods: ["PUT", "GET", "POST", "DELETE", "OPTIONS"],
            credentials: false
        }
    });
})
  
    const SerialPort = require('serialport');
    const port2 = new SerialPort('/dev/ttyACM0', { baudRate: 9600} )
    const { ReadlineParser } = require('@serialport/parser-readline');
    const parser = port2.pipe(new ReadlineParser({ delimiter: '\r\n' }))
  
  
    parser.on("data", (data) => {
   var humsol = data.split("/");
  
        io.emit("data", {humsol: humsol);
    });


 
   

  

 






