import express from 'express';
const router = require('./routes/router');

//Busca os parâmetros salvos no arquivo .dot
require('dotenv').config()

const app = express();
const port = 5000;

// Enable CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Call the function that realize connections on Azure platform.
// main()

// Essa linha faz o servidor disponibilizar o acesso às imagens via URL!
app.use(express.static('assets'));

app.use('/', router);

app.listen(port, () => {
    return console.log(`Server is listening on port ${port}`)
})