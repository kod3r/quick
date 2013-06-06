// test output to console.log using TAP format

function tap_output(pass, msg){
	   console.log((pass ? 'ok ':'not ok ') + ++testnum + ' - ' + msg); 
}

console.log('1..1');
var db = require('./quick.js');

db.getset('key', 'value', function(){
     db.getset('key', function(v){
          tap_output(v === 'value', 'getset("key", "value")');
          require('fs').unlinkSync('./settings.json');
     });
});
