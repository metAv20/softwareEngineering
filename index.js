function Character(name, position) {
    this.name = name;
    this.position = position;
    this.move = function(newPosition) {
      this.position = newPosition;
      console.log(this.name + " moved to " + this.position);
    };
  }
  
  function Archer(name, position, range) {
    this.base = Object.create(Character.prototype);
    this.base.constructor.call(this, name, position);
    this.range = range;
    this.attack = function(target) {
      if (Math.abs(this.position - target.position) <= this.range) {
        console.log(this.name + " fires an arrow at " + target.name);
      } else {
        console.log(this.name + " is out of range!");
      }
    };
  }
  
  function Mage(name, position, spell) {
    this.base = Object.create(Character.prototype);
    this.base.constructor.call(this, name, position);
    this.spell = spell;
    this.attack = function(target) {
      console.log(this.name + " casts " + this.spell + " at " + target.name);
    };
  }
  
  // Create some character instances
  const archer1 = new Archer("Legolas", 5, 10);
  const mage1 = new Mage("Gandalf", 3, "Fireball");
  
  archer1.move(8); 
  archer1.attack(mage1);
  
  mage1.move(1);
  mage1.attack(archer1);
  