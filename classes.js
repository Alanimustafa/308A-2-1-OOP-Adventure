
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
robin.companion.roll();
robin.companion.companion.roll();
