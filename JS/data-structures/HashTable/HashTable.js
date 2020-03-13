import { LinkedList } from "../LinkedList/LinkedList.js";

const DEFAULT_HASH_TABLE_SIZE = 32;

class HashTable {
  constructor(hashtableSize = DEFAULT_HASH_TABLE_SIZE) {
    this.buckets = new Array(hashtableSize)
      .fill(null)
      .map(() => new LinkedList());
    this.keys = {};
  }

  hash(key) {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0),
      0
    );
    return hash % this.buckets.length;
  }

  set(key, value) {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];

    const existingNode = bucketLinkedList.findByCallback(
      nodeValue => nodeValue.key == key
    );
    if (existingNode) {
      existingNode.value.value = value;
    } else {
      bucketLinkedList.append({ key, value });
    }
  }

  get(key) {
    if (!Object.keys(this.keys).includes(key)) return null;
    const hash = this.keys[key];
    return this.buckets[hash].findByCallback(
      nodeValue => nodeValue.key === key
    );
  }
}

const main = () => {
  const ht = new HashTable();
  const names = [
    "Jannik",
    "Sarah",
    "Stephan",
    "Sven",
    "Jürgen",
    "Jens",
    "Johann",
    "A",
    "B",
    "Silvia",
    "Marion",
    "Jack",
    "Joachim",
    "Jannik"
  ];
  names.forEach((name, idx) => {
    ht.set(name, idx);
  });
  console.log(ht);

  console.log(ht.get("x"));
  console.log(ht.get("Jannik"));
};

main();
