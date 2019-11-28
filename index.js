const express = require('express');
const SignoController = require('./controllers/Sign');
const port = process.env.PORT || 3000;
const url_service = process.env.URL_SERVICE || 'http://localhost';

const app = express();

app.get('/', (req, response) => {
    response.send('Hello World!');
});

app.get('/signo/:name/:birthdate', (req, response) => {
    SignoController.newRegisterController(req, response);
});


app.listen(port, () => console.log(`Escutando porta ${port}... ${url_service}:${port}`));

module.exports = app;