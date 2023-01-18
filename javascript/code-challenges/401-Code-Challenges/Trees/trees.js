'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // depth first traversals
  preOrder() {
    const result = [];
    const traverse = node => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  inOrder() {
    const result = [];
    const traverse = node => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  postOrder() {
    const result = [];
    const traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }

  // breadth first traversal
  breadthFirst() {
    const result = [];
    const queue = [];
    let current = this.root;
    queue.push(current);
    while (queue.length) {
      current = queue.shift();
      result.push(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return result;
  }

  findMaximumValue() {
    let maxVal = this.inOrder().pop();
    return maxVal;
  }
}

class BinarySearchTree extends BinaryTree {
  add(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (current) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      } else {
        return;
      }
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

// function to traverse a tree
const traverse = (tree) => {
  let current = tree.root;
  let result = [];
  let queue = [];
  queue.push(current);
  while (queue.length) {
    current = queue.shift();
    result.push(current.value);
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return result;
};


const bst = new BinarySearchTree();
const bst2 = new BinarySearchTree();

bst.add(2);
bst.add(8);
bst.add(21);
bst.add(23);
bst.add(19);
bst.add(7);
bst.add(86);
bst.add(45);
bst.add(78);
bst.add(91);

bst2.add(7);
bst2.add(86);
bst2.add(45);
bst2.add(78);
bst2.add(91);

console.log(bst);
console.log(JSON.stringify(bst, null, 2));

console.log(bst.breadthFirst());

let maxValue = bst.findMaximumValue();
console.log(maxValue);

// Find the Sum of all the odd numbers in a binary tree

function sumOddNumbers(tree) {
  let sum = 0;
  let oddNumbers = tree.breadthFirst().filter((number) => number % 2 !== 0);
  for (let i = 0; i < oddNumbers.length; i++) {
    sum += oddNumbers[i];
  }
  return sum;
}

const identicalTree = (bst1, bst2) => {
  let tempValuesOne = bst1.inOrder();
  let tempValuesTwo = bst2.inOrder();
  if (tempValuesOne.length !== tempValuesTwo.length) {
    return false;
  }
  for (let i = 0; i < tempValuesOne.length; i++) {
    if (tempValuesOne[i] !== tempValuesTwo[i]) {
      return false;
    }
  }
  return true;
};

module.exports = BinarySearchTree, bst, bst2;



