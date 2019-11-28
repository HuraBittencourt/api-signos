# api-signos

This project is a simple api to retrive the sign by passed date. <br>
We are using **Expressjs** as framework to **Node.js**.<br> Also, we are using **MongoDB** to our database.<br>
To test the application we are using **Jest** and **Supertest** to test the endpoint.

### To see the api running and working, follow the above command to run the aplication and the endpoint available:

## Endpoint available:
`/` 
<br>
Will just return *Hello World*
<br>
<br>
`/signo/:name/:birthdate`
<br>
Will return an object with the sign by passed date
* An example: `/signo/Ale/06-14-1900` <br>
**Returns:** `{ "starSign": "Gemini"}`

## If you want

You can set your environment variables to:
* Port application: **process.env.PORT**
* Url that will run your application: **process.env.URL_SERVICE**
* MongoDB hostname: **process.env.HOSTNAME**

## Available Scripts

In the project directory, you can run:

### `node index.js`

Runs the api.<br>
By default, this will run on<br>
[http://localhost:3000](http://localhost:3000)


### `nodemon index.js`

Runs the api by automatically restarting the node application when file changes in the directory are detected<br>
By default, this will run on.<br>
[http://localhost:3000](http://localhost:3000)

### `npm test`

Runs the **Controller** and **Integration** tests.

### `npm run test:watch`

Runs the `--watchAll` command that will automatically run the tests when a test file changes.