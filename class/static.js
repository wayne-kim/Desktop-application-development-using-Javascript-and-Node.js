class User {
  constructor(id, ps, name){
    this.id = id;
    this.ps = ps;
    this.name = name;
  }

  static getUserInfo(user){
    this.showResult(user);
    return {
      id : user.id,
      ps : user.ps,
      name : user.name
    }
  }

  static showResult(user){
    console.log(user);
  }

  introduceMyself(){
    User.showResult("안녕하세요. "+ this.name +" 입니다."); // 또는
    // this.constructor.showResult("안녕하세요. "+ this.name +" 입니다.");
  }
}

let user = new User("user", 1234, "Wayne");
user.introduceMyself();