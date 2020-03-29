// importação do Framework Express
const express = require('express');

const routes = require('./routes');

//instanciando aplicação
const  app = express();

// Para entendimento do JSON para o JavaScript
app.use(express.json());

app.use(routes);



//porta de execução da aplicação
app.listen(3333);

