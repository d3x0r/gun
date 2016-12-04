

var Gun = require( './' );

var gunOpts = {peers:["ws://localhost:7734/gun"], file:'notnull.services' };
var gun = Gun( gunOpts );

	var svc = gun.get( 'Services' ).path( "registry" );

	svc.map().val( function(val,field){
		console.log( "received service request", val, field  );
		//this.put( { serviceID: "1234" } );
	}).not( ()=>{ console.log( "nothing yet" ); } )
	// shouldn't have to do a put... just here for later testing... doesn't help.
	svc.put( { serviceName : "Chat" } );

	svc.put( { serviceName : "Firewall" } );
	svc.put( { serviceName : "Otherthing" } );
