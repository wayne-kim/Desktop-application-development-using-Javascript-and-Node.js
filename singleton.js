class UserStore {
  constructor(){
   if(! UserStore.instance){
     this._data = [];
     UserStore.instance = this;
   }
   return UserStore.instance;
  }
}

const instance = new UserStore();
const instance2 = new UserStore();

instance._data.push("1")
console.log(instance)
console.log(instance2)

instance2._data.push("2")
console.log(instance)
console.log(instance2)