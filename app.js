const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: { // Part 1 | Robin's companion Leo has been added.
    name: "Leo",
    type: "Cat",
    companion: { // Part 1 | Leo's companion Frank has been added.
      name: "Frank",
      type: "flea",
      inventory: ["hat", "sunglasses"]
    }
  },
  roll (mod = 0) {  // Part 1 | Adding the roll function as a method for Robin
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
    }

  }
// Part 1 | Loging each item in Robin's inventory

adventurer.inventory.forEach(element => {
  console.log(element);
});

console.log(adventurer); // for test only.



