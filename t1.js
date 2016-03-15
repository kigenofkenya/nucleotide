var fs = require('fs');
var Q = require('Q');
var path = require('path');
var fsys = require('file-system');

var fs_mkdir = Q.denodeify(fs.mkdir);
var fs_writeFile = Q.denodeify(fs.writeFile);
var fs_readdir = Q.denodeify(fs.readdir);

// module.exports = function (str, opts) {
//   console.log('t1 module');
//   console.log(path.resolve('./')); //path of caller
//   console.log(path.resolve(__dirname)); //path of module
// };

var strU = require(__dirname+'/str_utils.js');

module.exports = function (str, opts) {
var tmplpackage = {
      "name": "fill me in!",
      "version": "0.0.1",
      "description": "",
      "main": "main.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "dependencies": {
      }
    };  
  // console.log('t1 module');
  // console.log(path.resolve('./')); //path of caller
  // console.log(path.resolve(__dirname)); //path of module
  var templatedir = path.normalize(__dirname+'/../template');
  var appName = str;
  Q.when()
    .then(function(){
      return fs_readdir.call(fs, templatedir)
        .catch(function(ex){
          console.log('catch err...no tmpldir');
        });
    }).then(function(files){
      if(files&&files.length>0){
        console.log('copying file template');
        // ToDo: copy template
        // return;
        fsys.copySync(
          templatedir,
          './'+appName,
          {
            noProcess: ['package.json'],
            process: function(contents, filepath) {
            }
          }
        );
      }else if(!files || files.length==0){
        console.log('generating from basic template');
        return fs_mkdir.call(fs, './'+appName)
          .then(function(err, written, buffer){
            var mainjs = fs.readFileSync(__dirname+'/tmpls/main.js').toString();
            return fs_writeFile.call(fs, './'+appName+'/main.js', mainjs);
        }).then(function(err, written, buffer){
          return fs_mkdir.call(fs, './'+appName+'/renderer');
        }).then(function(err){
          // return fs_mkdir.call(fs, './'+appName+'/renderer/html')
        }).then(function(err){
      var indexhtml = strU.globalReplace(fs.readFileSync(__dirname+'/tmpls/renderer/index.html').toString(),["%%- PAGE_TITLE -%%"],[appName]);
          return fs_writeFile.call(fs, './'+appName+'/renderer/index.html', indexhtml);
        }).then(function(err, written, buffer){
          console.log('make js libs');
            var rendererjs = fs.readFileSync(__dirname+'/tmpls/renderer/renderer.js').toString();
            return fs_writeFile.call(fs, './'+appName+'/renderer/renderer.js', rendererjs);         
          // return fs_mkdir.call(fs, './'+appName+'/renderer/js')
        }).then(function(err){
          console.log('make css libs');
            var renderercss = fs.readFileSync(__dirname+'/tmpls/renderer/renderer.css').toString();
            return fs_writeFile.call(fs, './'+appName+'/renderer/renderer.css', renderercss);         
          // return fs_mkdir.call(fs, './'+appName+'/renderer/css')
        });
      }else{
        process.exit(0);
      }
    }).finally(function(){
      var thispackage = tmplpackage;
      thispackage.name = appName;
      //tmplpackage goes here
      fs.writeFile('./'+appName+'/package.json', JSON.stringify(thispackage, null, '  '),function(err){
      });
      console.log('done making new app!');
    }).catch(function(ex){
      console.log(ex.message);
      console.log('ERRROR on full stack!');    
    });

};


// strU.singleReplace(src_str1,["first", "last"],["1st", "X"]);
//globalReplace(src_str1,["line"],["gloline"]);
// console.log(fs.readFileSync('./tmpls/basic.html').toString());

// var outpage = strU.globalReplace(fs.readFileSync('./tmpls/basic.html').toString(),["%%- PAGE_TITLE -%%"],["thisapp"]);
// console.log(outpage);

// genRator('testEapp');