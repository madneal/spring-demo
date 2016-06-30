var fs = require('fs');
var exec = require('child_process').exec,child;
var path = require('path');
var fsDir = 'C:\\jboss-eap-6.4\\standalone\\tmp\\vfs';
var fileName = 'deployment-to-be-deleted';
fs.readdir(fsDir,function(err,files) {
	if (err) {
		console.log(err);
	}
	else {
		files = files.filter(function(ele) {
			return ele.indexOf(fileName) !== -1;
		});
		files.forEach(function(file) {
			var filePath = path.normalize(fsDir+'\\'+file);
			deleteFolderRecursive(filePath);

		});
		console.log('the delete process is finished!')
	}
});

function deleteFolderRecursive(path) {
	var files = [];
	console.log('we are currently deleting folder:'+path);
	if( fs.existsSync(path) ) {

	    files = fs.readdirSync(path);

	    files.forEach(function(file,index){

	        var curPath = path + "/" + file;

	        if(fs.statSync(curPath).isDirectory()) { // recurse

	            deleteFolderRecursive(curPath);

	        } else { // delete file

	            fs.unlinkSync(curPath);

	        }

	    });

	    fs.rmdirSync(path);

	}
}