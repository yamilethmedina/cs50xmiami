function add(a, b) {
	return a + b;
}

function del(a, b) {
	return a - b;
}

module.exports = { add, del }; // new syntax: ECMAScript 6
module.exports = { add: add, del: del }; // traditional ECMAScript 5