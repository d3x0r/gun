
var Gun = require( './' );
var http = require('http');

var port = 7734;
var ip = '0.0.0.0';

var gunHub = Gun({
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
	if(gunHub.wsp.server(req, res)){
        console.log( "websock request?" );
		return; // filters gun requests!
	}
	stream.end(); // stream
});
gunHub.wsp(server);
exports.server = server.listen(port, ip);



var gunOpts = {peers:["ws://localhost:7734/gun"], file:'notnull' };
var gunClient = Gun( gunOpts );

var wakeup = gunClient.get( 'nothing' );

wakeup.map().val( function(val,field){
	console.log( "Wakeup path", field, val );
} );
wakeup.path( "asdf" ).put( {struct:"notnull"} );


	var svc = gunClient.get( 'Services' ).path( "registry" );

	svc.map().val( function(val,field){
		console.log( "received service request", val, field  );
		//this.put( { serviceID: "1234" } );
	}).not( ()=>{ console.log( "nothing yet" ); } )
	// shouldn't have to do a put... just here for later testing... doesn't help.
	svc.put( { serviceName : "Chat" } );

	svc.put( { serviceName : "Firewall" } );
	svc.put( { serviceName : "Otherthing" } );
