class User {
  constructor(id, ps) {
    this.id = id;
    this.ps = ps;
  }
}

class SuperUser extends User {
  constructor(id, ps, auth){
    super(id,ps);
    this.auth = auth;
  }  
}