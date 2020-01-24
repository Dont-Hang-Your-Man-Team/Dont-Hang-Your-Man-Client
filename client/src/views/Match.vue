<template>
<div class="container">
  <div class="row">
    <div class="col">
      <b-button pill variant="warning">hints</b-button>
    </div>
    <div id="questions" class="col">
       <a v-for="(letter, i) in question.split('')" :key="i">_ </a>
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
      question: 'eslint',
      answers: [],
      chosenLetter: []
    }
  },
  computed: {
    image: function () {
      return this.images[this.mistakes]
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
      }
      this.letters[letter] = true
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
