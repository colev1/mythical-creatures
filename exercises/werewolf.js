
function Werewolf(name, location){
  this.name = name;
  this.location = location;
  this.human = true;
  this.wolf = false;
  this.hungry = false;
};

Werewolf.prototype.change = function() {
  if (this.human === true){
  this.human = false;
  this.wolf = true;
  this.hungry = true;
  } else {
  this.human = true;
  this.wolf = false;
  this.hungry = false;
  }
};

Werewolf.prototype.eat = function(victim) {
  if (this.human = false){
    
  }
  else{
    return 'I am human'
  }
};



module.exports = Werewolf;