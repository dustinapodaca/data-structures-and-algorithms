# Singly Linked List

* A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers as shown in the below image:

![Linked List](https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2013/03/Linkedlist.png)

## Challenge

* Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

## Approach & Efficiency

* For this challenge I took a TDD approach. I started by writing the tests for the LinkedList class and then wrote the code to pass the tests. The Big O space/time for this approach is O(1) for space and O(n) for time.

## API

* `add()`
  * Arguments: value
  * Returns: nothing
  * Adds a new node with that value to the end of the list.
* `insert()`
  * Arguments: value
  * Returns: nothing
  * Adds a new node with that value to the head of the list with an O(1) Time performance.
* `includes()`
  * Arguments: value
  * Returns: Boolean
  * Indicates whether that value exists as a Node’s value somewhere within the list.
* `toString()`
  * Arguments: none
  * Returns: a string representing all the values in the Linked List, formatted as:
    * `"{ a } -> { b } -> { c } -> NULL"`
