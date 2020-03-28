
<template>
  <div id="app">
    <h1>Traffic-light</h1>
    <hr />
    <h3>Для удобства перехода по адресам: 
      <router-link to="/red">Красный свет</router-link>
      <router-link to="/yellow">Желтый свет</router-link>
      <router-link to="/green">Зеленый свет</router-link>
    </h3>
    <hr/>
    <div class="container">
      <router-view />
    </div>
    
  </div>
</template>

<script>
import TrafficLight from "./components/TrafficLight";
export default {
  components: {
    TrafficLight
  }
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
