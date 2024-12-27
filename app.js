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
  }

  }
// Part 1 | Loging each item in Robin's inventory

adventurer.inventory.forEach(element => {
  console.log(element);
});

console.log(adventurer);



