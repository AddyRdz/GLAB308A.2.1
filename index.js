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

/////////////////////////// Part 2 //////////////////////////////////

class Character {
    constructor(name, health, inventory, roll) {
        this.name = name
        this.health = health
        this.inventory = inventory
        this.roll = roll
    }
}