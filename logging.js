const Console = console.Console;
const fs = require('fs');
const option = {
  flags : 'a+'
}
const output = fs.createWriteStream('./stdout.log', option);
const errorOutput = fs.createWriteStream('./stderr.log',option);

const logger = new Console(output, errorOutput);

(function myFuLog(){
  logger.log(myFuLog.name, new Date, "My Messsage");
})();

(function myFnErr(){
  logger.error(myFnErr.name, new Date, "Error Message");
})();

require("./log/log.js");