'use strict';

const LinkedList = require('./LinkedList.js');

describe('Linked List Tests', () => {
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
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    expect(list.toString()).toEqual(`{ ${ list.head.data } } -> { ${ list.head.next.data } } -> { ${ list.head.next.next.data } } -> NULL`);
  });
  test('The size of the list is incremented when a new node is added', () => {
    expect(list.size).toEqual(3);
  });
});
