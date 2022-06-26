import { IHaveToStringMethod, Node } from './node';

export class LinkedList<T extends IHaveToStringMethod> {
  head: Node<T>;

  add(value: T) {
    if (this.head) {
      this.head.add(value);
    } else {
      this.head = new Node(value);
    }
  }

  toString() {
    let current = this.head;

    let ul = document.createElement('ul');

    while (current != null) {
      let li = document.createElement('li');
      li.innerHTML = current.data.toString();

      ul.appendChild(li);

      current = current.next;
    }

    return ul;
  }

  reverse() {
    let next: Node<T> = null;
    let current = this.head;
    let prev: Node<T> = null;

    while (current != null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  deleteNode(value: T) {
    let current = this.head;
    let prev: Node<T> = null;

    if (current != null && current.data == value) {
      this.head = current.next;
      return;
    }

    while (current != null && current.data != value) {
      prev = current;
      current = current.next;
    }

    if (current == null) {
      return;
    }

    prev.next = current.next;
  }
}
