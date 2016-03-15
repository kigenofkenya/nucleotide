

//replace from array
String.prototype.replaceArray = function(find, replace) {
  var replaceString = this;
  for (var i = 0; i < find.length; i++) {
    replaceString = replaceString.replace(find[i], replace[i]);
  }
  return replaceString;
};
//global (All occurences) replace from array
String.prototype.globalreplaceArray = function(find, replace) {
  var replaceString = this;
  var regex; 
  for (var i = 0; i < find.length; i++) {
    regex = new RegExp(find[i], "g");
    replaceString = replaceString.replace(regex, replace[i]);
  }
  return replaceString;
};

module.exports = {

 singleReplace: function(src_str,find,replace){
  var out_str = src_str.replaceArray(find, replace);
  return out_str ; 
},

globalReplace: function (src_str,find,replace){
  var out_str = src_str.globalreplaceArray(find, replace);
  return out_str; 
}
};


//a test string
// var src_str1 =
// `first line
// last line`
// ;
//singleReplace(src_str1,["first", "last"],["1st", "X"]);
//globalReplace(src_str1,["line"],["gloline"]);