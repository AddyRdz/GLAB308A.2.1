//////////////////////////// Part 1 //////////////////////////////

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

for (const key in adventurer) {
  console.log(adventurer[key]);
}

adventurer.roll()
adventurer.roll(4)

/////////////////////////// Part 2 //////////////////////////////////

class Character {
    static MAX_HEALTH = 100;

    constructor(name, health, inventory, roll) {
        this.name = name
        this.health = health
        this.inventory = inventory
        this.roll = roll
    }
}


//////////// Re-create Robin using the Character class////////////////////////////////

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

////////////////////////////// Part 3 //////////////////////////////////


class Adventurer extends Character {
    static role = [Fighter, Healer, Wizard];

    constructor (name, role, stamina, skills) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
      this.stamina = stamina;
      this.skills = skills;
      if(role === 'fighter'|| role ==='healer'|| role === 'wizard'){
        console.log('role is succesful');
      }else{
        console.log('role is not valid');
        
      }

    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
    hide () {
        console.log(`${this.name}, is hiding from an attack.`);

    }
    flee () {
        console.log(`${this.name}, is fleeing from attack!`);
        
    }
    gather (){
        console.log(`${this.name}, is gathering crucial supplies`);
        super.roll();
        
    }
  }

  class Companion {
    constructor(name, type){
        this.name = name
        this.type = type
        
    }
    follow(){
        console.log(`${this.name} is following.`);
        
    }
    assist(){
        console.log(`${this.name} is assisting you.`);
        
    }
  }

//   change the declaration of Robin and the companions to use the new Adventurer and Companion classes.
// const robin = new Adventurer('Robin');
robin.adventurer.stamina = (80);
robin.adventurer.skills = (77);
// const robin = new Companion('Robin');
robin.companion.name = ('Robin');
robin.companion.type = ('Person');
const leo = new Companion('Leo');
leo.companion.name = ('Leo');
leo.companion.type = ('Cat');
const frank =  new Companion('Frank');
frank.companion.name = ('Frank');
frank.companion.type = ('Flea');

//////////////////////// Part 4 //////////////////////////////////////////////


