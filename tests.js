describe("Character", function() {
    it("should move the character to a new position", function() {
      const character = new Character("Test", 1);
      character.move(5);
      expect(character.position).toBe(5);
    });
  });
  
describe("Archer", function() {
    it("should attack a target in range", function() {
        const archer = new Archer("Legolas", 3, 10);
        const mage = new Mage("Gandalf", 8, "Fireball");
        spyOn(console, "log");
        archer.attack(mage);
        expect(console.log).toHaveBeenCalledWith("Legolas fires an arrow at Gandalf");
    });

    it("should log out of range message for a target beyond range", function() {
        const archer = new Archer("Legolas", 3, 5);
        const mage = new Mage("Gandalf", 8, "Fireball");
        spyOn(console, "log");
        archer.attack(mage);
        expect(console.log).toHaveBeenCalledWith("Legolas is out of range!");
    });
});

describe("Mage", function() {
    it("should cast a spell at a target", function() {
        const mage = new Mage("Gandalf", 1, "Fireball");
        const archer = new Archer("Legolas", 5, 10);
        spyOn(console, "log");
        mage.attack(archer);
        expect(console.log).toHaveBeenCalledWith("Gandalf casts Fireball at Legolas");
    });
});
