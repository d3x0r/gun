
var Gun = require( './' );
var http = require('http');

var port = 7734;
var ip = '0.0.0.0';

var gun = Gun({
	file: 'hubdata.json',
	s3: {
		key: '', // AWS Access Key
		secret: '', // AWS Secret Token
		bucket: '' // The bucket you want to save into
	}
});

var server = http.createServer(function(req, res){
	// how does this care about '/gun'?
	console.log( "connect." );
	if(gun.wsp.server(req, res)){
        console.log( "websock request?" );
		return; // filters gun requests!
	}
	stream.end(); // stream
});
gun.wsp(server);
exports.server = server.listen(port, ip);

// setup events on first path 'asdf' 
var db = gun.get( "asdf" );
gun.on( (val,field)=>{ console.log( "on new field: ", field, "=", val ); } );
gun.map( (val,field)=>{ console.log( "map new field: ", field, "=", val ); } );

// second path services...
gun.get( "Services" ).map().val( (val,field)=>{ console.log( "service Request: ", field, "=", val ); } );



