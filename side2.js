

var Gun = require( './' );

var gunOpts = {peers:["ws://localhost:7734/gun"], file:'notnull.services' };
var gun = Gun( gunOpts );

	var svc = gun.get( 'Services' ).path( "registry" );

	svc.map().val( function(val,field){
		console.log( "client received his own service request", val, field  );
		//this.put( { serviceID: "1234" } );
	}).not( ()=>{ console.log( "nothing yet" ); } )
	svc.map( function(val,field){
		console.log( "client map received his own service request", val, field  );
		//this.put( { serviceID: "1234" } );
	}).not( ()=>{ console.log( "nothing yet" ); } )
	// shouldn't have to do a put... just here for later testing... doesn't help.


	setTimeout( ()=>{ svc.put( { serviceName : "Chat" } ); }, 1000 );

	setTimeout( ()=>{ svc.put( { serviceName : "Firewall" } ); }, 1000 );
	setTimeout( ()=>{ svc.put( { serviceName : "Otherthing" } ); }, 1000 );

