const express = require('express');
const SignoController = require('./controllers/signo');
const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, response) => {
    response.send('Hello World!');
});

app.get('/signo/:name/:birthdate', (req, response) => {
    const { name, birthdate } = req.params;
    const teste = SignoController.getSigno(birthdate)
    response.send(teste.true);
});


app.listen(port, () => console.log(`Escutando porta ${port}... http://localhost:${port}`));