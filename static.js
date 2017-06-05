class User {
  constructor(id, ps) {
    this.id = id;
    this.ps = ps;
    User.totalUser = User.totalUser + 1;
  }
}
User.totalUser = 0;

let user = new User("user", 1234);
let user2 = new User("user2", 1234);
console.log(User.totalUser);

class SuperUser extends User {
  constructor(id, ps, auth) {
    super(id, ps);
    this.auth = auth;
    SuperUser.totalSuperUser = SuperUser.totalSuperUser + 1;
  }
}
SuperUser.totalSuperUser = 0;
let superUser = new SuperUser("superUser", 1234, "관리자");
let superUser2 = new SuperUser("superUser", 1234, "관리자");
console.log(SuperUser.totalUser);
console.log(SuperUser.totalSuperUser);