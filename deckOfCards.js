class Deck {
	constructor() {
		this.val = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
		this.suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
		this.cards = [];

		for(var suit in this.suits) {
			for(var card in this.val) {
				this.cards.push(this.val[card] + ' of ' + this.suits[suit]);
			};
		};
	};

	shuffle() {
		var n = this.cards.length;
		var x;
		var i;
		while (n) {
			i = Math.floor(Math.random() * n--);
			x = this.cards[n];
			this.cards[n] = this.cards[i];
			this.cards[i] = x;
		}
	};

	reset() {
		this.cards = [];
		for(var suit in this.suits) {
			for(var card in this.val) {
				this.cards.push(this.val[card] + ' of ' + this.suits[suit]);
			};
		};
	};

	deal(hand) {
		var cardsDealt = []
		if (hand){
			for (var card = 0; card < hand; card++) {
				cardsDealt.push(this.cards.pop());
			}
			return cardsDealt;
		} else {                                // If number of cards not passed to deal, then deal one card.
			cardsDealt.push(this.cards.pop());
			return cardsDealt;
		}
	};
};


class Person {
	constructor(name) {
		this.name = name;
		this.hand = [];
	};

	getHand(deck, number) {
		this.hand = deck.deal(number);
	};

	discardHand() {
		this.hand = [];
	};

	discardCard() {
		this.hand.pop();
	}
};


var newDeck = new Deck();
var player = new Person('Steve');
newDeck.shuffle();
console.log(player);
player.getHand(newDeck, 5);
console.log(player);
player.discardCard();
console.log(player);
player.discardHand();
console.log(player);







