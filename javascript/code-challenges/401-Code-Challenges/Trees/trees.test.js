'use strict';

const BinarySearchTree = require('./trees');

describe('Binary Search Tree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test('can successfully instantiate an empty tree', () => {
    expect(bst.root).toBeNull();
  });

  test('can successfully instantiate a tree with a single root node', () => {
    bst.add(10);
    expect(bst.root.value).toBe(10);
  });

  test('can successfully add a left child and right child to a node', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    expect(bst.root.left.value).toBe(5);
    expect(bst.root.right.value).toBe(15);
  });

  test('can successfully return a collection from a preorder traversal', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(3);
    bst.add(7);
    bst.add(12);
    bst.add(17);
    expect(bst.preOrder()).toEqual([10, 5, 3, 7, 15, 12, 17]);
  });

  test('can successfully return a collection from an inorder traversal', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(3);
    bst.add(7);
    bst.add(12);
    bst.add(17);
    expect(bst.inOrder()).toEqual([3, 5, 7, 10, 12, 15, 17]);
  });

  test('can successfully return a collection from a postorder traversal', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(3);
    bst.add(7);
    bst.add(12);
    bst.add(17);
    expect(bst.postOrder()).toEqual([3, 7, 5, 12, 17, 15, 10]);
  });

  test('returns true for the contains method with an existing node value', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    expect(bst.contains(10)).toBe(true);
    expect(bst.contains(5)).toBe(true);
    expect(bst.contains(15)).toBe(true);
  });

  test('returns false for the contains method with a non-existing node value', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    expect(bst.contains(20)).toBe(false);
    expect(bst.contains(49)).toBe(false);
    expect(bst.contains(100)).toBe(false);
  });
  test('can successfully find and return the maximum value', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(3);
    bst.add(7);
    bst.add(12);
    bst.add(17);
    expect(bst.findMaximumValue()).toEqual(17);
  });
  test('it can successfully process a breadth first traversal', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(3);
    bst.add(7);
    bst.add(12);
    bst.add(17);
    expect(bst.breadthFirst()).toEqual([10, 5, 15, 3, 7, 12, 17]);
  });
});
