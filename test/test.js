'use strict';

const DLL = require('../index'),
  expect = require('chai').expect;

// Test add functionality
describe('DLL Methods: ', () => {

  describe('add:', () => {
    it('Adds new node into empty list', () => {
      let list = new DLL();

      list.add('one');

      expect(list.size).to.equal(1);
      expect(list.head.next).to.equal(null);
      expect(list.head.prev).to.equal(null);
      expect(list.head.key).to.equal('one');
    });

    it('Adds node into existing list and tail is set properly', () => {
      let list = new DLL();

      list.add('one').add('two');

      expect(list.size).to.equal(2);
      expect(list.tail.prev.key).to.equal('one');
      expect(list.tail.prev.next.key).to.equal('two');
    });

    it('Fails when duplicate key is added', () => {
      let list = new DLL();

      list.add('one').add('two');

      expect(list.add('one')).to.be.an('error');
    });
  });

  describe ('getNode:', () => {
    it ('Returns node object from list by key', () => {
      let list = new DLL();

      list.add('one').add('two').add('three');

      expect(list.getNode('one')).to.be.an('object');
      expect(list.getNode('one').next.key).to.equal('two');
      expect(list.getNode('three')).to.be.an('object');
      expect(list.getNode('three').prev.key).to.equal('two');
    });
  });

  describe ('remove:', () => {
    it('Removes node from head of list', () => {
      let list = new DLL();

      list.add('one');
      list.remove('one');

      expect(list.size).to.equal(0);

    });

    it ('Removes node from tail of list', () => {
      let list = new DLL();

      list.add('one').add('two').add('three');
      list.remove('three');

      expect(list.size).to.equal(2);
      expect(list.tail.key).to.equal('two');

    });

    it ('Remove node from somewhere in the middle of the list', () => {
      let list = new DLL();

      list.add('one').add('two').add('three').add('four').remove('three');

      expect(list.size).to.equal(3);
      expect(list.getNode('two').next.key).to.equal('four');
      expect(list.tail.prev.key).to.equal('two');
    });
  });

  describe('insert:', () => {

    it('Fails when target key is not found', () => {
      let list = new DLL();

      list.add('one');

      expect(list.insert('new', 'two')).to.be.an('error');
    });

    it('Inserts list node after target key', () => {
      let list = new DLL();

      list.add('one').add('two').add('three').insert('new', 'two');

      expect(list.size).to.equal(4);
      expect(list.getNode('two').next.key).to.equal('new');
      expect(list.getNode('three').prev.key).to.equal('new');
    });
  });

});

describe('Test Case:', () => {
  it('Adds Removes and Inserts without issue', () => {
    let list = new DLL();

    list.add('one').add('two').add('three').insert('new', 'two').remove('three').add('four');

    expect(list.size).to.equal(4);
    expect(list.tail.key).to.equal('four');
    expect(list.tail.prev.key).to.equal('new');
  });
});
