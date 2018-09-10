function Dragon(name, rider, color, hungry) {
this.name = name;
this.rider = rider;
this.color = color;
this.hungry = true;
count = 0;
}

Dragon.prototype.eat = function() {
  count ++;
  if (count === 3){
    this.hungry = false;
  }
};



module.exports = Dragon;
