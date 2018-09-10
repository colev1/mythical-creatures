function Pirate(name, job) {
  this.name= name;
  this.cursed = false;
  this.count = 0;
  this.job = job || 'Scallywag'; 
  this.booty = 0;
}

Pirate.prototype.commitHeinousAct = function() {
  this.count++ ;
if (this.count >= 3) {
  this.cursed = true;
  } 
}

Pirate.prototype.robShip = function() {
  this.booty = 100;
  return 'YAARRR!';
}



module.exports = Pirate;