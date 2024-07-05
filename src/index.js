import Hashmap from './hashMap'

// Create a new instance of HashMap and set the load factor to be 0.75
const test = new Hashmap();

// Populate the hash map with the given data
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

// Test overwriting existing keys
test.set('apple', 'green');
test.set('banana', 'red');

// Add new key to exceed load factor and trigger resize
test.set('moon', 'silver');

// Test if other methods work after resizing
console.log(test.length()); // Should reflect the number of unique keys
console.log(test.keys()); // Should list all keys
console.log(test.values()); // Should list all values
console.log(test.entries()); // Should list all key-value pairs
console.log(test.get('moon')); // Should return 'silver'
console.log(test.has('lion')); // Should return true
console.log(test.has('tiger')); // Should return false
test.delete('dog');
console.log(test.has('dog')); // Should return false
test.clear();
console.log(test.length()); // Should return 0