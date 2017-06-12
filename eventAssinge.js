const events = require('events');
let pigeon = new events.EventEmitter();
let count = 0;

pigeon.on("pigeon! let's eat", function(){
  console.log("구구구 구구");
  count =  count + 1;
  if(count > 2)
    pigeon.emit("unreason");
});

pigeon.on("unreason", function(){
  console.log("캬하하 하하");
  count = 0;
});

for(let i = 0; i< 6; i ++){
  pigeon.emit("pigeon! let's eat");
}