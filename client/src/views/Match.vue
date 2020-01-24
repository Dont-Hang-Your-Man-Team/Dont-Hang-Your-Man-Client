<template>
<div class="container">
  <div class="row">
    <div class="col">
      <b-button pill variant="warning">hints</b-button>
    </div>
    <div id="questions" class="col">
       <!-- <a v-for="(letter, i) in question.split('')" :key="i">_ </a> -->
       <p>{{ answerSlot.join(' ') }}</p>
    </div>
  </div>
  <br>
  <br>
  <div class="row">
    <div class="col">
      <img v-if="mistakes === 0" src="@/assets/loneman.png">
      <img v-if="mistakes === 1" src="@/assets/hangman2.png">
      <img v-if="mistakes === 2" src="@/assets/hangman_3.png">
      <img v-if="mistakes === 3" src="@/assets/hangman_4.png">
      <img v-if="mistakes === 4" src="@/assets/hangman5.png">
    </div>
    <div id="choices" class="col">
      <b-button id="letterbutton" v-for="(letter, i) in Object.keys(letters)" :key="i" variant="outline-primary" @click="checkLetter(letter)" :disabled="letters[letter]">{{letter}}</b-button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      letters: {
        a: false,
        b: false,
        c: false,
        d: false,
        e: false,
        f: false,
        g: false,
        h: false,
        i: false,
        j: false,
        k: false,
        l: false,
        m: false,
        n: false,
        o: false,
        p: false,
        q: false,
        r: false,
        s: false,
        t: false,
        u: false,
        v: false,
        w: false,
        x: false,
        y: false,
        z: false
      },
      images: [`@/assets/loneman.png`, '@/assets/hangman2(1).png', '@/assets/hangman_3.png', '@/assets_hangman4.png', '@/assets_hangman5.png'],
      mistakes: 0,
      question: this.$store.state.questions[Math.floor(Math.random() * this.$store.state.questions.length)],
      answerSlot: null,
      answers: [],
      chosenLetter: []
    }
  },
  computed: {
    image: function () {
      return this.images[this.mistakes]
    },
    currentRoom () {
      return this.$store.state.room
    }
  },
  methods: {
    checkLetter (letter) {
      this.chosenLetter.push(letter)
      let match = false
      for (let i = 0; i < this.question.length; i++) {
        if (letter === this.question[i]) {
          this.answers.push(letter)
          match = true
        }
      }
      if (match === false) {
        this.mistakes += 1
      } else {
        for (let i = 0; i < this.question.length; i++) {
          if (this.question[i] === letter) {
            this.answerSlot[i] = letter
          }
        }
      }
      this.letters[letter] = true
    }
  },
  created () {
    let slots = []
    for (let i = 0; i < this.question.length; i++) {
      slots.push('__')
    }
    this.answerSlot = slots
  },
  watch: {
    mistakes: function () {
      if (this.mistakes === 4) {
        this.$store.dispatch('finishGame', {
          username: localStorage.getItem('player'),
          answers: this.answers,
          mistakes: this.mistakes
        })
        this.$router.push('/result')
      }
    },
    answers: function () {
      if (this.answers.length === this.question.length) {
        this.$store.dispatch('finishGame', {
          username: localStorage.getItem('player'),
          answers: this.answers,
          mistakes: this.mistakes
        })
        this.$router.push('/result')
      }
    }
  }
}
</script>

<style scoped>
#letterbutton {
  border-radius: 50%;
}
#choices {
  padding-top: 2em;
}
#questions {
  padding-top: 2em;
}
</style>
