<template>
  <!-- GLASS BALL -->
  <div class="glass-ball rotate"></div>
  <!-- TOP LIGHT -->
  <div class="top-light"></div>
  <!-- PAGE CONTENT -->
  <div class="page-content">
    <div class="fullpage fullpage-wrapper">
      <!-- HOME SECTION -->
      <div id="home" class="section fp-section fp-table active fp-completely">
        <div class="fp-tableCell">
          <!-- TITLE -->
          <h1 class="snow-text">NEAR'stmas Coming Soon</h1>
          <SignIn v-if="!user"></SignIn>
          <NftList v-if="user"></NftList>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import SignIn from '@/components/SignIn';
import NftList from '@/components/NftList';

export default {
  name: 'App',
  computed: {
    user() {
      return window.currentUser;
    }
  },
  components: {
    SignIn,
    NftList
  }
}
</script>

<style>
.snow-text {
  margin-top: 3%;
  margin-bottom: 1%;
  font-size: 60px;
}
</style>
