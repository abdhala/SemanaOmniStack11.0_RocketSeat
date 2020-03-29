const express = require('express');

const routes = express.Router();

/*
 Metodos HTTP:
 GET: Buscar uma informação do BackEnd
 POST: Criar uma infomação no backend
 PUT: Alterar uma informação no Backend
 DELETE: deletar informação no ||


*/

/*
Tipos de Parametro:

Query Params: parametros nomeados enviados na rota após o "?" (Filtros, paginação)

        app.get('/users', (request, response) => {

        // sending Query parms: localhost:3333/users?name=Abdhala&idade=23&genero=Masculino

            const params = request.query;

            console.log(params);

            return response.json({
                evento: 'Semana do OmniStack',
                aluno: 'Abdhala Haissan'

            });
        });

Route Params: parametros utilizados para identificar recursos

        app.get('/users/:id/:name', (request, response) => {

        // sending Route parms: localhost:3333/users/1/Abdhala

            const params = request.params;

            console.log(params);

            return response.json({
                evento: 'Semana do OmniStack',
                aluno: 'Abdhala Haissan'

            });
        });

Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.

        // Para entendimento do JSON para o JavaScript, utilizar sempre no inicio, após a declaração do express.
        app.use(express.json());


        app.post('/users', (request, response) => {

        // sending Route parms: localhost:3333/users/1/Abdhala

            const body = request.body;

            console.log(body);

            return response.json({
                evento: 'Semana do OmniStack',
                aluno: 'Abdhala Haissan'

            });
        });

*/

/*
Banco de dados:

    SQL: MySQL, SQLite,POstegreSQL, Oracle..
    NoSQL: MongoDB, CouchDB

    Driver: SELECT * FROM users
    *Query Builders(KNEX.JS[http://knexjs.org]): table('users').select('*').where()... 

    npm install knex --save
    npm install sqlite3
    
    npx knex init


*/

routes.post('/users', (request, response) => {

    // sending Route parms: localhost:3333/users/1/Abdhala
    
        const body = request.body;
    
        console.log(body);
    
        return response.json({
            evento: 'Semana do OmniStack',
            aluno: 'Abdhala Haissan'
    
        });
    });

    // exportando rotas
    module.exports = routes;