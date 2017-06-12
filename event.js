const EventEmitter = require("events");

class ApplaudFiveTime extends EventEmitter {}

const applaudFiveTime = new ApplaudFiveTime();

applaudFiveTime.on("대만힌국", () => {
  console.log("짝짝 짝 짝짝");
});
applaudFiveTime.emit("대한민국");