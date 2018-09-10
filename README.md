# DGM3790
Rich Internet Application Development
The Bully-Monster Slayer Game / James Hooper

-bully.js / Line 7, 8
In this game I included a playerScore and bullyScore to keep track of how many wins each player achieves.

-bully.html / Line 18, 33
To create some effects, I included a :class=“{defeatedPlyr:continuePlay}” - for the Player and a :class=“{defeatedBully:continuePlay}” all in a separate <div> element to place images of the players depending on the beginning of the game or during the game. Beginning of the game, each player looks startled. As the game begins, each player turns to their angry fight face.

-bully.js / Line 13, 20, 66, 80, 102
I only included five methods in the VueJS. These five methods are all created for each button that is placed in the HTML5 game. These methods include:

- fightBtn
- attackBtn
- specialAttackBtn
- healBtn
- quitBtn

-bully.js / Line 20 - 64
Much of the numerical logic is created in the attackBtn. I assigned the Math.random to both the Player and the Bully. This way it would stay random for each hit taken.

-bully.js / Line 88 - 92
Within the healBtn, I included the ability to increase the health a little bit for the Bully, as I see that it would not be fair to completely heal yourself to full percent and NOT the bully. This way it makes it a little more fair and competitive. i.e.,

-// To Be Fair, for everytime the Player clicks the Heal Button
-// The Bully will get a little bit of healing as well.	
			if (this.bullysHealth <= 90) {
				this.bullysHealth += 2;
			} else {
				this.bullysHealth = 100;
			}
