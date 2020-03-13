class EventEmitter {
  _listeners = {};

  on(eventName, cb) {
    if (eventName in this._listeners) {
      this._listeners[eventName].push(cb);
    } else {
      this._listeners[eventName] = [cb];
    }
  }

  emit(eventName, data) {
    if (eventName in this._listeners) {
      this._listeners[eventName].forEach(fn => {
        fn(data);
      });
    }
  }

  removeListener(eventName, cb) {
    if (eventName in this._listeners) {
      this._listeners[eventName] = this._listeners[eventName].filter(
        fn => fn !== cb
      );
    }
  }
}

let superbowl = new EventEmitter();

const cheer = function(eventData) {
  console.log("RAAAAAHHHH!!!! Go " + eventData.scoringTeam);
};

const jeer = function(eventData) {
  console.log("BOOOOOO " + eventData.scoringTeam);
};

superbowl.on("touchdown", cheer);
superbowl.on("touchdown", jeer);

superbowl.emit("touchdown", { scoringTeam: "Patriots" }); // Both cheer and jeer should have been called with data

superbowl.removeListener("touchdown", jeer);

superbowl.emit("touchdown", { scoringTeam: "Seahawks" }); // Only cheer should have been called
