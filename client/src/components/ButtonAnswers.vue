<template>
<div class="row">
  <b-button id="letterbutton"  variant="outline-primary" @click="pushLetter" :disabled="clicked">{{letter}}</b-button>
</div>
</template>

<script>
export default {
  props: ['letter'],
  data () {
    return {
      chosenLetter: []
    }
  },
  computed: {
    clicked () {
      for (let i = 0; i < this.chosenLetter.length; i++) {
        if(this.chosenLetter[i] === 'b' && this.letter == 'b') {
          console.log(this.letter, this.chosenLetter[i])
        }
        if (this.letter === this.chosenLetter[i]) {
          return true
        } else {
          return false
        }
      }
    }
  },
  methods: {
    checkLetter () {
      this.$emit('checkLetter', this.letter)
    },
    pushLetter () {

    }
  }

}
</script>

