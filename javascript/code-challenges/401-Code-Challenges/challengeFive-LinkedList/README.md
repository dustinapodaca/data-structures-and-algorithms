# Singly Linked List

* A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers as shown in the below image:

![Linked List](https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2013/03/Linkedlist.png)

## Challenge

* Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

## Approach & Efficiency

* For this challenge I took a TDD approach. I started by writing the tests for the LinkedList class and then wrote the code to pass the tests. The Big O space/time for this approach is O(1) for space and O(n) for time.

## API

* `append()`
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
* `toArray()`
  * Arguments: none
  * Returns: an array of all the values in the Linked List, formatted as:
    * `[a, b, c]`
* `insertBefore()`
  * Arguments: value, new value
  * Returns: nothing
  * Adds a new node with the given new value immediately before the first node that has the value specified.
* `insertAfter()`
  * Arguments: value, new value
  * Returns: nothing
  * Adds a new node with the given new value immediately after the first node that has the value specified.
* `kthFromEnd()`
  * Arguments: k
  * Returns: the value of the node k from the end of the linked list
  * Returns an exception if k is greater than the length of the linked list
  * Returns an exception if k and the length of the list are the same
  * Returns an exception if k is not a positive integer
  * Returns an exception if the linked list is of a size 1
* `zipLists()`
  * Arguments: two linked lists
  * Returns: zipped linked list
  * Takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list.
