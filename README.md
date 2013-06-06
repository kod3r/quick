####Simple local file JSON storage    
Saves to settings.json by default.  Single function getset(k, v).  Asynchronous.

````
var simpledb = require('./quick.js')();

// or using npm
$ npm install quick-store
var simpledb = require('quick-store')();
//

// Set value - saves to JSON file
simpledb.getset('key', 'value', function(o){
   console.log(o);
});

// Get value
simpledb.getset('key', function(s){
   console.log(s);  // 'value'
});
````

####Alternate file name..
````
var simpledb = require('./quick.js')('./mydb.json');
````

####Test
````
$ node tests
````