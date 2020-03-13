import { mySingletonInstance, MySingleton2 } from "./MySingleton.js";

mySingletonInstance.greeting();
// mySingletonInstance.name = "Sarah"; // throws an error, becuase object is frozen

const singleton2Instance = new MySingleton2("Jannik");
singleton2Instance.greeting();
const anotherSingleton2Instance = new MySingleton2("Sarah"); // just returns the first instance
anotherSingleton2Instance.greeting();

const jannik = {
  name: "jannik",
  greeting() {
    console.log("hi, " + this.name);
  }
};
Object.freeze(jannik); // jannik can not be changed
jannik.greeting();
