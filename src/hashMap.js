class HashMap {
    constructor(initialCapacity = 16, loadFactor = 0.75) {
        this.capacity = initialCapacity;
        this.loadFactor = loadFactor;
        this.map = new Array(this.capacity);
        this.size = 0;
    }

    // Hash function to generate a hash code for a given key
    hash(key) {
        let hash = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hash = primeNumber * hash + key.charCodeAt(i);
        }
        return hash % this.capacity;
    }

    // Method to set a key-value pair
    set(key, value) {
        if (this.size / this.capacity >= this.loadFactor) {
            this.resize();
        }
        const hashCode = this.hash(key);
        if (!this.map[hashCode]) {
            this.map[hashCode] = [];
        }
        const bucket = this.map[hashCode];
        const existingPairIndex = bucket.findIndex(pair => pair.key === key);
        if (existingPairIndex !== -1) {
            bucket[existingPairIndex].value = value;
        } else {
            bucket.push({ key, value });
            this.size++;
        }
    }

    // Method to get the value for a given key
    get(key) {
        const hashCode = this.hash(key);
        const bucket = this.map[hashCode];
        if (bucket) {
            const pair = bucket.find(pair => pair.key === key);
            if (pair) return pair.value;
        }
        return undefined;
    }

    // Method to delete a key-value pair
    delete(key) {
        const hashCode = this.hash(key);
        const bucket = this.map[hashCode];
        if (bucket) {
            const pairIndex = bucket.findIndex(pair => pair.key === key);
            if (pairIndex !== -1) {
                bucket.splice(pairIndex, 1);
                this.size--;
                return true;
            }
        }
        return false;
    }

    // Method to check if a key exists in the hash map
    has(key) {
        return this.get(key) !== undefined;
    }

    // Method to return the number of keys stored in the hash map
    length() {
        return this.size;
    }

    // Method to remove all entries from the hash map
    clear() {
        this.map = new Array(this.capacity);
        this.size = 0;
    }

    // Method to return an array of all keys in the hash map
    keys() {
        return this.map.flat().map(entry => entry.key);
    }

    // Method to return an array of all values in the hash map
    values() {
        return this.map.flat().map(entry => entry.value);
    }

    // Method to return an array of all key-value pairs in the hash map
    entries() {
        return this.map.flat().map(entry => [entry.key, entry.value]);
    }

    // Method to resize the hash map when the load factor is exceeded
    resize() {
        const oldMap = this.map;
        this.capacity *= 2;
        this.map = new Array(this.capacity);
        this.size = 0;

        for (const bucket of oldMap) {
            if (bucket) {
                for (const pair of bucket) {
                    this.set(pair.key, pair.value);
                }
            }
        }
    }
}

// Create a new instance of HashMap and set the load factor to be 0.75
const test = new HashMap();

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