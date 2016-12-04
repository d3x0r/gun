
var Gun = require( './' );
var gunOpts = {peers:["ws://localhost:7734/gun"], file:'notnull' };
var gun = Gun( gunOpts );

var wakeup = gun.get( 'nothing' );

wakeup.map().val( (val,field)=>{ console.log( "new field: ", field, "=", val ); } );
wakeup.path( "Services" ).map().val( (val,field)=>{ console.log( "service Request: ", field, "=", val ); } );

wakeup.path( "asdf" ).put( {property:"notnull"} );
