'use strict';

const LinkedList = require('./LinkedList.js');

describe('LinkedList Tests', () => {
  let list = new LinkedList();
  it('Can successfully instantiate an empty linked list', () => {
    expect(list.head).toBeNull();
  });
  it('Can properly insert into the linked list', () => {
    list.insert('c');
    expect(list.head.data).toEqual('c');
  });
  test('The head property will properly point to the first node in the linked list', () => {
    list.insert('b');
    list.insert('a');
    expect(list.head.data).toEqual('a');
  });
  it('Can properly insert multiple nodes into the linked list', () => {
    expect(list.head.next.next.data).toEqual('c');
  });
  it('Will return true when finding a value within the linked list that exists', () => {
    expect(list.includes('a')).toBeTruthy();
  });
  it('Will return false when searching for a value in the linked list that does not exist', () => {
    expect(list.includes('z')).toBeFalsy();
  });
  it('Can properly return a collection of all the values that exist in the linked list as a string', () => {
    expect(list.toString()).toEqual(`{ ${ list.head.data } } -> { ${ list.head.next.data } } -> { ${ list.head.next.next.data } } -> NULL`);
  });
  it('Can properly return a collection of all the values that exist in the linked list in an array', () => {
    expect(list.toArray()).toEqual([list.head.data, list.head.next.data, list.head.next.next.data]);
  });
  test('The size of the list is incremented when a new node is added', () => {
    expect(list.size).toEqual(3);
  });
  it('Can successfully add a node to the end of the linked list', () => {
    list.append('s');
    expect(list.head.next.next.next.data).toEqual('s');
  });
  it('Can successfully add multiple nodes to the end of a linked list', () => {
    list.append('t');
    list.append('u');
    expect(list.head.next.next.next.next.data).toEqual('t');
    expect(list.head.next.next.next.next.next.data).toEqual('u');
  });
  it('Can successfully insert a node before a node located i the middle of a linked list', () => {
    list.insertBefore('t', 'x');
    expect(list.head.next.next.next.next.data).toEqual('x');
  });
  it('Can successfully insert a node before the first node of a linked list', () => {
    list.insert('y');
    expect(list.head.data).toEqual('y');
  });
  it('Can successfully insert after a node in the middle of the linked list', () => {
    list.insertAfter('x', 'z');
    expect(list.head.next.next.next.next.next.next.data).toEqual('z');
  });
  it('Can successfully insert a node after the last node of the linked list', () => {
    list.append('w');
    expect(list.head.next.next.next.next.next.next.next.next.data).toEqual('w');
  });
  test('Where k is greater than the length of the linked list', () => {
    expect(list.kthFromEnd(10)).toEqual('Exception');
  });
  test('Where k and the length of the list are the same', () => {
    expect(list.kthFromEnd(9)).toEqual('Exception');
  });
  test('Where k is not a positive integer', () => {
    expect(list.kthFromEnd(-1)).toEqual('Exception');
  });
  test('Where the linked list is of a size 1', () => {
    let newList = new LinkedList();
    newList.insert('a');
    expect(newList.kthFromEnd(0)).toEqual('a');
  });
  test('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    expect(list.kthFromEnd(3)).toEqual('x');
  });
  //zip lists test
  it('Can successfully zip two linked lists of the same length', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    list1.insert(3);
    list1.insert(2);
    list1.insert(1);
    list2.insert(6);
    list2.insert(5);
    list2.insert(4);
    expect(list1.zipLists(list1, list2).toArray()).toEqual([1, 4, 2, 5, 3, 6]);
  });
});
