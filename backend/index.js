const express = require('express');

const app = express();

app.get('/' , (request, response) => {
    return response.json({
        evento: "semana Omnistack 11.0",
        aluno: "luis"
    })
})

app.listen(3333)

