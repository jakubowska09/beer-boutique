<template>
  <div id="app">
    <img src="./assets/logo.png">
    <menu>
      <navigation></navigation>
    </menu>
    <basket></basket>
    <router-view/>
  </div>
</template>

<script>
import Menu from "./components/menu";
import Navigation from "./components/navigation";
import Basket from "./components/basket";
export default {
  components: {
    Menu,
    Navigation,
    Basket
  },
  data() {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
