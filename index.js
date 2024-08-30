// Part 1: Humble Beginnings ///////////////////////
const adventurer = {
  name: 'Robin',
  health: 10,
  inventory: ['sword', 'potion', 'artifact'],
  companion: {
      name: 'Leo',
      type: 'Cat',
      companion: {
          name: 'Frank',
          type: 'Flea',
          inventory: ['small hat', 'glasses']
      }
  },
  roll(mod = 0){
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`)
  }
}

// loop inventory
for (const item of adventurer.inventory) {
  console.log(item)
}

adventurer.roll()
adventurer.roll(5)

// Part 2 : Class Fantasy /////////////////////////////////////////////


class Character {
  static MAX_HEALTH = 100
  constructor (name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  roll (mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`)
      }
      
}

////////////// Re-create Robin using the Character class////////////////////////////////   
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin);

robin.roll()
robin.companion.roll()
robin.companion.companion.roll()

//Part 3: Class Features  //////////////////////////////////

class Adventurer extends Character {

  constructor (name, role) {
    super(name);
    // Adventurers have specialized roles.
    if(role === 'fighter'|| role ==='healer'|| role === 'wizard'){
      console.log('role is succesful');
    }else{
      console.log('role is not valid');
    }
    this.role = role;
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to scout ahead of them.
  scout () {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
  duel (){
//     Use the roll() functionality to create opposing rolls for each adventurer.
// Subtract 1 from the adventurer with the lower roll.
// Log the results of this “round” of the duel, including the rolls and current health values.
// Repeat this process until one of the two adventurers reaches 50 health.
// Log the winner of the duel: the adventurer still above 50 health.
  
  
  
    
  }
}

class Companion{
  constructor(name, type, inventory = []){
      this.name = name
      this.type = type
      this.inventory = inventory
  }
}

// Finally, change the declaration of Robin and the companions to use the new Adventurer and Companion classes.

const updatedRobin = new Adventurer ("Robin", "wizard");
const updatedLeo = new Adventurer ("Leo", "Cat");
const updatedFrank = new Adventurer ("Frank", "Flea");

// Part 4: Class Uniforms //////////////////////////

// Part 6: Developing Skills ////////////////////////////
//  duel(){
// }if(this.health && newThis.health >= 50){
//   console.log(`${this.name} has a  health level of:${this.health} .`)
// }else{
//   adventurer.roll(){
//     continue;
//   }
// }
//  } if(this.health < 50){
//   console.log('Winner');