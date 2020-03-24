// importação do Framework Express
const express = require('express') 

//instanciando aplicação
const  app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana do OmniStack',
        aluno: 'Abdhala Haissan'

    });
});

//porta de execução da aplicação
app.listen(3333);

