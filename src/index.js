const express = require('express');
const swaggerUI = require('swagger-ui-express');

const docs = require('./docs');

const app = express();

app.use('/', swaggerUI.serve, swaggerUI.setup(docs));

const port = process.env.npm_package_config_port || 4040;
app.listen(port, () => console.log(`Docs running on port ${port}...`));
