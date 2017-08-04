#!/usr/bin/env node


const drf= require('../index.js');
const program = require('commander');
const args = process.argv.slice(2);
const path = process.cwd();

program
  .version('0.1.0')
  .usage(' dtspaces <dir>')
  .parse(process.argv);
console.log(args)