var Su = require('u-su'),
    unique = require('u-rand').unique,
    
    family = Su(),
    face = Su(),
    
    Font;

Font = module.exports = function Font(){
  var i;
  
  this[family] = 'font-' + unique();
  for(i = 0;i < arguments.length;i++) this.add(arguments[i]);
};

Object.defineProperties(Font.prototype,{
  
  toString: {value: function(){
    return this[family];
  }},
  
  add: {value: function(data){
    var ff = data[face],
        url;
    
    if(!ff){
      url = data.url;
      delete data.url;
      
      ff = data[face] = new FontFace(this[family],'url("' + encodeURI(url) + '")',data);
    }
    
    document.fonts.add(ff);
  }},
  
  delete: {value: function(data){
    document.fonts.delete(data[face]);
  }}
  
});
