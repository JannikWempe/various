class DoubleLinkedNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new DoubleLinkedNode(value);
    if (this.isEmpty()) {
      this._setFirstNode(newNode);
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return newNode;
  }

  prepend(value) {
    const newNode = new DoubleLinkedNode(value);
    if (this.isEmpty()) {
      this._setFirstNode(newNode);
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    return newNode;
  }

  isEmpty() {
    return this.head === null;
  }

  _setFirstNode(newNode) {
    this.head = newNode;
    this.tail = newNode;
    return newNode;
  }
}

let list = new DoubleLinkedList();
for (let i = 0; i < 5; i++) {
  list.append(i);
}
for (let i = 8; i < 11; i++) {
  list.prepend(i);
}

console.log(list);
