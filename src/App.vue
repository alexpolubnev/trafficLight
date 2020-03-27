
<template>
  <div id="app">
    <h1>Traffic-light</h1>
    <hr />
    <div class="container">
      <TrafficLight/>
    </div>
  </div>
</template>

<script>
import TrafficLight from "./components/TrafficLight";
export default {
  components: {
    TrafficLight
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
