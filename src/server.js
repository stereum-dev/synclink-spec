const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const swaggerDocument = YAML.load("./src/_build/openapi.yaml");

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.npm_package_config_port || 4040;
app.listen(port, () => console.log(`Docs running on port ${port}...`));
