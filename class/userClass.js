class User {
  constructor(id, ps, email){
    this.id = id;
    this.ps = ps;
    this.email = email;
  }

  getId(){
    return this.id;
  }
  setId(id){
    this.id = id;
  }
  getPs(){
    return this.id;
  }
  setPs(ps){
    this.ps = ps;
  }
  getEmail(){
    return this.email;
  }
  setEmail(email){
    this.email = email
  }
}

class UserInfoChange extends User{
  constructor(id, ps, email){
    super(id, ps, email);
    this.authority = UserInfoChange.createAuthorityKey(6);
  }

  static createAuthorityKey(length){
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let authority = "";
    for(let i = 0; i<length; i++)
      authority += chars.charAt(Math.floor(Math.random() * chars.length));
    return authority;
  }

  getAuthority(email){
    if(this.email !== email){
      return {
        msg : "등록된 이메일이 아닙니다.",
        result : "fail"
      }
    }else {
      return {
        msg : "다음 코드를 입력하세요",
        result : "success",
        authority : this.authority
      } 
    }
  }

  setAuthority(){
    this.authority = UserInfoChange.createAuthorityKey(6);
  }

  setPS(authority, PS){
    if(this.authority !== authority){
      UserInfoChange.createAuthorityKey();
      return {
        msg : "옳바른 인증키를 입력해주세요.",
        result : "fail"
      }
    }

    this.PS = PS;
    return {
      msg : "비밀번호를 변경하였습니다.",
      result : "success"
    }
  }
}

let userInfoChange = new UserInfoChange("myId", "123456", "myId@ks.ac.kr");
let myaAuthorityKey = userInfoChange.getAuthority("myId@ks.ac.kr");

console.log(userInfoChange.setPS(myaAuthorityKey.authority,"abc123456"));
console.log(userInfoChange.setPS("AS2245","00000000"));