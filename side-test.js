
var processes = [];

// rm notnull hubdata.json notnull.services 

var cp = require( 'child_process' );
var opts = {
  detached: false,
  stdio: 'inherit'
}

console.log( "a" );
processes.push( cp.spawn( "node", ["side0.js"], opts ) );
console.log( "b" );
setTimeout( ()=>{ console.log( "c" ); processes.push( cp.spawn( "node", ["side1.js"], opts ) ) }, 1000 )
setTimeout( ()=>processes.push( cp.spawn( "node", ["side2.js"], opts ) ), 2000 )

setTimeout( ()=>{ console.log( "10 second timeout killall" ); processes.forEach( (p)=>p.kill("SIGKILL") ); processes = null; }, 10000 )

