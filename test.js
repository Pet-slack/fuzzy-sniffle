const { add, multiply } = require('./math');

function assert(condition, msg) {
	if (!condition) { console.error('FAIL:', msg); process.exit(1); }
	console.log("PASS:", msg);
}

assert(add(2, 3) === 5, 'add(2,3) === 5');
assert(add(-1,1) === 0, 'add(-1,1) === 0');
assert(multiply(3,4) === 12, 'multiply(3,4) === 12');
console.log('✅ All tests passed!')
