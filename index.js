const express = require('express');
const app = express();

// import config
const config = require('./config.json');

// import database connection
const dbConnect = require('./src/services/dbconnect');

// import routes

// middleware
app.use(express.json());

// config setting
let isProduction = config.setting === 'production';
let useConfig = isProduction ? config.production : config.development;

// databse config settting
if (isProduction) {
  dbConnect({
    username: useConfig.dbConfig.username,
    password: useConfig.dbConfig.password,
    dbName: useConfig.dbConfig.db_name,
  });
} else {
  dbConnect({
    username: useConfig.dbConfig.username,
    password: useConfig.dbConfig.password,
    dbName: useConfig.dbConfig.db_name,
  });
}

// routes

// listen
app.listen(useConfig.serverConfig.port, () => {
  console.log(`listening at localhost:${useConfig.serverConfig.port}`);
});
