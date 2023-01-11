'use strict';

const { LinkedList } = require('../challenge05-LinkedList/LinkedList');
const { bst, bst2 } = require('../Trees/trees');

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

const repeatedWord = (str) => {
  const hashTable = new HashTable(1024);
  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    if (hashTable.has(word)) {
      return word;
    }
    hashTable.set(word, word);
  }
  return null;
};

console.log(repeatedWord('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...'));

//tree-intersection
const treeIntersection = (tree1, tree2) => {
  const treeTable = new HashTable(1024);
  let results = [];
  let current1 = tree1.root;
  let current2 = tree2.root;

  if (!current1 || !current2) {
    return results;
  }

  const traverse = node => {
    treeTable.set(node.value, 1);

    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
  };
  traverse(current1);

  const traverse2 = node => {
    if (treeTable.has(node.value)) {
      results.push(node.value);
    }
    if (node.left) {
      traverse2(node.left);
    }
    if (node.right) {
      traverse2(node.right);
    }
  };
  traverse2(current2);
  return results;
};

console.log(treeIntersection(bst, bst2));

module.exports = HashTable;



// //OR USING A MAP - SEEMS WAY EASIER lol
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

