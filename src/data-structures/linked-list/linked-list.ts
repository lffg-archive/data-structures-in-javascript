import { Node } from './node';

export class LinkedList<T> {
  /**
   * The linked list's constructor.
   */
  constructor(...values: T[]) {
    if (Array.isArray(values)) {
      for (const value of values) {
        this.push(value);
      }
    }
  }

  /**
   * The head of the linked list.
   */
  private head: Node<T> | null = null;

  /**
   * Inserts one item at the end of the linked list.
   * O(n)
   */
  push(value: T): void {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = node;
  }

  /**
   * Removes the last item of the linked list.
   * O(n)
   */
  pop(): void {
    let current = this.head;

    if (current === null) {
      throw new RangeError('Cannot pop an empty list.');
    }

    if (current.next === null) {
      this.head = null;
      return;
    }

    while (current.next !== null) {
      if (current.next.next === null) {
        // Exit if the next is the last element.
        break;
      }

      current = current.next;
    }

    current.next = null;
  }

  /**
   * Inserts one item at the beginning of the linked list.
   * O(1)
   */
  unshift(value: T): void {
    const node = new Node(value);
    node.next = this.head;

    this.head = node;
  }

  /**
   * Removes the first item of the linked list.
   * O(1)
   */
  shift(): void {
    if (this.head === null) {
      throw new RangeError('Cannot unshift an empty list.');
    }

    this.head = this.head.next;
  }

  /**
   * Returns a new linked list – the reverse of the original.
   * O(n)
   */
  reverse(): LinkedList<T> {
    const ll = new LinkedList<T>();
    let current = this.head;

    if (current === null) {
      return ll;
    }

    while (current !== null) {
      ll.unshift(current.value);
      current = current.next;
    }

    return ll;
  }

  /**
   * Returns the head node.
   */
  getHead(): Node<T> | null {
    return this.head;
  }

  /**
   * Returns a JavaScript array with the linked list values.
   */
  inspect(): T[] {
    const values: T[] = [];
    let current: Node<T> | null = this.head;

    if (current === null) {
      return values;
    }

    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }
}
