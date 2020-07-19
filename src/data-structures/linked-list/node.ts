export class Node<T> {
  /** The node's next item. */
  next: Node<T> | null = null;

  constructor(
    /** The node's value. */
    public value: T
  ) {}
}
