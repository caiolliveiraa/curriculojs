
const promise = require('bluebird');
const options = {
    // Configurações da conexão com o banco de dados
    host: 'localhost',        
    port: 5432,               
    database: 'curriculo', 
    user: 'postgres',     
    password: '2405'    
};

const pgp = require('pg-promise')({ promiseLib: promise });
const db = pgp(options);

// Verifica a conexão com o banco de dados
db.connect()
    .then(obj => {
        obj.done(); 
        console.log('Conexão com o banco de dados PostgreSQL bem-sucedida.');
    })
    .catch(error => {
        console.error('Erro ao conectar ao banco de dados PostgreSQL:', error);
    });

module.exports = db;
