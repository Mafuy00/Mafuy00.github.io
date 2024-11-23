// Name:  
// Email:

Vue.createApp({ 
  data() {
    return {
      vuekemonA: {},
      vuekemonB: {},
      scoreA: 0,
      scoreB: 0,
      round: 0,
      roundWinner: "",
      fa: "fa",
      // you can create new data variables if you wish
      // For example:
      moveRelationships: {
        rock: { rock: '', paper: 'B', scissors: 'A' },
        paper: { rock: 'A', paper: '', scissors: 'B' },
        scissors: { rock: 'B', paper: 'A', scissors: '' },
      },
    }
  },
  created() {
    this.initialize();
  },
  methods : {
    initialize() {
      this.roundWinner = ""
      this.scoreA = 0
      this.scoreB = 0
      this.round = 0

      let randInt1 = Math.floor(Math.random() * 3)
      let randInt2 = 0
  
      do {
        randInt2 = Math.floor(Math.random() * 3)
      } while(randInt1 == randInt2)
  
      this.vuekemonA = vuekemons[randInt1]
      this.vuekemonB = vuekemons[randInt2]

      this.reroll();
    },
    reroll() {
      this.round++
      let randInt1 = Math.floor(Math.random() * 3)
      let randInt2 = Math.floor(Math.random() * 3)

      this.vuekemonA.currentMove = this.vuekemonA.attacks[randInt1]
      this.vuekemonB.currentMove = this.vuekemonB.attacks[randInt2]

      this.determineWinner()
    },
    determineWinner() {
      // Part B - Edit determineWinner()  
      // to change this.roundWinner accordingly
      // 2 marks
      let currentMoveA = this.vuekemonA.currentMove
      let currentMoveB = this.vuekemonB.currentMove

      // if moveRelationships lookup object defined in Vue's data
      // this.roundWinner = this.moveRelationships[currentMoveA.type][currentMoveB.type];

      if(currentMoveA.type == "rock") {
        if(currentMoveB.type == "rock") {
          this.roundWinner = ""
        }
        if(currentMoveB.type == "paper") {
          this.roundWinner = "B"
        }
        if(currentMoveB.type == "scissors") {
          this.roundWinner = "A"
        }
      }
      else if(currentMoveA.type == "paper") {
        if(currentMoveB.type == "paper") {
          this.roundWinner = ""
        }
        if(currentMoveB.type == "scissors") {
          this.roundWinner = "B"
        }
        if(currentMoveB.type == "rock") {
          this.roundWinner = "A"
        }
      }
      else if(currentMoveA.type == "scissors") {
        if(currentMoveB.type == "scissors") {
          this.roundWinner = ""
        }
        if(currentMoveB.type == "rock") {
          this.roundWinner = "B"
        }
        if(currentMoveB.type == "paper") {
          this.roundWinner = "A"
        }
      }

      // DO NOT EDIT
      if (this.roundWinner === 'A') this.scoreA++;
      if (this.roundWinner === 'B') this.scoreB++;
      // END DO NOT EDIT

      // End determineWinner()      
    },
  
    winnerMsg(player) {
        return this.roundWinner === player;
    },
  },
  computed: {
    fa_vuekemonA_completed: function() {
      return "fa-hand-" + this.vuekemonA.currentMove.type + "-o";
    },
    fa_vuekemonB_completed: function() {
      return "fa-hand-" + this.vuekemonB.currentMove.type + "-o";
    },

    // Part C - Completed code
    // 1 mark
    percentWinA: function() {
      return (this.scoreA / this.round * 100).toFixed(1) + "%";
    },
    percentWinB: function() {
      return (this.scoreB / this.round * 100).toFixed(1) + "%";
    }
    // End of Part C
  }
}).mount('#app')
