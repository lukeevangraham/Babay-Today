require("dotenv").config();
exports.dbConfig = {
  development: {
    username: "root",
    password: "root",
    database: "babyblogger",
    host: "localhost",
    port: "8889",
    dialect: "mysql"
  },
  test: {
    username: process.env.TEST_USERNAME,
    password: process.env.TEST_PASSWORD,
    database: process.env.TEST_DB,
    host: process.env.TEST_PASSWORD,
    port: process.env.TEST_PORT,
    dialect: "mysql"
  },
  production: {
    // "use_env_variable": "JAWSDB_URL",
    // "dialect": "mysql"
    username: 'u44h3q2k9lqyvexo',
    password: 'feis9tvse71veykb',
    database: 'qmjmnm0yyv0xwcj2',
    host: 'x3ztd854gaa7on6s.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: '3306',
    dialect: "mysql"
  }
};