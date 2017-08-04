

var  colors = require('colors');
var  path = require('path');
var  fs = require('fs');
var  _ = require('lodash');
var  glob = require('glob');
var rl = require('readline')
var  fse = require('fs-extra');

var  local = path.join.bind(path, __dirname);

var  basePath = path.join.bind(path, process.cwd());

module.exports = function (){
	var o = local('**/**');
	glob("**/*.js", function (er, files) {
		_.each(files, function(file){
				var path = basePath(file);
		        var stream = fs.createReadStream(path, 'utf8');
		        stream.on('data', function(chunk) {
		            console.log(chunk.toString());
		        });
		})

	})

}

