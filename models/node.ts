export interface IHaveToStringMethod {
  toString: () => string;
}

export class Node<T extends IHaveToStringMethod> {
  data: T;
  next: Node<T>;

  constructor(value: T) {
    this.data = value;
    this.next = null;
  }

  add(value: T) {
    if (this.next) {
      this.next.add(value);
    } else {
      this.next = new Node(value);
    }
  }
}
