class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this._addFirstNode(newNode);
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this._addFirstNode(newNode);
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    return this;
  }

  pop() {
    if (this.isEmpty()) return null;
    const deletedTail = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deletedTail;
    }
    this._detachTail();
    return deletedTail;
  }

  findByValue(value) {
    if (this.isEmpty()) return null;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) return currentNode;
      currentNode = currentNode.next;
    }
    return null;
  }

  findByCallback(cb) {
    if (this.isEmpty()) return null;
    let currentNode = this.head;
    while (currentNode) {
      if (cb(currentNode.value)) return currentNode;
      currentNode = currentNode.next;
    }
    return null;
  }

  _detachTail() {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next && !currentNode.next.next) {
        this.tail = currentNode;
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }
    return this.tail;
  }

  _addFirstNode(newNode) {
    this.head = newNode;
    this.tail = newNode;
    return newNode;
  }
}

let list = new LinkedList();
for (let i = 0; i < 5; i++) {
  list.append(i);
}
for (let i = 8; i < 11; i++) {
  list.prepend(i);
}

console.log(list);
console.log(list.findByValue(10));
console.log(list.findByValue(20));
console.log(list.pop());
