
//----------------------factory function using sub class-----------------------------------//


const userCreate = function(name,score) {
  const user = Object.create(userFunction);
  user.name = name;
  user.score = score;
  return user;
}

const userFunction = {
  increment : function() {this.score++;},
  showName : function() {console.log(`this is my name : ${this.name}`);}
}
  
const userArvind=userCreate("arvind",8);
  
const paidUser = function(name,score,accountBalance) {
  const newUser = userCreate(name,score);
  Object.setPrototypeOf(newUser,paidFunction);
  newUser.accountBalance = accountBalance;
  return newUser;
}
  
const paidFunction = {
  increaseBalance : function(){
     this.accountBalance++;
  }
}

Object.setPrototypeOf(paidFunction,userFunction);
  
const paidAyush = paidUser("ayush",7,0);

console.log(paidAyush.showName());



  //------------------------using new keyword subclass---------------------------------//
  
function userCreate (name ,score) {
  this.name = name;
  this.score = score;
}

userCreate.prototype.increment=function() {
  this.score++;
}

userCreate.prototype.showName = function() {
  console.log(`your name is ${this.name}`);
}

const user1 = new userCreate("ayush",1234);
user1.showName();
  

function paidUser(name,score,accountBalance) {
  userCreate.call(this,name,score);
  this.accountBalance = accountBalance;
}

paidUser.prototype = Object.create(userCreate.prototype);

paidUser.prototype.addAccount = function() {
  this.accountBalance++;
}

paidUser.prototype.showBalance=function() {
  console.log(`your account balance is ${this.accountBalance}`);
}

const user2 = new paidUser("paid ayush",2345,5667);

user2.showName();

user2.showBalance();

  //-----------------using class keyword-----------//

class userCreate {
  constructor(name,score) {
    this.name=name;
    this.score=score;
  }
  increment() {
    this.score++;
  }
  sayName() {
    console.log(`hello world my name is ${this.name}`);
  }
}

const user = new userCreate("ayush", 1234);

class paidUser extends userCreate {
  constructor(name,score,AccountBalance){
    super(name,score);
    this.AccountBalance=AccountBalance;
  }
  balanceIncrement() {
    this.AccountBalance++;
  }
}

const userPaid = new paidUser("gammaman",3456,4567);

userPaid.sayName();
