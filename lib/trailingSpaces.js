

var colors = require('colors');
var path = require('path');
var fs = require('fs');
var _ = require('lodash');
var glob = require('glob');
var rl = require('readline')
var fse = require('fs-extra');
var readline = require('readline');
var os = require('os');

var local = path.join.bind(path, __dirname);
var basePath = path.join.bind(path, process.cwd());
colors.setTheme({ prompt: 'grey', info: 'green', data: 'grey', warn: 'yellow', debug: 'blue', error: 'red' });

module.exports = function (source, callback){
	var o = basePath(source + "/**/*.js");
	glob(o, function (er, files) {
		_.each(files, function(file){
				var temp = file+'.tmp';
				var fWrite = fs.createWriteStream(temp, 'utf8');
				var fRead = fs.createReadStream(file, 'utf8');
				var objReadline = readline.createInterface({
				    input: fRead,
				});
				console.log('read '.info+file.data);
				objReadline.on('line', (line)=>{
				    fWrite.write(line.replace(/\s*$/g,'') + os.EOL);
				});
				objReadline.on('close', ()=>{
				    console.log('write '.info+file.data);
					fse.move(temp, file, { overwrite: true }, err => {
					  if (err) return console.error(err)

					  console.log('done! '.info)
					})
				});
		        // stream.on('data', function(chunk) {
		        //     console.log(chunk.toString());
		        // });
		})

	})

}
