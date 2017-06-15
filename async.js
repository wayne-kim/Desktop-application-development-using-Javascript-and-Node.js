setTimeout(function (text) {
  let str = "" + text;
  setTimeout(function (text) {
    str = str + text;
    setTimeout(function (text) {
      str = str + text;
      console.log(str);
    }, 1, 'callback hell');
  }, 1, 'to the ');
}, 1, 'welcome ');