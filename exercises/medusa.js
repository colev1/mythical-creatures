function Medusa(name){
  this.name = name;
  this.statues = [];
};


Medusa.prototype.stare = function(victim) {

    this.statues.push(victim);
    victim.stoned = true;
      if (this.statues.length > 3){
        this.statues[0].stoned = false;
        this.statues.shift();
  }
}

module.exports = Medusa;