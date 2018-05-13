class Ninja {
	constructor(name) {
		this.name = name;
		this.health = 100;
		this.speed = 3;
		this.strength = 3;
	};

	sayName() {
		console.log("Hello, I am ninja " +  this.name);
	};

	showStats() {
		console.log("Name: " + this.name);
		console.log("Strength: " + this.strength);
		console.log("Speed:" + this.speed);
		console.log("Health: " + this.health + "hp");
	};

	drinkShake() {
		this.health += 10;
	};
};

const ted = new Ninja('Ted');
ted.sayName();
ted.showStats();
ted.drinkShake();
ted.showStats();

class Sensei extends Ninja {
	constructor(name) {
		super(name);
		this.health = 200;
		this.speed = 10;
		this.strength = 10;
		this.wisdom = 10;
	};

	sayName() {
		console.log("Hello, I am Sensei " +  this.name);
	};

	speakWisdom() {
		this.drinkShake();
		console.log("Music is just wiggly air.");
	};
};

const tom = new Sensei('Tom Brady');
tom.sayName();
tom.showStats();
tom.speakWisdom();
tom.showStats();