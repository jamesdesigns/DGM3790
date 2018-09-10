new Vue({
	el: '#game',
	data: {
		playersHealth: 100,
		bullysHealth: 100,
		continuePlay: false,
		playerScore: 0,
		bullyScore: 0,
		gameLog: []
	},
	methods: {
		// Create the Fight Button
		fightBtn: function() {
			this.continuePlay = true;
			this.playersHealth = 100;
			this.bullysHealth = 100;
			this.gameLog = [];
		},
		// Create the Attack Button
		attackBtn: function() {
			// Create random points deducted for each attack
			var attackBully = Math.floor((Math.random()*5) +1);
			var attackSelf = Math.floor((Math.random()*5) +1);

			// Calculates Bully's Health
			this.bullysHealth -= attackSelf;

			// Keeping track of the Game Log
			this.gameLog.unshift({
				player: true,
				text: 'Player hits Bully for ' + attackSelf
			});

			// Output a message to the Player when the player wins
			if(this.bullysHealth <= 0) {
				if (confirm('You Won! Ready to fight again?')) {
					this.fightBtn();
					this.playerScore++
				} else {
					this.continuePlay = false;
				}
				return;
			} 

			this.playersHealth -= attackBully;

			// Keeping track of the Game Log
			this.gameLog.unshift({
				player: false,
				text: 'Bully hits Player for ' + attackBully
			});

			// Output a message to the Player when the player loses
			if(this.playersHealth <= 0) {
				if (confirm("You Lost! Play a new Game?")) {
					this.fightBtn();
					this.bullyScore++
				} else {
					this.continuePlay = false;
				}
				return;
			}
			
		},
		// Create the Special Attack Button
		specialAttackBtn: function() {
			// Create random points deducted for each attack
			var attackOnBully = Math.floor((Math.random()*20) +1);
			var attackOnYou = Math.floor((Math.random()*20) +1);
			this.playersHealth -= attackOnBully,
			this.bullysHealth -= attackOnYou,
			// Game Log
			this.gameLog.unshift({
				player: true,
				text: 'Player hits Bully hard for ' + attackOnYou
			});	

		},
		// Create the Heal Button
		healBtn: function() {
			if (this.playersHealth <= 90) {
				this.playersHealth += 5;
			} else {
				this.playersHealth = 100;
			}
			// To Be Fair for everytime the Player clicks the Heal Button
			// The Bully will get a little bit of healing as well.	
			if (this.bullysHealth <= 90) {
				this.bullysHealth += 2;
			} else {
				this.bullysHealth = 100;
			}


			// Game Log
			this.gameLog.unshift({
				player: true,
				text: 'Player heals for 5' 
			});	
		},
		// Create the Quit Button
		quitBtn: function() {
			this.continuePlay = false;
		}
		

	}
});