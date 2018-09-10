

function Centaur(name, breed){
  this.name = name;
  this.breed = breed;
  this.cranky = false;
  this.standing = true;
  this.crankyCount = 0;

}


Centaur.prototype.shoot = function() {
  this.crankyCount++;
  if (this.crankyCount >= 3) {
    this.cranky = true;
    return 'NO!';
  } else {
  return 'Twang!!!';
  };
};

Centaur.prototype.run = function() {
  this.crankyCount++;
  if (this.crankyCount >= 3) {
    this.cranky = true;
  }
  return 'Clop clop clop clop!!!'
};






module.exports = Centaur;
