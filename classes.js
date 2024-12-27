
// Part 2 | Class Fantasy 

// Part 2 | Character Class has been instantiated.
class Character {
  constructor (name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  roll (mod = 0) {  // Part 2 | Adding the roll function as a method to Character
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
    }
}


// Part 2 | re-creating Robin using the Charcter class.
const robin = new Character ("Robin");
robin.health = 100 ;
robin.inventory = ["sword", "potion", "artifact"];

// Adding Leo as a companion of Robin 
robin.companion = new Character("Leo");
robin.companion.type = "Cat";


// Adding Frank as Leo's companion 
robin.companion.companion = new Character ("Frank");
robin.companion.companion.type = "Fela";
robin.companion.companion.inventory = ["small hat", "sunglasses"]

console.log(robin); // For test only.
robin.companion.roll(); // Leo Dice Roll.
robin.companion.companion.roll(); // Frank Dice Roll.



// Part 3 | Class Features

// Adding the Adventure class which is extended from Character class.

class Adventurer extends Character {
  constructor (name, role) {
    super(name);
    // Adventurers have specialized roles.
    this.role = role;
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to scout ahead of them.
  scout () {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
}

// Part 3 | Creatign the companion class 
class Companion extends Character {
  constructor (name, role, compIventory) {
    super(name); // using the name from the Character Class.
    this.role = role; // To specify the role of the comapnion.
    this.inventory.push(`${compIventory}`);
  }
  help () {
    console.log(`${this.name} is helping ${Adventurer.name}`);
  }
}
