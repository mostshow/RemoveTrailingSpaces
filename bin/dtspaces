#!/usr/bin/env node


const dtspaces= require('../index.js');
const program = require('commander');
const args = process.argv.slice(2);
const path = process.cwd();

program
  .version('0.1.0')
  .usage(' dtspaces <dir>')
  .parse(process.argv);
const run = function(args){
    if(args.length < 1){

        console.error(' Usage: dtspaces source');

        process.exit(1);
    }else{
	    try {
	        dtspaces(args[0], function (err) {
	            if (Array.isArray(err)) {
	                console.error('There were errors during the contrast.');
	                err.forEach(function (err) {
	                    console.error(err.stack || err.message);
	                });
	            }else if (err) {
	                console.error('An error has occurred.');
	                console.error(err.stack || err.message);
	            }
	        });
	    } catch (e) {
	        console.error((e))
	        process.exit(1);
	    }
	}
};

run(args)