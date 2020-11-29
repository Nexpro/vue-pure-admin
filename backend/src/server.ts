import app from "./app";
import * as open from "open";
import config from './config';
import { user } from "./models/mysql";
import Logger from './loaders/logger';
import { queryTable } from "./utils/initMysql";
const expressSwagger = require('express-swagger-generator')(app);
expressSwagger(config.options)

queryTable(user)

// 引入测试数据
import {   
  login,
  register,
  updateList,
  deleteList,
  searchPage,
  searchVague,
} from "./router/api/mysql"

app.get('/login', (req, res) => {
  login(req, res)
})

app.get('/register', (req, res) => {
  register(req, res)
})

app.get('/updateList', (req, res) => {
  updateList(req, res)
})

app.get('/deleteList', (req, res) => {
  deleteList(req, res)
})

app.get('/register', (req, res) => {
  register(req, res)
})

app.get('/searchVague', (req, res) => {
  searchVague(req, res)
})

app.listen(config.port, () => {
  Logger.info(`
    ################################################
    🛡️  Swagger文档地址: http://localhost:${config.port} 🛡️
    ################################################
  `);
}).on('error', err => {
  Logger.error(err);
  process.exit(1);
});

open(`http://localhost:${config.port}`);  // 自动打开默认浏览器