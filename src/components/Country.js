class Country {
  constructor(name) {
    this.name = name;
  }

  present() {
    return 'I Live in ' + this.name;
  }
}

class SuperPower extends Country {
  constructor(name, weapons) {
    super(name);
    this.weapons = weapons;
}  
  show() {
      return this.present() + ', Weapons: ' + this.weapons
  }
}

const myCountry = new SuperPower("Pakistan", "1 Missile, 3 Aircraft, 4 rocket, 6 F16");
console.log(myCountry.show());