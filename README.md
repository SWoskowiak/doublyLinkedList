[![Build Status](https://travis-ci.org/SWoskowiak/doublyLinkedList.svg?branch=master)](https://travis-ci.org/SWoskowiak/doublyLinkedList)

[![Coverage Status](https://coveralls.io/repos/github/SWoskowiak/doublyLinkedList/badge.svg?branch=master)](https://coveralls.io/github/SWoskowiak/doublyLinkedList?branch=master)

# String DLL

A simple doubly linked list storing string values written in node compliant ES6
with no dependencies.

## Install

```Sh

  npm install string-DLL

```

## Variables

```Javascript

  // First element in the list
  head

  // Last element in the list
  tail

  // Size of the list
  size

```

## Methods

```Javascript

  // Appends new node with key to tail of list
  add(key)

  // Removes node with the given key from list
  remove(key)

  // Insert new node with value of key after node with target key
  insert(key, target)

  // Returns the node object of the given key in the list
  getNode(key)

```

## Basic usage

```Javascript

  var DLL = require('string-DLL');

  const list = new DLL();

  list.add('one');
  list.add('two');

  console.log(list.size) // 2
  console.log(list.head.key) // 'one'
  console.log(list.tail.key) // 'two'

  list.remove('two');

  console.log(list.size) // 1
  console.log(list.head.key) // 'one'
  console.log(list.tail.key) // 'one'

```
