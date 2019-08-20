var express = require('express');
var router = express.Router();
const path = require('path');
const packagejson = require('../package.json');
const www = require('../bin/www')
const appRootPath = require('app-root-path');
var ip = require("ip");

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'SBP-TECH' });
  
  res.status(200).json({app:packagejson.name,version:packagejson.version,ip:ip.address(),NODE_ENV:global.env,appRootPath,startedAt:www.appStartedAt})

});

module.exports = router;
