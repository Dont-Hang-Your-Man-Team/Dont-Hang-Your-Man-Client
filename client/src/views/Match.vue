<template>
<div class="container">
  <div class="row">
    <div class="col">
      <b-button pill variant="warning">hints</b-button>
    </div>
    <div id="questions" class="col">
      _ _ _ _ _ _
    </div>
  </div>
  <br>
  <br>
  <div class="row">
    <div class="col">
      <img src="https://hangman.doncolton.com/play/hang0.png">
    </div>
    <div id="choices" class="col">
      <b-button id="letterbutton" v-for="(letter, i) in letters" :key="i" variant="outline-primary">{{letter}}</b-button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
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
