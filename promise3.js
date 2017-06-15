const promise = new Promise((resolve, reject) => {
  resolve();
})

let callback = () => "hello";
let callback2 = (result) => result + " promise!";
let callback3 = (result) => console.log(result);

promise
  .then(callback)
  .then(callback2)
  .then(callback3)

promise
  .then(() => "hello")
  .then((result) => result + " promise!")
  .then((result) => console.log(result))

promise
  .then(function () {
    return "hello"
  })
  .then(function (result) {
    return result + " promise!"
  })
  .then(function (result) {
    console.log(result);
  })
