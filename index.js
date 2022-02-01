const express = require ('express');
const Database = require ('./mysqlcon');

var cors = require ('cors');
const app = express();
app.use(cors());
const port = 3001;

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Servidor OK !!!');
})

app.get('/administrador', (req, res)=>
{ 
    const db= new Database()
    const cn=db.getConnection()
    cn.execute(
        'SELECT * FROM administrador', [],
        function(err, results, fields) {      
          res.json(results)      
        }
      );   
      
 
})

app.post('/administrador', (req, res) => {

    const body = req.body;
    const db = new Database()
    const cn = db.getConnection()
    const query = `INSERT INTO ADMINISTRADOR 
                (id, nombre, contrasena, email) values
                 (?,?,?,?)`
    cn.execute(
        query, [body.id, body.nombre, body.contrasena, body.email],
        function (err, results, fields) {
            if (err) {
                res.status(500).json({
                    message: err.message
                })
            }
            else {
                res.json(body)
            }
        }
    );

})
app.get('/usuarios', (req, res)=>
{ 
    const db= new Database()
    const cn=db.getConnection()
    cn.execute(
        'SELECT * FROM usuarios', [],
        function(err, results, fields) {      
          res.json(results)      
        }
      );   
      
 
})

app.post('/usuarios', (req, res) => {

    const body = req.body;
    const db = new Database()
    const cn = db.getConnection()
    const query = `INSERT INTO USUARIOS 
                (id, nombre, contrasena, email) values
                 (?,?,?,?)`
    cn.execute(
        query, [body.id, body.nombre, body.contrasena, body.email],
        function (err, results, fields) {
            if (err) {
                res.status(500).json({
                    message: err.message
                })
            }
            else {
                res.json(body)
            }
        }
    );

})



app.listen(port, () => {
    console.log('localhost:'+port);
})