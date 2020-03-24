const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack Aula 1',
        aluno: 'Matheus Anciloto'
    });
});

app.listen(3333);

