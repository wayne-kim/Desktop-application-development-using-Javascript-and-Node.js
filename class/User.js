class User {
  constructor(id, ps) {
    this.id = id;
    this.ps = ps;
  }

  getUserInfo() {
    return {
      id: this.id,
      ps: this.ps
    }
  }
}

let user = new User("wayne", 1234);
console.log(user.getUserInfo());

console.log(User instanceof Object);
console.log(User instanceof Function);

//정신 없구만 ㅁㄴㅇㄻㄴㅇㄹ
// /ㅁㄴㅇㄻㄴㅇㄹ
//ㅁㄴㅇㄻㄴㄹㅇ
