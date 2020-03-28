<template>
  <div class="traffic-light">
    <h3>Время до смены цвета: {{this.time}} сек</h3>
    <div class="head">
      <LightItem
        v-for="(light, i) of lights"
        v-bind:index="i"
        v-bind:light="light"
        v-on:next-light="next"
      />
    </div>
    <div class="body"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import LightItem from "./LightItem";
export default {
  mounted() {
    this.offAllActive(this.color);
    const allLights = this.getAllLights();
    allLights.forEach(element => {
      if(element.active){
        this.time = element.time;
      }
    });
    this.lights = allLights;
    this.changeTime();
  },
  data() {
    return {
      lights: [],
      time: ''
    };
  },
  props: {
    color: String
  },
  components: {
    LightItem
  },
  methods: {
    ...mapGetters(["getAllLights"]),
    ...mapActions(["nextLight"]),
    ...mapMutations(["offAllActive"]),
    next(index) {
      this.nextLight(index);
      const url = "/" + this.lights[index + this.lights[index].step].color;
      this.$router.push(url);
    },
    changeTime() {
      const timer = setInterval(() => {
        if (this.time === 0){
          clearInterval(timer);
        }
        this.time -= 1
      }, 1000);
    }
  }
};
</script>

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
