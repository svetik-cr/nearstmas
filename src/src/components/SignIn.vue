<template>
  <div>
    <h2>Ho ho ho</h2>
    <h3>
      <br>SignIn to talk with Santa Claus!
    </h3>
    <button @click="signIn()" class="button">Sign In</button>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  methods: {
    signIn() {
      window.wallet.requestSignIn(
          window.nearConfig.contractName,
          'NEARstmas'
      );
    }
  }
}
</script>

<style>
h2, h3 {
  color: #FFF;
  font-family: 'Kaushan Script', cursive;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
}

h2 {
  font-size: 42px !important;
  margin: 0 !important;
}

h3 {
  margin-bottom: 30px !important;
}
</style>
