console.log('Hello');

setTimeout(function(){
	console.log('World')
}, 2000);

setTimeout(function(){
	console.log('world')
}, 2000);

console.log('...')

// runs thru everything first, parses, then calls them in order
// FIFO
// asyncronysity 