
const express = require('express');
const app = express();
const port = 5432;
const db = require('./db'); 



app.use(express.json());

// Rotas para as entidades (Pessoal, Educação, Experiência, Habilidades)
app.use(require('./routes/pessoal'));
app.use(require('./routes/educacao'));
app.use(require('./routes/experiencia'));
app.use(require('./routes/habilidades'));


app.listen(port, () => {
    console.log(`Servidor está ouvindo na porta ${port}`);
});
