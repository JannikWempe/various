console.log("MySingleton.js");

class MySingleton {
  constructor(name) {
    this.name = name;
  }

  greeting() {
    console.log("Hi, " + this.name);
  }
}

console.log("create instance...");
const mySingletonInstance = new MySingleton("Jannik");
Object.freeze(mySingletonInstance);

class MySingleton2 {
  constructor(name) {
    if (!!MySingleton2.instance) {
      console.log(`return existing instance...`);
      return MySingleton2.instance;
    }

    MySingleton2.instance = this;

    this.name = name;
    return this;
  }

  greeting() {
    console.log(this);

    console.log("Hi, " + this.name);
  }
}

export { mySingletonInstance, MySingleton2 };
