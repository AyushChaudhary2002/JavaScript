const user1 = {
  name : "ayush",
  score : 3,
  increment : function() { user1.score++; }
};

const user2 = {}; 

user2.name = "ashu"; 
user2.score = 6;
user2.increment = function() {
user2.score++;
};

const user3 = Object.create();

user3.name = "ashutosh";
user3.score=7; 

user3.increment = function() {
  user3.score++;
};

const newUser = function (name , score){
  const user = {};
  user.name = name;
  user.score = score;
  user.increment = function() {user.score++};
  return user;
} 

const userAyush = newUser("ayush",7);

const userCreate = function(name,score){
  const user = Object.create(userFunction);
  user.name = name;
  user.score = score;
  return user;
}

const userFunction = {
  increment : function() {this.score++;}
}

const userArvind = userCreate("arvind",8);

function UserCreation(name,score) {
  this.name = name;
  this.score = score;
}

UserCreation.prototype.increment = function() {
  this.score++;
}

UserCreation.prototype.decrement = function() {
  function minus() {
    this.score--;
  }
  //const minus=()=>{this.score--};
  minus();
   
}

const user4 = new UserCreation("akhil",45);

class UserCreation {
  constructor(name,score) {
    this.name = name;
    this.score = score;
  }

  increment(){
    this.score++;
  }
}

