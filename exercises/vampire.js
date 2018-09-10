function Vampire(name, pet, thirsty){
 this.name = name;
 if (pet === undefined){
  this.pet = 'bat';
 } else{
  this.pet = pet;
 }
 this.thirsty = true;
 return thirsty;
};

Vampire.prototype.drink = function() {
  this.thirsty = false;
}


module.exports = Vampire;