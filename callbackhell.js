setTimeout(function (text) {
  let str = "" + text;
  setTimeout(function (text) {
    str = str + text;
    setTimeout(function (text) {
      str = str + text;
      console.log(strr);
    }, 1, 'callback hell');
  }, 1, 'to the ');
}, 1, 'welcome ');


// function fn1(text) {
//   fn2(text + "did the ");
// }
// function fn2(text) {
//   fn3(text + "error occur?");
// }
// function fn3(text) {
//   console.log(textt);
// }
// fn1("Where ");