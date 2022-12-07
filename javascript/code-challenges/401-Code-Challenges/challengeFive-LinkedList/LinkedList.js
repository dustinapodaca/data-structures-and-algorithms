'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // adds an element at the end of the list
  append(val) {
    //creates a new node
    let node = new Node(val);
    let currentNode;
    //if no head exists, we assign the new node as the head and we are done.
    if (!this.head) {
      this.head = node;
      return;
    } else {
      // if the head exists, we traverse the list to the end
      currentNode = this.head; // <-- always the entry point.
      // iterates to the end of the list
      while (currentNode.next) {
        // changing the value of current to the next node in the list
        currentNode = currentNode.next;
      }
      //traverse the linked list and add new nodes to the end.
      currentNode.next = node;
    }
    this.size++; // <-- increment list size;
  }

  insert(val) {
    // creates a new node
    let node = new Node(val);
    // making the new node point to the head
    node.next = this.head;
    // making the head point to the new node
    this.head = node;
    // increment the size of the list
    this.size++;
  }

  includes(val) {
    let currentNode = this.head;
    // a while loop to traverse the linked list
    while (currentNode) {
      if (currentNode.data === val) {
        return true;
      }
      // changing the value of currentNode to the next node in the list
      currentNode = currentNode.next;
      console.log(currentNode);
    }
    // return false if the value is not found
    return false;
  }

  insertBefore(val, newVal) {
    // creates a new node
    let node = new Node(newVal);
    let currentNode = this.head;
    // a while loop to traverse the linked list
    while (currentNode) {
      if (currentNode.next.data === val) {
        node.next = currentNode.next;
        currentNode.next = node;
        this.size++;
        return;
      }
      // changing the value of currentNode to the next node in the list
      currentNode = currentNode.next;
    }
  }

  insertAfter(val, newVal) {
    let node = new Node(newVal);
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next.data === val) {
        node.next = currentNode.next.next.next;
        currentNode.next.next = node;
        this.size++;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  // while(currentNode) {
  //   if (currentNode.next.data !== val) {
  //     return console.log(`Cannot insert ${newVal} after ${val}: Value ${val} not found: `);
  //   } else if (currentNode.next.data === val) {
  //     node.next = currentNode.next.next.next;
  //     currentNode.next.next = node;
  //     this.size++;
  //     return;


  toString() {
    // currentNode is the head of the list
    let currentNode = this.head;
    let string = '';
    // a while loop to traverse the linked list
    while (currentNode) {
      // adding the data of the node to the string
      string += `{ ${currentNode.data} } -> `;
      // changing the value of currentNode to the next node in the list
      currentNode = currentNode.next;
    }
    // adding NULL to the end of the string
    string += 'NULL';
    // returning the string and array
    return string;
  }

  kthFromEnd(k) {
    let currentNode = this.head;
    let size = 0;
    // while loop to traverse the linked list and get the size
    while (currentNode) {
      size++;
      currentNode = currentNode.next;
    }
    let result = size - k;
    if (result < 1 || result > size) {
      return 'Exception';
    }
    currentNode = this.head;
    for (let i = 1; i < result; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.data;
  }

  toArray() {
    // currentNode is the head of the list
    let currentNode = this.head;
    let arr = [];
    // a while loop to traverse the linked list
    while (currentNode) {
      // adding the data of the node to the array
      arr.push(currentNode.data);
      // changing the value of currentNode to the next node in the list
      currentNode = currentNode.next;
    }
    // returning the string and array
    return arr;
  }
}

//instantiation of empty LinkedList
let list = new LinkedList();
// calling the insert method to add data to the head of the list
list.insert('c');
list.insert('b');
list.insert('a');
list.append('d');
list.append('e');
list.insert('f');
list.insertBefore('a', 'x');
list.insertAfter('c', 'z');
// list.insertBefore('i', 'w');
// list.insertAfter('j', 'z');
// { f } -> { a } -> { b } -> { c } -> { d } -> { e } -> NULL
let listIncludes = list.includes('b');
let listToString = list.toString();
let listToArray = list.toArray();
let listKthFromEnd = list.kthFromEnd(2);
console.log(list);
console.log(list.size);
console.log(listIncludes);
console.log(listToString);
console.log(listToArray);
console.log('kthFromEnd:', listKthFromEnd);
console.log(JSON.stringify(list));

// stand-alone function to traverse the linked list
const traverse = (list) => {
  let current = list.head;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
};

traverse(list);

module.exports = LinkedList;
