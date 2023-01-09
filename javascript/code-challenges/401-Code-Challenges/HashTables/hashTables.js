'use strict';

const { LinkedList } = require('../challenge05-LinkedList/LinkedList');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    return key.split('').reduce((sum, char) => {
      return sum + char.charCodeAt(0);
    }, 0) * 599 % this.size;
  }

  set(key, value) {
    const hash = this.hash(key);
    if (!this.buckets[hash]) {
      this.buckets[hash] = new LinkedList();
    }
    this.buckets[hash].append({ [key]: value });
  }

  get(key) {
    const hash = this.hash(key);
    if (!this.buckets[hash]) {
      return null;
    }
    let current = this.buckets[hash].head;
    while (current) {
      if (current.value[key]) {
        return current.value[key];
      }
      current = current.next;
    }
    return null;
  }

  has(key) {
    const hash = this.hash(key);
    if (!this.buckets[hash]) {
      return false;
    }
    let current = this.buckets[hash].head;
    while (current) {
      if (current.value[key]) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  keys() {
    const keys = [];
    this.buckets.forEach(bucket => {
      if (bucket) {
        let current = bucket.head;
        while (current) {
          keys.push(Object.keys(current.value)[0]);
          current = current.next;
        }
      }
    });
    return keys;
  }
}

module.exports = HashTable;



//OR USING A MAP
// class HashTable {
//   constructor(size) {
//     this.size = size;
//     this.map = new Map();
//   }

//   hash(key) {
//     return key.split('').reduce((sum, char) => {
//       return sum + char.charCodeAt(0);
//     }, 0) * 599 % this.size;
//   }

//   set(key, value) {
//     const hash = this.hash(key);
//     this.map.set(hash, value);
//   }

//   get(key) {
//     const hash = this.hash(key);
//     return this.map.get(hash) || null;
//   }

//   has(key) {
//     const hash = this.hash(key);
//     return this.map.has(hash);
//   }

//   keys() {
//     return Array.from(this.map.keys());
//   }
// }

