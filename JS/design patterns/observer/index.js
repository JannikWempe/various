class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe = fn => {
    this.observers.push(fn);
    return this.observers;
  };

  unsubscribe = fn => {
    this.observers = this.observers.filter(observer => fn !== observer);
    return this.observers;
  };

  notify = data => {
    this.observers.forEach(observer => {
      observer(data);
    });
  };
}

const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");

const setTextA = text => {
  a.innerHTML = text;
};
const setTextB = text => {
  b.innerHTML = text;
};
const setTextC = text => {
  c.innerHTML = text;
};

const observer = new Observable();
observer.subscribe(setTextA);
observer.subscribe(setTextB);
observer.subscribe(setTextC);

document.querySelector("input").addEventListener("keyup", e => {
  observer.notify(e.target.value);
});
