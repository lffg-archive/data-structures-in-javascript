import { LinkedList } from './linked-list';

describe('LinkedList', () => {
  test('constructor', () => {
    const ll1 = new LinkedList();
    expect(ll1).toBeInstanceOf(LinkedList);

    const ll2 = new LinkedList(1, 2, 3);
    expect(ll2.inspect()).toEqual([1, 2, 3]);
  });

  test('inspect', () => {
    const ll = new LinkedList(1, 2, 3, 4, 5);
    expect(ll.inspect()).toEqual([1, 2, 3, 4, 5]);
  });

  test('push', () => {
    const ll = new LinkedList();

    ll.push(1);
    expect(ll.inspect()).toEqual([1]);

    ll.push(2);
    expect(ll.inspect()).toEqual([1, 2]);

    ll.push(3);
    ll.push(4);
    ll.push(5);
    expect(ll.inspect()).toEqual([1, 2, 3, 4, 5]);
  });

  test('pop', () => {
    const ll = new LinkedList(1, 2, 3);

    ll.pop();
    expect(ll.inspect()).toEqual([1, 2]);

    ll.pop();
    expect(ll.inspect()).toEqual([1]);

    ll.pop();
    expect(ll.inspect()).toEqual([]);

    expect(() => ll.pop()).toThrow(RangeError);
  });

  test('unshift', () => {
    const ll = new LinkedList();

    ll.unshift(1);
    expect(ll.inspect()).toEqual([1]);

    ll.unshift(2);
    expect(ll.inspect()).toEqual([2, 1]);

    ll.unshift(3);
    ll.unshift(4);
    ll.unshift(5);
    expect(ll.inspect()).toEqual([5, 4, 3, 2, 1]);
  });

  test('shift', () => {
    const ll = new LinkedList(1, 2, 3);

    ll.shift();
    expect(ll.inspect()).toEqual([2, 3]);

    ll.shift();
    expect(ll.inspect()).toEqual([3]);

    ll.shift();
    expect(ll.inspect()).toEqual([]);

    expect(() => ll.shift()).toThrow(RangeError);
  });

  test('reverse', () => {
    const ll1 = new LinkedList(1, 2, 3, 4, 5);
    expect(ll1.inspect()).toEqual([1, 2, 3, 4, 5]);
    expect(ll1.reverse().inspect()).toEqual([5, 4, 3, 2, 1]);

    const ll2 = new LinkedList();
    expect(ll2.reverse().inspect()).toEqual([]);
  });
});
