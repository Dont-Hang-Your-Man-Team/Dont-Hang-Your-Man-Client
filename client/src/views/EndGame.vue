<template>
  <div class="container">
    <div class="row">
      <Status class="col-md"/>
    </div>
    <UserCard class="row justify-content-center" />
    <div class="row">
      <GuessedLetter class="col-md" />
    </div>
  </div>
</template>

<script>
import Status from '../components/Status'
import UserCard from '../components/UserCard'
import GuessedLetter from '../components/GuessedLetter'
export default {
  name: 'endgame',
  components: {
    Status,
    UserCard,
    GuessedLetter
  }
}
</script>

<style>

</style>
