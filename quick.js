module.exports = function(fn, app){
	var fs = require('fs')
		, fn = fn || './settings.json';

	function dogetset(n, v, cb){
		if(typeof v === 'function'){
					fs.readFile(fn, function(e, r){
						if(e) throw e;
						v(JSON.parse(r)[n]);
					})
		} else {
					fs.readFile(fn, function(e, r){
						if(e) throw e;
						var obj = JSON.parse(r);
						obj[n] = v;
						fs.writeFile(fn, JSON.stringify(obj, null, 4), function(e, r){
							if(e) throw e;
							if(cb) cb(obj);
						})
					})
		}
	}

	return {
		getset: function(n, v, cb){
				fs.exists(fn, function(r){
					console.log(r)
					if(!r){
						fs.writeFile(fn, JSON.stringify({}, null, 4), function(e, r){
							if(e) throw e;
							dogetset(n, v, cb);
						})
					} else {
						dogetset(n, v, cb);
					}
				})
		}
	}
}