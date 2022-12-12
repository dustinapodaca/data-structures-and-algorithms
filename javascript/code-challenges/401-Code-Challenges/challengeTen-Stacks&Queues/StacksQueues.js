'use strict';

// Node

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Stack Class

class Stack {
  constructor() {
    this.top = null;
  }

  push(val) {
    let node = new Node(val);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    let temp = this.top;
    this.top = this.top.next;
    return temp.data;
  }

  peek() {
    return this.top.data;
  }

  isEmpty() {
    if (this.top) {
      return false;
    } else {
      return true;
    }
  }
}

// Queue

class Queue {
  constructor() {
    this.front = null;
  }

  enqueue(val) {
    let node = new Node(val);
    if (!this.front) {
      this.front = node;
    } else {
      let currentNode = this.front;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }

  dequeue() {
    let temp = this.front;
    this.front = this.front.next;
    return temp.data;
  }

  peek() {
    return this.front.data;
  }

  isEmpty() {
    if (this.front) {
      return false;
    } else {
      return true;
    }
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.isEmpty());

