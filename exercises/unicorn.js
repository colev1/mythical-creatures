function Unicorn(name, color) {
  this.name = name;
  // this.color = color;
  if (color === undefined) {
    this.color = 'white';
  } else{
    this.color = color;
  }
}

Unicorn.prototype.isWhite = function() {
  if (this.color === 'white') {
    return true;
  } else{
    return false;
  }
}

Unicorn.prototype.says = function(string){
  return '**;* ' + string + ' *;**';
}


module.exports = Unicorn;