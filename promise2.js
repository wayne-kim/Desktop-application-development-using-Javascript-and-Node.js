let promise = new Promise((resolve, reject) => {
    if (resolve) {
      resolve("Stuff worked!");
    }
    else {
      reject(Error("It broke"));
    }
});

promise
  .then(() => "[promise] good")
  .then((result) => result + " bye")
  .then((result) => result + " callback~")
  .then((result) => {
    console.log(result)
    throw Error("프로미스야 에러 발생했다.");
  })
  .catch((reject)=>console.log(reject));

// let callback = () => "[callback] hello";
// let callback2 = (result) => result + " promise!";
// let callback3 = (result) => {
//   console.log(result);
//   throw Error("콜백아 에러 발생했다.");
// }
// callback3(callback2(callback()));