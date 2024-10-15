
const vm = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            gameIsRunning: false,
            playerPower: 20,
            monsterPower: 20,
            max_specialAttack_heal: 5,
            special_attack_count: 0,
            heal_count: 0,
            message: "<p class='lead'>Game hasn't started!</p>"
        }
    },
    methods: {
        startGame() {
            this.gameIsRunning = true
            this.playerHealth = 100
            this.monsterHealth = 100
            this.special_attack_count = 0
            this.heal_count = 0
            this.message = "<p class='lead'>Game has started!</p>"
        },
        attack() {
            // generate a random damage value, with a max value
            console.log(this.playerPower)
            console.log(this.monsterPower)
            var damage = Math.floor(Math.random() * this.playerPower)
            var newHealth = this.monsterHealth - damage
            this.monsterHealth = newHealth < 0 ? 0: newHealth
            this.message += "You attacked and monster suffered " + damage + " points<br>"

            if (this.monsterHealth <= 0) {
                this.message = "<p class='lead'>Congratulations! You won the game.</p>"
                this.gameIsRunning = false
                return
            }

            // now it's monster's turn to damage you back
            damage = Math.floor(Math.random() * this.monsterPower)
            newHealth = this.playerHealth - damage
            this.playerHealth = newHealth < 0 ? 0: newHealth
            this.message += "Monster attacked and you suffered " + damage + " points<br>" 

            if (this.playerHealth <= 0) {
                this.message = "<p class='lead'>Too bad, you lost the game!</p>"
                this.gameIsRunning = false
                return
            }                   
        },
        specialAttack() {
            var original_playerPower = this.playerPower;
            if (this.special_attack_count < this.max_specialAttack_heal) {
                this.special_attack_count++
                this.playerPower = 50
            } else {
                this.message += "You are out of special attacks!<br>"
            }
            // attack with the increased power
            this.attack();
            // reset to original attack power
            this.playerPower = original_playerPower;
        },
        heal() {
            if (this.heal_count < this.max_specialAttack_heal) {
                var heal = Math.floor(Math.random() * 20)
                var newHealth = this.playerHealth + heal
                this.playerHealth = newHealth > 100 ? 100: newHealth
                this.heal_count++
                this.message += "A wizard has healed you with " + heal + " points<br>"
            } else {
                this.message += "There is no more miracle now. You are on your own!<br>"
            }
        },
        giveup() {
            this.gameIsRunning = false
            this.message = "<p class='lead'>You Gave Up, Loser!</p>"
        },
    }
}).mount('#app')
