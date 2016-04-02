'use strict';

// Node in our system
class Node {
  constructor(key, prev, next) {
    this.key = key || '';
    this.next = next || null;
    this.prev = prev || null;
  }
}

// Simple Doubly linked list
class DLL {

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getNode(key) {
    let head = this.head,
      current = head,
      previous = head;

    if (this.size === 0) { return false; }

    // Check head
    if (this.head.key === key) {
      return this.head;
    }
    // Check tail
    if (this.tail.key === key) {
      return this.tail;
    }
    // Iterate over list to find key
    while (current && current.next) {
      if (current.key === key) {
        return current;
      }
      previous = current;
      current = current.next;
    }

    return false;
  }

  // Append to end of list
  add(key) {
    let head = this.head;

    if (!head) {
      this.head = new Node(key);
      this.tail = this.head;
    } else {
      // Key already exists
      if (this.getNode(key)) {
        return new Error(`List already contains key: ${key}!`);
      }
      // add to tail element
      this.tail.next = new Node(key, this.tail);
      this.tail = this.tail.next;
    }

    this.size++;

    return this;
  }

  // Remove from our list
  remove(key) {
    let current = this.getNode(key);

    if (current) {
      if (current.prev) { current.prev.next = current.next; }
      if (current.next) { current.next.prev = current.prev; }
      if (current === this.tail) { this.tail = current.prev; }

      this.size--;
    } else {
      return new Error(`No matching element found to remove for key: ${key}`);
    }

    return this;
  }

  // Insert a node after node matching target key
  insert(key) {

  }

  // Delete node by key
  delete(key) {
    let current = this.head,
      previous;

    // Delete head
    if (current.key === key) {
      this.head = current.next;
      // If there is only one node, then this.head is null
      if (this.head) { this.head.prev = null; }
    }

    while (current.next) {
      if (current.key === key) {
        previous.next = current.next;
        current.next.prev = previous;
      }
      previous = current;
      current = current.next;
    }

    //delete last node
    if (current.key === key) {
      previous.next = null;
    }
  }
}

module.exports = DLL;
