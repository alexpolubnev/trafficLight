<template>
  <div class="traffic-light">
    <router-view/>
    <div class="body"></div>
  </div>
</template>

<style lang="scss">
@mixin lights($color) {
  background-color: $color;
  box-shadow: 0 0 25px $color;
}

.traffic-light {
  width: 500px;
  height: 500px;
  margin: auto;
  .head {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;
    width: 150px;
    height: 250px;
    margin: auto;
    background-color: lighten(#000, 20%);
  }
  .body {
    width: 30px;
    height: 300px;
    margin: auto;
    background-color: grey;
  }
}
</style>
