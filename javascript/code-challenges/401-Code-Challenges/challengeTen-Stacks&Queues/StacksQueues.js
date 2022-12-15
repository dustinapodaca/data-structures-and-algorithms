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

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(val) {
    this.stack1.push(val);
  }

  dequeue() {
    while (this.stack1.top) {
      this.stack2.push(this.stack1.pop());
    }
    let temp = this.stack2.pop();
    while (this.stack2.top) {
      this.stack1.push(this.stack2.pop());
    }
    return temp;
  }
}

class AnimalShelter {
  constructor() {
    this.dog = new Queue();
    this.cat = new Queue();
  }

  enqueue(animal) {
    if (animal.type === 'dog') {
      this.dog.enqueue(animal);
    } else if (animal.type === 'cat') {
      this.cat.enqueue(animal);
    }
  }

  dequeue(pref) {
    if (pref === 'dog') {
      return this.dog.dequeue();
    } else if (pref === 'cat') {
      return this.cat.dequeue();
    } else {
      return null;
    }
  }
}

const validateBrackets = (str) => {
  const stack = new Stack();
  const open = ['(', '[', '{'];
  const close = [')', ']', '}'];
  for (let i = 0; i < str.length; i++) {
    if (open.includes(str[i])) { // if open bracket
      stack.push(str[i]); // push open brackets to stack
      console.log(JSON.stringify(stack));
    } else if (close.includes(str[i])) { // if close bracket
      if (stack.isEmpty()) { // if stack is empty
        return false; // return false
      } else if (open.indexOf(stack.pop()) !== close.indexOf(str[i])) { // if open bracket does not match close bracket
        return false; // return false
      }
    }
  }
  if (stack.isEmpty()) { // if stack is empty
    console.log(JSON.stringify(stack));
    return true; // return true
  } else { // if stack is not empty
    return false; // return false
  }
};

console.log(validateBrackets('(){}[[]]'));



// const animalShelter = new AnimalShelter();
// animalShelter.enqueue({ type: 'dog', name: 'dog1' });
// animalShelter.enqueue({ type: 'dog', name: 'dog2' });
// animalShelter.enqueue({ type: 'dog', name: 'dog3' });
// animalShelter.enqueue({ type: 'cat', name: 'cat1' });
// animalShelter.enqueue({ type: 'cat', name: 'cat2' });
// animalShelter.enqueue({ type: 'cat', name: 'cat3' });
// console.log(animalShelter.dequeue('dog'));
// console.log(animalShelter.dequeue('cat'));
// console.log(animalShelter.dequeue('dog'));
// console.log(animalShelter.dequeue('cat'));
// console.log(animalShelter.dequeue('dog'));
// console.log(animalShelter.dequeue('cat'));

// const pseudoQueue = new PseudoQueue();
// pseudoQueue.enqueue(20);
// pseudoQueue.enqueue(15);
// pseudoQueue.enqueue(10);
// console.log(JSON.stringify(pseudoQueue));
// console.log(pseudoQueue.dequeue());
// console.log(pseudoQueue.dequeue());
// console.log(JSON.stringify(pseudoQueue));
// console.log(pseudoQueue.dequeue());
// pseudoQueue.enqueue(5);
// console.log(pseudoQueue.dequeue());

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.isEmpty());

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// console.log(queue.peek());
// console.log(queue.dequeue());
// console.log(queue.peek());
// console.log(queue.isEmpty());
