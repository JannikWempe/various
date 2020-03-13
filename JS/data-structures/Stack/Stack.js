class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.length = 0;
    this.lastNode = null;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length) newNode.next = this.lastNode;
    this.lastNode = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (this.length) {
      const poppedNode = { ...this.lastNode };
      this.lastNode = this.lastNode.next;
      this.length--;
      return poppedNode;
    } else {
      return {};
    }
  }
}
