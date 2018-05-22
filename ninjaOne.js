function Ninja(name) {
	this.name = name;
	this.health = 100;
	var speed = 3;
	var strength = 3;

	this.sayName = function() {
		console.log("Hello, I am ninja " +  this.name);
	};

	this.showStats = function() {
		console.log("Name: " + this.name);
		console.log("Strength: " + strength);
		console.log("Speed:" + speed);
		console.log("Health: " + this.health + "hp");
	};

	this.drinkShake = function() {
		this.health += 10;
	};

	this.punch = function(hitNinja) {
		if(!(hitNinja instanceof Ninja)) {
			console.log('Must punch a ninja!');
		} else {
			hitNinja.health -= 5;
			console.log(hitNinja.name + " was punched by " + this.name + " and lost 5 health!");
		};
	};

	this.kick = function(kickedNinja) {
		if(!(kickedNinja instanceof Ninja)) {
			console.log('Must kick a ninja!');
		} else {
			kickedNinja.health -= 15 * strength;
			console.log(kickedNinja.name + " was kicked by " + this.name + " and lost " + 15*strength + " health!");
		};
	}
}


/*
var ninjaOne = new Ninja('Enzo');
ninjaOne.sayName();
ninjaOne.showStats();
ninjaOne.drinkShake();
ninjaOne.showStats();
*/

var phineas = new Ninja('Phineas');
var ferb = new Ninja('Ferb');

ferb.showStats();
console.log("");
phineas.punch(ferb);
console.log("");
ferb.showStats();
console.log("");
phineas.showStats();
console.log("");
ferb.kick(phineas);
console.log("");
phineas.showStats();
ferb.kick('Scott');
ferb.punch('Dan');

