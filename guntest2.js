
if( !("window" in this) || !window.Gun )
var Gun = require( './' );

var db1 = Gun( {prefix:"db1", file:"datatest2.json" } );
db1.get( "somewhere" ).put( {data:"in db1"} );
Gun({prefix: "gun/BANANA"}).get('hello').put({hi:'bye'}, cb, {prefix: 'gun/LOL'});
function cb(val,field) { console.log( "gratuitous put callback ", field,"=",val ); }
db1.get( 'hello3').put( {final:"where"} );

