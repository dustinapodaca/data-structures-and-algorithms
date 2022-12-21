# Binary Tree and BST Implementation

- Binary Tree is defined as a tree data structure where each node has at most 2 children. Since each element in a binary tree can have only 2 children, we typically name them the left and right child.

![Binary Tree](https://media.geeksforgeeks.org/wp-content/uploads/binary_tree-1.png)

## Challenge and Features

- Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
- Create a Binary Tree class
- Define a method for each of the depth first traversals:
  - `preOrder()`
  - `inOrder()`
  - `postOrder()`
  - `findMaxValue()`
  - `breadthFirst()`
- Each depth first traversal method should return an array of values, ordered appropriately.
- Create a Binary Search Tree class
- This class should be a sub-class of the Binary Tree Class, with the following additional methods:
  - `add()`
    - Arguments: value
    - Return: nothing
    - Adds a new node with that value in the correct location in the binary search tree.
  - `contains()`
    - Argument: value
    - Returns: boolean indicating whether or not the value is in the tree at least once.

## Tests

- `npm test`

```bash
✓ can successfully instantiate an empty tree (1 ms)
✓ can successfully instantiate a tree with a single root node
✓ can successfully add a left child and right child to a node (1 ms)
✓ can successfully return a collection from a preorder traversal
✓ can successfully return a collection from an inorder traversal
✓ can successfully return a collection from a postorder traversal
✓ returns true for the contains method with an existing node value
✓ returns false for the contains method with a non-existing node value (1 ms)
✓ can successfully find and return the maximum value
```
