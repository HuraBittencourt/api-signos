const express = require('express');
const SignoController = require('./controllers/signo');
const database = require('./database');
const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, response) => {
    response.send('Hello World!');
});

app.get('/signo/:name/:birthdate', (req, response) => {
    const { name, birthdate } = req.params;
    // const teste = SignoController.getSigno(birthdate)
    const teste = SignoController.newRegister({ name, birthdate });
    teste.then(sign => response.send({ "starSign": sign.starSign }));
});


app.listen(port, () => console.log(`Escutando porta ${port}... http://localhost:${port}`));