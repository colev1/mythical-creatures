function Wizard(obj){
  this.name = obj.name;
  this.isRested = true;
  if (obj.bearded === undefined){
    this.bearded = true;
  } else {
    this.bearded = obj.bearded;
  }
}

Wizard.prototype.incantation = function(str) {
  return str.toUpperCase();
};

Wizard.prototype.cast = function() {
  this.count++;
  if (this.count >= 3){
     this.isRested = false;
     return 'I SHALL NOT CAST'}
  else {
    return 'MAGIC BULLET';
  }
}


module.exports = Wizard;